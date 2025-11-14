import type { ContentStructure } from '@/lib/i18n/types';

export const en: ContentStructure = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Services',
  },
  home: {
    hero: {
      title: 'Welcome to Azulita Holistics',
      subtitle: 'Natural healing through homeopathy, reiki, and holistic wellness',
      cta: 'Book Your Consultation',
    },
    services: [
      {
        title: 'Homeopathy',
        description: 'Gentle, natural remedies tailored to your unique constitution and health needs.',
      },
      {
        title: 'Reiki',
        description: 'Energy healing to promote deep relaxation, reduce stress, and support your body\'s natural healing.',
      },
      {
        title: 'Holistic Wellness',
        description: 'Comprehensive approach to health addressing mind, body, and spirit in harmony.',
      },
    ],
    bookingCta: {
      title: 'Ready to Begin Your Healing Journey?',
      description: 'Schedule your initial consultation to discuss your health goals and create a personalized wellness plan.',
      buttonText: 'Book Consultation',
    },
  },
  about: {
    title: 'About Azulita Holistics',
    subtitle: 'Compassionate care rooted in natural healing traditions',
    bio: [
      'Welcome! I\'m dedicated to helping you achieve optimal health through gentle, natural healing methods.',
      'With years of experience in homeopathy and reiki, I take a holistic approach to wellness, treating the whole person rather than just symptoms.',
      'Every individual is unique, and so is their path to healing. I work closely with each client to develop personalized treatment plans that honor your body\'s natural wisdom.',
    ],
    philosophy: {
      title: 'My Approach',
      content: 'I believe in the body\'s innate ability to heal itself when given the right support. Through homeopathy, reiki, and holistic wellness practices, I help create the conditions for your body to restore balance and vitality naturally.',
    },
  },
  services: {
    title: 'Services',
    subtitle: 'Natural healing modalities tailored to your needs',
    services: [
      {
        title: 'Homeopathy Consultations',
        description: 'Individualized homeopathic treatment plans based on your complete health picture.',
        details: [
          'Initial consultation (90 minutes)',
          'Follow-up sessions (60 minutes)',
          'Personalized remedy recommendations',
          'Ongoing support and adjustments',
        ],
      },
      {
        title: 'Reiki Sessions',
        description: 'Gentle energy healing to restore balance and promote deep relaxation.',
        details: [
          'Full body reiki session (60 minutes)',
          'Chakra balancing',
          'Stress reduction and relaxation',
          'Support for emotional and physical healing',
        ],
      },
      {
        title: 'Holistic Wellness Coaching',
        description: 'Comprehensive guidance for mind, body, and spirit wellness.',
        details: [
          'Lifestyle and nutrition guidance',
          'Stress management techniques',
          'Mindfulness and meditation practices',
          'Integration of natural healing modalities',
        ],
      },
    ],
  },
  footer: {
    contact: {
      title: 'Get in Touch',
      email: 'azulitaholistics@gmail.com',
      instagram: '@azulitaholistics',
    },
    copyright: '© 2024 Azulita Holistics. All rights reserved.',
  },
};
