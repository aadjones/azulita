'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';
import { PageHeader } from '@/components/PageHeader';
import { BookingCTA } from '@/components/BookingCTA';

export default function Services() {
  const { content } = useLanguage();

  return (
    <div>
      <PageHeader title={content.services.title} subtitle={content.services.subtitle} />

      {/* Services List */}
      <section className="section-spacing">
        <div className="container-custom content-section-wide">
          <div className="service-list-spacing">
            {content.services.services.map((service, index) => (
              <div key={index} className="card-feature">
                <h3 className="service-detail-title">
                  {service.title}
                </h3>
                <p className="service-detail-description">
                  {service.description}
                </p>
                <ul className="service-detail-list">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="service-detail-item">
                      <span className="service-detail-bullet">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA className="bg-light" />
    </div>
  );
}
