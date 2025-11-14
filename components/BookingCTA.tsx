'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';

interface BookingCTAProps {
  className?: string;
}

export function BookingCTA({ className = '' }: BookingCTAProps) {
  const { content } = useLanguage();

  return (
    <section className={`cta-section ${className}`}>
      <div className="container-custom cta-container">
        <h2 className="cta-title">
          {content.home.bookingCta.title}
        </h2>
        <p className="cta-description">
          {content.home.bookingCta.description}
        </p>
        <a href="#contact" className="btn-primary">
          {content.home.bookingCta.buttonText}
        </a>
      </div>
    </section>
  );
}
