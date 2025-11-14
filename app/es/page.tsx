'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';

export default function Home() {
  const { content } = useLanguage();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            {content.home.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            {content.home.hero.subtitle}
          </p>
          <a href="#contact" className="btn-primary inline-block">
            {content.home.hero.cta}
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing bg-neutral-light/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.home.services.map((service, index) => (
              <div key={index} className="card-feature text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-spacing">
        <div className="container-custom max-w-3xl mx-auto text-center">
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
