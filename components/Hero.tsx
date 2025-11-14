'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';

export function Hero() {
  const { content } = useLanguage();

  return (
    <section className="hero-section">
      <div className="container-custom">
        <h1 className="hero-title">
          {content.home.hero.title}
        </h1>
        <p className="hero-subtitle">
          {content.home.hero.subtitle}
        </p>
        <a href="#contact" className="btn-primary">
          {content.home.hero.cta}
        </a>
      </div>
    </section>
  );
}
