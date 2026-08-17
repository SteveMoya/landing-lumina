export interface NavItem {
  label: string;
  href: string;
}

export interface Social {
  name: string;
  url: string;
  icon: 'instagram' | 'x' | 'tiktok' | 'youtube';
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface HeroStat {
  label: string;
  value: string;
}

export const site = {
  name: 'Lumina',
  tagline: 'El silencio es un lujo.',
  description:
    'Auriculares premium con cancelación activa de ruido. Lumina One aísla la ciudad para que solo escuches lo que importa.',
  url: 'https://lumina.stevemoya.me',
  email: 'hola@lumina.audio',
  founded: 2026,

  nav: [
    { label: 'Productos', href: '#productos' },
    { label: 'Tecnología', href: '#tecnologia' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Preguntas', href: '#preguntas' },
  ] satisfies NavItem[],

  cta: { label: 'Comprar', href: '#productos' },

  hero: {
    badge: 'Nuevo · Lumina One',
    title: { start: 'El silencio es un', accent: 'lujo.' },
    subtitle:
      'Lumina One aísla el ruido de la ciudad para que solo escuches tu música, tu voz y tu momento.',
    primaryCta: 'Descubrir Lumina One',
    secondaryCta: 'Ver tecnología',
    stats: [
      { label: 'Reducción de ruido', value: '−35 dB' },
      { label: 'Autonomía', value: '40 h' },
      { label: 'Conexión', value: 'Bluetooth 5.4' },
    ] satisfies HeroStat[],
  },

  footer: {
    columns: [
      {
        title: 'Producto',
        links: [
          { label: 'Lumina One', href: '#productos' },
          { label: 'Lumina Air', href: '#productos' },
          { label: 'Tecnología', href: '#tecnologia' },
        ],
      },
      {
        title: 'Empresa',
        links: [
          { label: 'Opiniones', href: '#opiniones' },
          { label: 'Preguntas frecuentes', href: '#preguntas' },
          { label: 'Contacto', href: 'mailto:hola@lumina.audio' },
        ],
      },
    ] satisfies FooterColumn[],
  },

  socials: [
    { name: 'Instagram', url: 'https://instagram.com/lumina.audio', icon: 'instagram' },
    { name: 'X', url: 'https://x.com/luminaaudio', icon: 'x' },
    { name: 'TikTok', url: 'https://tiktok.com/@lumina.audio', icon: 'tiktok' },
    { name: 'YouTube', url: 'https://youtube.com/@luminaaudio', icon: 'youtube' },
  ] satisfies Social[],

  legal: {
    privacy: '#',
    terms: '#',
  },
} as const;
