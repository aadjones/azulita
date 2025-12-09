'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/useLanguage';
import { BOOKING_URL } from '@/lib/constants';

export default function AboutPage() {
  const { content } = useLanguage();

  return (
    <div>
      <section className="section-spacing">
        <div className="container-custom">
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12"
            style={{ alignItems: 'start' }}
          >
            {/* Left Column - Image and Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                width={400}
                height={400}
                className="max-w-sm mx-auto md:max-w-none md:mx-0"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <div style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem' }}>{content.about.freeConsultation}</p>
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

            {/* Right Column - Bio Text */}
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>
                {content.about.title}
              </h1>
              <div className="text-body-spacing">
                {content.about.bio.map((paragraph, index) => (
                  <p key={index} className="text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
