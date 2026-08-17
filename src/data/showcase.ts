export interface Spec {
  label: string;
  value: string;
}

export const showcase = {
  eyebrow: 'Modo Silencio',
  title: 'Escucha lo que importa. Nada más.',
  description:
    'Dos modos para cada momento: Silencio total para concentrarte, y Transparencia para cuando el mundo te necesita. Un toque, y Lumina One decide por ti.',
  specs: [
    { label: 'Drivers', value: '40 mm de neodimio' },
    { label: 'Cancelación de ruido', value: '−35 dB · 3 modos' },
    { label: 'Batería', value: '40 h con ANC activo' },
    { label: 'Peso', value: '240 g' },
    { label: 'Bluetooth', value: '5.4 · multipunto' },
    { label: 'Carga', value: 'USB-C · 10 min = 5 h' },
  ] satisfies Spec[],
  highlight: {
    title: 'Modo Transparencia',
    description:
      'Un toque y el mundo vuelve a entrar: anuncios, conversaciones, la voz de quien te importa. Sin quitarte los auriculares.',
  },
};
