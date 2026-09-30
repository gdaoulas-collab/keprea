import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const PRODUCT_OPTIONS = ["biofertilisant", "boosters", "biocontrole", "extraits", "autre"] as const;

interface FieldFeedbackFormProps {
  defaultProduct?: string;
}

const FieldFeedbackForm = ({ defaultProduct }: FieldFeedbackFormProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    culture: "",
    region: "",
    product: defaultProduct && (PRODUCT_OPTIONS as readonly string[]).includes(defaultProduct) ? [defaultProduct] : [],
    feedback: "",
    website: "", // honeypot — laissé vide par les humains
  });
  const [rgpdAccepted, setRgpdAccepted] = useState(false);

  const toggleProduct = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      product: checked ? [...prev.product, value] : prev.product.filter(p => p !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.culture || !formData.region || formData.product.length === 0 || !formData.feedback) {
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
      const { error } = await supabase.functions.invoke('send-field-feedback-email', {
        body: { ...formData, product: formData.product.join(", ") }
      });

      if (error) throw error;

      toast({
        title: t('toast.terrain.success'),
        description: t('toast.terrain.success.desc'),
      });

      setFormData({ firstName: "", lastName: "", email: "", culture: "", region: "", product: [], feedback: "", website: "" });
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

  const inputClass = "h-12 rounded-xl bg-muted/40 border-border/50 text-base placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-[border-color,box-shadow] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
  const textareaClass = "rounded-xl bg-muted/40 border-border/50 text-base placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary/40 focus-visible:border-primary/40 transition-[border-color,box-shadow] duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] resize-none";

  return (
    <div className="p-2 rounded-[2rem] bg-muted/40 ring-1 ring-border/60">
      <div className="bg-background rounded-[calc(2rem-0.375rem)] p-8 md:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
          {t('contact.terrain.title')}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
          <div
            style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
            aria-hidden="true"
          >
            <Label htmlFor="terrain-website">Site web</Label>
            <Input
              id="terrain-website"
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
              <Label htmlFor="terrain-firstName">{t('contact.form.firstName')} *</Label>
              <Input
                id="terrain-firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder={t('contact.form.firstName.placeholder')}
                required
                className={inputClass}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="terrain-lastName">{t('contact.form.lastName')} *</Label>
              <Input
                id="terrain-lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder={t('contact.form.lastName.placeholder')}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="terrain-email">{t('contact.form.email')} *</Label>
            <Input
              id="terrain-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder={t('contact.form.email.placeholder')}
              required
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="terrain-culture">{t('contact.terrain.culture')} *</Label>
              <Input
                id="terrain-culture"
                value={formData.culture}
                onChange={(e) => handleInputChange('culture', e.target.value)}
                placeholder={t('contact.terrain.culture.placeholder')}
                required
                className={inputClass}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="terrain-region">{t('contact.terrain.region')} *</Label>
              <Input
                id="terrain-region"
                value={formData.region}
                onChange={(e) => handleInputChange('region', e.target.value)}
                placeholder={t('contact.terrain.region.placeholder')}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="terrain-product">{t('contact.terrain.product')} *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  id="terrain-product"
                  className={`${inputClass} w-full flex items-center justify-between px-3`}
                >
                  <span className={formData.product.length === 0 ? "text-muted-foreground/50 font-normal" : "text-left"}>
                    {formData.product.length === 0
                      ? t('contact.terrain.product.placeholder')
                      : formData.product.map((value) => t(`contact.terrain.product.${value}`)).join(", ")}
                  </span>
                  <ChevronDown className="w-4 h-4 opacity-50 shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-2" align="start">
                <div className="space-y-1">
                  {PRODUCT_OPTIONS.map((value) => (
                    <label
                      key={value}
                      htmlFor={`terrain-product-${value}`}
                      className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-muted/60 cursor-pointer"
                    >
                      <Checkbox
                        id={`terrain-product-${value}`}
                        checked={formData.product.includes(value)}
                        onCheckedChange={(checked) => toggleProduct(value, checked === true)}
                      />
                      <span className="text-sm font-normal">{t(`contact.terrain.product.${value}`)}</span>
                    </label>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label htmlFor="terrain-feedback">{t('contact.terrain.feedback')} *</Label>
            <Textarea
              id="terrain-feedback"
              value={formData.feedback}
              onChange={(e) => handleInputChange('feedback', e.target.value)}
              placeholder={t('contact.terrain.feedback.placeholder')}
              rows={6}
              required
              className={textareaClass}
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="terrain-rgpd"
              checked={rgpdAccepted}
              onCheckedChange={(checked) => setRgpdAccepted(checked === true)}
              aria-required="true"
            />
            <Label htmlFor="terrain-rgpd" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              {t('contact.form.rgpd.pre')}{" "}
              <Link to="/politique-confidentialite" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                {t('contact.form.rgpd.link')}
              </Link>
              . *
            </Label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !rgpdAccepted}
            className="w-full h-14 rounded-full bg-primary text-primary-foreground font-semibold text-base flex items-center justify-between px-6 group disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/90 active:scale-[0.98]"
          >
            <span>{isSubmitting ? t('contact.form.submitting') : t('contact.terrain.submit')}</span>
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FieldFeedbackForm;
