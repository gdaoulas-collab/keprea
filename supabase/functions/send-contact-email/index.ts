import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'
import {
  checkRateLimit,
  corsHeadersFor,
  escapeHtml,
  getClientIp,
  isNonEmptyString,
  isValidEmail,
} from "../_shared/security.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  website?: string; // honeypot — must stay empty
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = corsHeadersFor(req);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const jsonResponse = (status: number, body: Record<string, unknown>) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  try {
    const formData: ContactFormData = await req.json();

    // Honeypot: bots tend to fill every field. Pretend success without doing any work.
    if (formData.website && formData.website.trim() !== "") {
      return jsonResponse(200, { success: true, message: "Message envoyé avec succès" });
    }

    if (
      !isNonEmptyString(formData.firstName, 100) ||
      !isNonEmptyString(formData.lastName, 100) ||
      !isValidEmail(formData.email) ||
      !isNonEmptyString(formData.message, 5000) ||
      (formData.company !== undefined && formData.company.length > 200) ||
      (formData.subject !== undefined && formData.subject.length > 200)
    ) {
      return jsonResponse(400, { success: false, error: "Champs invalides ou manquants" });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIp = getClientIp(req);
    const allowed = await checkRateLimit(supabase, `contact:${clientIp}`, { windowMinutes: 10, maxHits: 3 });
    if (!allowed) {
      return jsonResponse(429, { success: false, error: "Trop de tentatives, réessayez plus tard" });
    }

    // Store in database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store contact submission");
    }

    const firstName = escapeHtml(formData.firstName);
    const lastName = escapeHtml(formData.lastName);
    const email = escapeHtml(formData.email);
    const company = formData.company ? escapeHtml(formData.company) : undefined;
    const subject = formData.subject ? escapeHtml(formData.subject) : undefined;
    const messageHtml = escapeHtml(formData.message).replace(/\n/g, '<br>');

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Formulaire Contact <onboarding@resend.dev>",
      to: ["g.daoulas@keprea.com"],
      subject: `Nouveau message de contact - ${firstName} ${lastName}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Société:</strong> ${company}</p>` : ''}
        ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0;">
          ${messageHtml}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">Ce message a été envoyé depuis le formulaire de contact du site Keprea.</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Keprea <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Confirmation de réception - Keprea",
      html: `
        <h2>Merci pour votre message !</h2>
        <p>Bonjour ${firstName},</p>
        <p>Nous avons bien reçu votre message et vous remercions de nous avoir contactés.</p>
        <p>Notre équipe examinera votre demande et vous répondra dans les plus brefs délais.</p>
        <hr>
        <p><strong>Récapitulatif de votre message :</strong></p>
        ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ''}
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0; color: #666;">
          ${messageHtml}
        </div>
        <p>Cordialement,<br>L'équipe Keprea</p>
      `,
    });

    console.log("Emails sent successfully:", { adminEmailResponse, userEmailResponse });

    return jsonResponse(200, { success: true, message: "Message envoyé avec succès" });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return jsonResponse(500, { success: false, error: error.message || "Erreur lors de l'envoi du message" });
  }
};

serve(handler);
