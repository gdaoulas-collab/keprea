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

interface FieldFeedbackFormData {
  firstName: string;
  lastName: string;
  email: string;
  culture: string;
  region: string;
  product: string;
  feedback: string;
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
    const formData: FieldFeedbackFormData = await req.json();

    // Honeypot: bots tend to fill every field. Pretend success without doing any work.
    if (formData.website && formData.website.trim() !== "") {
      return jsonResponse(200, { success: true, message: "Retour terrain envoyé avec succès" });
    }

    if (
      !isNonEmptyString(formData.firstName, 100) ||
      !isNonEmptyString(formData.lastName, 100) ||
      !isValidEmail(formData.email) ||
      !isNonEmptyString(formData.culture, 200) ||
      !isNonEmptyString(formData.region, 200) ||
      !isNonEmptyString(formData.product, 200) ||
      !isNonEmptyString(formData.feedback, 5000)
    ) {
      return jsonResponse(400, { success: false, error: "Champs invalides ou manquants" });
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const clientIp = getClientIp(req);
    const allowed = await checkRateLimit(supabase, `field-feedback:${clientIp}`, { windowMinutes: 10, maxHits: 3 });
    if (!allowed) {
      return jsonResponse(429, { success: false, error: "Trop de tentatives, réessayez plus tard" });
    }

    // Store in database
    const { error: dbError } = await supabase
      .from('field_feedback_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        culture: formData.culture,
        region: formData.region,
        product: formData.product,
        feedback: formData.feedback,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store field feedback submission");
    }

    const firstName = escapeHtml(formData.firstName);
    const lastName = escapeHtml(formData.lastName);
    const email = escapeHtml(formData.email);
    const culture = escapeHtml(formData.culture);
    const region = escapeHtml(formData.region);
    const product = escapeHtml(formData.product);
    const feedbackHtml = escapeHtml(formData.feedback).replace(/\n/g, '<br>');

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Retour terrain <onboarding@resend.dev>",
      to: ["g.daoulas@keprea.com"],
      subject: `Nouveau retour terrain - ${firstName} ${lastName}`,
      html: `
        <h2>Nouveau retour terrain</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Culture:</strong> ${culture}</p>
        <p><strong>Région:</strong> ${region}</p>
        <p><strong>Produit utilisé:</strong> ${product}</p>
        <p><strong>Retour:</strong></p>
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0;">
          ${feedbackHtml}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">Ce retour a été envoyé depuis le formulaire de contact du site Keprea.</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Keprea <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Confirmation de réception - Keprea",
      html: `
        <h2>Merci pour votre retour terrain !</h2>
        <p>Bonjour ${firstName},</p>
        <p>Nous avons bien reçu votre retour d'expérience et vous en remercions.</p>
        <p>Notre équipe agronomique va l'examiner et pourra revenir vers vous pour approfondir certains points.</p>
        <hr>
        <p><strong>Récapitulatif de votre retour :</strong></p>
        <p><strong>Culture:</strong> ${culture}</p>
        <p><strong>Région:</strong> ${region}</p>
        <p><strong>Produit utilisé:</strong> ${product}</p>
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0; color: #666;">
          ${feedbackHtml}
        </div>
        <p>Cordialement,<br>L'équipe Keprea</p>
      `,
    });

    console.log("Emails sent successfully:", { adminEmailResponse, userEmailResponse });

    return jsonResponse(200, { success: true, message: "Retour terrain envoyé avec succès" });
  } catch (error: any) {
    console.error("Error in send-field-feedback-email function:", error);
    return jsonResponse(500, { success: false, error: error.message || "Erreur lors de l'envoi du retour terrain" });
  }
};

serve(handler);
