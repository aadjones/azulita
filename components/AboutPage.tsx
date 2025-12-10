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
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
            {/* Left Column - Image and CTA */}
            <div className="flex flex-col gap-8">
              <Image
                src="/images/profile.jpg"
                alt="Profile photo"
                width={400}
                height={400}
                className="w-full h-auto rounded-lg max-w-sm mx-auto md:max-w-none md:mx-0"
              />

              {/* CTA Group - Tightly coupled */}
              <div className="cta-group-primary text-center">
                <p className="cta-text">
                  {content.about.freeConsultation}
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-enhanced"
                >
                  {content.home.hero.cta}
                </a>
              </div>
            </div>

            {/* Right Column - Bio Text */}
            <div>
              <h1 className="page-title !text-left !mb-8">
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
