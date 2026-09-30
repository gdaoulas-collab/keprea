import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
  embedded?: boolean;
}

const ContactForm = ({ embedded = false }: ContactFormProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
    website: "", // honeypot — laissé vide par les humains
  });
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.message) {
      toast({
        title: t('toast.error'),
        description: t('toast.error.required'),
        variant: "destructive",
      });
      return;
    }

    if (!rgpdAccepted) {
      toast({
        title: t('toast.error'),
        description: t('toast.error.rgpd'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: t('toast.success'),
        description: t('toast.success.desc'),
      });

      setFormData({ firstName: "", lastName: "", email: "", company: "", message: "", website: "" });
      setRgpdAccepted(false);
    } catch (error) {
      toast({
        title: t('toast.error'),
        description: t('toast.error.send'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const inputClass = embedded
    ? "h-12 rounded-xl bg-muted/40 border-border/50 text-base placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-[border-color,box-shadow] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
    : "";

  const textareaClass = embedded
    ? "rounded-xl bg-muted/40 border-border/50 text-base placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-[border-color,box-shadow] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] resize-none"
    : "";

  const formContent = (
    <>
      {embedded ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
          {t('contact.form.title')}
        </p>
      ) : (
        <h3 className="text-xl font-semibold text-foreground mb-6">{t('contact.form.title')}</h3>
      )}

      <form onSubmit={handleSubmit} className={embedded ? "space-y-5 mt-6" : "space-y-6"}>
        <div
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
          aria-hidden="true"
        >
          <Label htmlFor="website">Site web</Label>
          <Input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder={t('contact.form.firstName.placeholder')}
              required
              className={inputClass}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">{t('contact.form.lastName')} *</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder={t('contact.form.lastName.placeholder')}
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">{t('contact.form.company')} *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            placeholder={t('contact.form.company.placeholder')}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.form.email')} *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder={t('contact.form.email.placeholder')}
            required
            className={inputClass}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t('contact.form.message')} *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            placeholder={t('contact.form.message.placeholder')}
            rows={embedded ? 6 : 5}
            required
            className={textareaClass}
          />
        </div>

        <div className="flex items-start gap-3">
          <Checkbox
            id="rgpd"
            checked={rgpdAccepted}
            onCheckedChange={(checked) => setRgpdAccepted(checked === true)}
            aria-required="true"
          />
          <Label htmlFor="rgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
            {t('contact.form.rgpd.pre')}{" "}
            <Link to="/politique-confidentialite" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              {t('contact.form.rgpd.link')}
            </Link>
            . *
          </Label>
        </div>

        {embedded ? (
          <button
            type="submit"
            disabled={isSubmitting || !rgpdAccepted}
            className="w-full h-14 rounded-full bg-primary text-primary-foreground font-semibold text-base flex items-center justify-between px-6 group disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/90 active:scale-[0.98]"
          >
            <span>{isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}</span>
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting || !rgpdAccepted}
            className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 hover:bg-primary/90 active:scale-[0.98]"
          >
            {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
          </button>
        )}
      </form>
    </>
  );

  if (embedded) {
    return (
      <div className="p-2 rounded-[2rem] bg-muted/40 ring-1 ring-border/60">
        <div className="bg-background rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
          {formContent}
        </div>
      </div>
    );
  }

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t('contact.form.eyebrow')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
          {formContent}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
