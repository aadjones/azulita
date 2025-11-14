'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';

export function ServicesOverview() {
  const { content } = useLanguage();

  return (
    <section className="section-spacing bg-light">
      <div className="container-custom">
        <div className="services-grid">
          {content.home.services.map((service, index) => (
            <div key={index} className="card-feature text-center">
              <h3 className="service-card-title">
                {service.title}
              </h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
