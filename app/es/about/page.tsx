'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';
import { PageHeader } from '@/components/PageHeader';
import { BookingCTA } from '@/components/BookingCTA';

export default function About() {
  const { content } = useLanguage();

  return (
    <div>
      <PageHeader title={content.about.title} subtitle={content.about.subtitle} />

      {/* Bio Section */}
      <section className="section-spacing">
        <div className="container-custom content-section">
          <div className="text-body-spacing">
            {content.about.bio.map((paragraph, index) => (
              <p key={index} className="text-body">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing bg-light">
        <div className="container-custom content-section">
          <h2 className="section-title">
            {content.about.philosophy.title}
          </h2>
          <p className="text-body">
            {content.about.philosophy.content}
          </p>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
