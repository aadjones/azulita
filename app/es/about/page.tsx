'use client';

import { useLanguage } from '@/lib/i18n/useLanguage';

export default function About() {
  const { content } = useLanguage();

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/5 to-transparent py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {content.about.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            {content.about.subtitle}
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-spacing">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {content.about.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-foreground/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-spacing bg-neutral-light/30">
        <div className="container-custom max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            {content.about.philosophy.title}
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {content.about.philosophy.content}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
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
