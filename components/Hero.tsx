"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { BOOKING_URL } from "@/lib/constants";

export function Hero() {
  const { content, language } = useLanguage();

  const getLocalizedPath = (path: string) => {
    return language === "es" ? `/es${path}` : path;
  };

  return (
    <section className="hero-section">
      <div className="container-custom">
        {/* Logo and Title Group */}
        <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 animate-fade-in-up">
          <Image
            src="/images/azulita-transparent.png"
            alt="Azulita butterfly logo"
            width={80}
            height={80}
            className="h-16 w-auto md:h-20 animate-float"
          />
          <h1 className="hero-title !mb-0">
            {content.home.hero.title}
          </h1>
        </div>

        {/* Services Tagline - PROMINENT */}
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-4 md:mb-6 animate-fade-in-up animation-delay-200">
          {content.home.hero.tagline}
        </p>

        {/* Subtitle - Value Proposition */}
        <p className="hero-subtitle !mb-12 md:!mb-16 animate-fade-in-up animation-delay-300">
          {content.home.hero.subtitle}
        </p>

        {/* Primary CTA Group - Tightly coupled */}
        <div className="cta-group-primary text-center animate-scale-in animation-delay-400">
          <p className="cta-text">
            {content.home.hero.freeConsultation}
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-enhanced"
          >
            {content.home.hero.cta}
          </a>

          <p className="cta-text-secondary mt-3">
            {content.home.hero.callToAction}
          </p>
        </div>

        {/* Secondary CTA Group - Clear separation from primary */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 pt-8 border-t border-neutral/30 animate-fade-in animation-delay-600">
          <Link
            href={getLocalizedPath("/services")}
            className="btn-secondary inline-block min-w-[140px]"
          >
            {content.nav.services}
          </Link>
          <Link
            href={getLocalizedPath("/about")}
            className="btn-secondary inline-block min-w-[140px]"
          >
            {content.nav.about}
          </Link>
        </div>
      </div>
    </section>
  );
}
