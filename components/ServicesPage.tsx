'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';
import { BOOKING_URL } from '@/lib/constants';

export default function ServicesPage() {
  const { content } = useLanguage();

  return (
    <div>
      <section className="section-spacing">
        <div className="container-custom">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)', textAlign: 'center' }}>
            {content.services.title}
          </h1>

          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
            {content.services.intro}
          </p>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ marginBottom: '1rem' }}>{content.services.freeConsultation}</p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block' }}
            >
              {content.home.hero.cta}
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '800px', margin: '0 auto' }}>
            {content.services.services.map((service, index) => (
              <div key={index}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--primary)', textTransform: 'uppercase' }}>
                    {service.title}
                  </h2>
                  <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>
                    {service.price}
                  </span>
                </div>

                <p className="text-body" style={{ marginBottom: service.note ? '1rem' : 0 }}>
                  {service.description}
                </p>

                {service.note && (
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    {service.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              {content.services.closingText}
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-block' }}
            >
              {content.home.hero.cta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
