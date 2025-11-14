import type { ContentStructure } from '@/lib/i18n/types';

export const es: ContentStructure = {
  nav: {
    home: 'Inicio',
    about: 'Acerca',
    services: 'Servicios',
  },
  home: {
    hero: {
      title: 'Bienvenido a Azulita Holistics',
      subtitle: 'Sanación natural a través de homeopatía, reiki y bienestar holístico',
      cta: 'Reserva Tu Consulta',
    },
    services: [
      {
        title: 'Homeopatía',
        description: 'Remedios naturales y suaves adaptados a tu constitución única y necesidades de salud.',
      },
      {
        title: 'Reiki',
        description: 'Sanación energética para promover relajación profunda, reducir el estrés y apoyar la curación natural de tu cuerpo.',
      },
      {
        title: 'Bienestar Holístico',
        description: 'Enfoque integral de la salud que aborda mente, cuerpo y espíritu en armonía.',
      },
    ],
    bookingCta: {
      title: '¿Lista para Comenzar Tu Viaje de Sanación?',
      description: 'Agenda tu consulta inicial para hablar sobre tus objetivos de salud y crear un plan de bienestar personalizado.',
      buttonText: 'Reservar Consulta',
    },
  },
  about: {
    title: 'Acerca de Azulita Holistics',
    subtitle: 'Atención compasiva arraigada en tradiciones de sanación natural',
    bio: [
      '¡Bienvenida! Me dedico a ayudarte a alcanzar una salud óptima a través de métodos de sanación naturales y suaves.',
      'Con años de experiencia en homeopatía y reiki, adopto un enfoque holístico del bienestar, tratando a la persona completa en lugar de solo los síntomas.',
      'Cada individuo es único, y también lo es su camino hacia la sanación. Trabajo estrechamente con cada cliente para desarrollar planes de tratamiento personalizados que honran la sabiduría natural de tu cuerpo.',
    ],
    philosophy: {
      title: 'Mi Enfoque',
      content: 'Creo en la capacidad innata del cuerpo para sanarse a sí mismo cuando se le da el apoyo adecuado. A través de la homeopatía, el reiki y las prácticas de bienestar holístico, ayudo a crear las condiciones para que tu cuerpo restaure el equilibrio y la vitalidad de forma natural.',
    },
  },
  services: {
    title: 'Servicios',
    subtitle: 'Modalidades de sanación natural adaptadas a tus necesidades',
    services: [
      {
        title: 'Consultas de Homeopatía',
        description: 'Planes de tratamiento homeopático individualizados basados en tu panorama completo de salud.',
        details: [
          'Consulta inicial (90 minutos)',
          'Sesiones de seguimiento (60 minutos)',
          'Recomendaciones de remedios personalizados',
          'Apoyo continuo y ajustes',
        ],
      },
      {
        title: 'Sesiones de Reiki',
        description: 'Sanación energética suave para restaurar el equilibrio y promover relajación profunda.',
        details: [
          'Sesión completa de reiki (60 minutos)',
          'Equilibrio de chakras',
          'Reducción del estrés y relajación',
          'Apoyo para la sanación emocional y física',
        ],
      },
      {
        title: 'Coaching de Bienestar Holístico',
        description: 'Orientación integral para el bienestar de mente, cuerpo y espíritu.',
        details: [
          'Orientación sobre estilo de vida y nutrición',
          'Técnicas de manejo del estrés',
          'Prácticas de mindfulness y meditación',
          'Integración de modalidades de sanación natural',
        ],
      },
    ],
  },
  footer: {
    contact: {
      title: 'Contáctanos',
      email: 'azulitaholistics@gmail.com',
      instagram: '@azulitaholistics',
    },
    copyright: '© 2024 Azulita Holistics. Todos los derechos reservados.',
  },
};
