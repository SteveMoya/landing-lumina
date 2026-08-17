export interface Product {
  name: string;
  tagline: string;
  description: string;
  price: number;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const products: Product[] = [
  {
    name: 'Lumina One',
    tagline: 'El silencio definitivo',
    description:
      'Nuestro buque insignia. Cancelación de ruido de referencia, audio espacial y autonomía para toda la semana.',
    price: 349,
    features: [
      'ANC −35 dB con 3 modos',
      '40 h de batería',
      'Audio espacial con head tracking',
      'Aluminio reciclado · 240 g',
      'Garantía de 2 años',
    ],
    featured: true,
    cta: 'Comprar Lumina One',
  },
  {
    name: 'Lumina Air',
    tagline: 'Silencio para cada día',
    description:
      'La misma calma, en formato compacto. Ideales para el día a día, el gimnasio y los viajes cortos.',
    price: 199,
    features: [
      'ANC −25 dB',
      '28 h con estuche de carga',
      'Resistencia IPX4',
      'Carga inalámbrica',
      'Garantía de 2 años',
    ],
    cta: 'Comprar Lumina Air',
  },
];
