'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';
import { BOOKING_URL } from '@/lib/constants';

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
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          {content.home.bookingCta.buttonText}
        </a>
      </div>
    </section>
  );
}
