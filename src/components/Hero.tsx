import { useRef } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <video
          ref={videoRef}
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          src="/portfolio-video-4.mp4"
          poster="/lovable-uploads/hero-poster-frame.jpg"
        />
        {/* Gradient: darker at bottom for text, lighter at top to show video */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/38 to-black/12 z-10" />
      </div>

      {/* Content — bottom-left anchored */}
      <div className="relative z-20 w-full container mx-auto px-6 sm:px-8 lg:px-10 pt-24 pb-16 md:pb-24">
        <div className="max-w-3xl">

          {/* Eyebrow tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-3 py-1 mb-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
              Biosolutions agricoles
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-tight tracking-tight mb-5">
            {t('hero.title')}
          </h1>

          <p className="text-base md:text-lg text-white/75 mb-8 max-w-xl leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA group */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/solutions"
              className="group inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white pl-6 pr-2 py-2 font-semibold text-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              {t('hero.cta')}
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Stats — inline with pipe separators, not 3 equal cards */}
          <div className="flex flex-wrap gap-x-0 mt-10 border-t border-white/20 pt-6">
            <div className="pr-8">
              <div className="text-3xl font-bold text-white tracking-tight">{t('hero.stat1.value')}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">{t('hero.stat1.label')}</div>
            </div>
            <div className="border-l border-white/20 px-8">
              <div className="text-3xl font-bold text-white tracking-tight">{t('hero.stat2.value')}</div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5 max-w-[190px] leading-tight">{t('hero.stat2.label')}</div>
            </div>
            <div className="border-l border-white/20 pl-8">
              <div className="text-xl md:text-2xl font-bold whitespace-nowrap">
                <span className="text-white">Made in </span>
                <span style={{ color: '#0055A4' }}>Fr</span>
                <span className="text-white">an</span>
                <span style={{ color: '#EF4135' }}>ce</span>
              </div>
              <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5 max-w-[160px] leading-tight">{t('hero.stat3.label')}</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
