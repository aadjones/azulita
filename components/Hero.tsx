"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/useLanguage";
import { BOOKING_URL } from "@/lib/constants";

export function Hero() {
  const { content, language } = useLanguage();

  const getLocalizedPath = (path: string) => {
    return language === "es" ? `/es${path}` : path;
  };

  return (
    <section className="hero-section">
      <div className="container-custom">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Image
            src="/images/azulita-transparent.png"
            alt="Azulita butterfly logo"
            width={80}
            height={80}
            style={{ height: "80px", width: "auto", backgroundColor: "var(--background)" }}
          />
          <h1 className="hero-title" style={{ margin: 0 }}>
            {content.home.hero.title}
          </h1>
        </div>
        <p
          className="hero-subtitle"
          style={{ fontSize: "1.125rem", marginBottom: "1rem" }}
        >
          {content.home.hero.tagline}
        </p>
        <p className="hero-subtitle">{content.home.hero.subtitle}</p>
        <p
          style={{
            fontSize: "1rem",
            marginTop: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          {content.home.hero.freeConsultation}
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ marginBottom: "1rem" }}
        >
          {content.home.hero.cta}
        </a>
        <p
          style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "2rem" }}
        >
          {content.home.hero.callToAction}
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href={getLocalizedPath("/services")}
            className="btn-primary"
            style={{ display: "inline-block" }}
          >
            {content.nav.services}
          </Link>
          <Link
            href={getLocalizedPath("/about")}
            className="btn-primary"
            style={{ display: "inline-block" }}
          >
            {content.nav.about}
          </Link>
        </div>
      </div>
    </section>
  );
}
