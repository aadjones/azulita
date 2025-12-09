// Language type
export type Language = 'en' | 'es';

// Navigation content
export interface NavContent {
  home: string;
  about: string;
  services: string;
}

// Hero section content
export interface HeroContent {
  title: string;
  tagline: string;
  subtitle: string;
  freeConsultation: string;
  cta: string;
  callToAction: string;
}

// Service item
export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

// Home page content
export interface HomeContent {
  hero: HeroContent;
  services: ServiceItem[];
  bookingCta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

// About page content
export interface AboutContent {
  title: string;
  subtitle: string;
  bio: string[];
  philosophy: {
    title: string;
    content: string;
  };
}

// Services page content
export interface ServicesContent {
  title: string;
  subtitle: string;
  services: Array<{
    title: string;
    description: string;
    details: string[];
  }>;
}

// Footer content
export interface FooterContent {
  contact: {
    title: string;
    email: string;
    instagram: string;
  };
  copyright: string;
}

// Complete content structure
export interface ContentStructure {
  nav: NavContent;
  home: HomeContent;
  about: AboutContent;
  services: ServicesContent;
  footer: FooterContent;
}

// Metadata for SEO
export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: string;
}

export interface MetadataStructure {
  home: PageMetadata;
  about: PageMetadata;
  services: PageMetadata;
}
