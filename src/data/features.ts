import type { IconName } from '../components/ui/Icon.astro';

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'waves',
    title: 'Cancelación activa de ruido',
    description:
      'Hasta −35 dB de reducción. Microfonía dual por copa que elimina el zumbido de la ciudad, la oficina y el transporte.',
  },
  {
    icon: 'battery',
    title: '40 horas de batería',
    description:
      'Una semana de uso normal con una sola carga. Y con 10 minutos de carga rápida, 5 horas más de silencio.',
  },
  {
    icon: 'equalizer',
    title: 'Audio adaptativo',
    description:
      'Ecualización en tiempo real que ajusta el sonido al entorno y al contenido. Cada nota suena como debe sonar.',
  },
  {
    icon: 'feather',
    title: 'Confort de otro nivel',
    description:
      '240 gramos con almohadillas de memory foam. Diseñados para que los olvides puestos durante horas.',
  },
  {
    icon: 'bluetooth',
    title: 'Conexión multipunto',
    description:
      'Conecta dos dispositivos a la vez y cambia del portátil al móvil sin desconectar nada.',
  },
  {
    icon: 'leaf',
    title: 'Diseño responsable',
    description:
      'Aluminio reciclado, embalaje libre de plástico y una huella de carbono compensada al 100 %.',
  },
];
