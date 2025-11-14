'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';

export default function Services() {
  const { content } = useLanguage();

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {content.services.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {content.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-spacing">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {content.services.services.map((service, index) => (
              <div key={index} className="card-feature">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-foreground/80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start text-foreground/80"
                    >
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-neutral-light/30">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {content.home.bookingCta.title}
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            {content.home.bookingCta.description}
          </p>
          <a href="#contact" className="btn-primary inline-block">
            {content.home.bookingCta.buttonText}
          </a>
        </div>
      </section>
    </div>
  );
}
