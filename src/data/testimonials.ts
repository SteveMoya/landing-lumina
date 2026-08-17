export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Vivo en una ciudad que nunca duerme. Lumina One es la primera vez en años que escucho mi propia música sin pelearme con el ruido.',
    name: 'María Fernández',
    role: 'Arquitecta · Madrid',
  },
  {
    quote:
      'Ocho horas de foco diarias con ANC puesto y no noto los auriculares. La batería dura más que mi jornada. Sin más.',
    name: 'Andrés Ruiz',
    role: 'Desarrollador · Ciudad de México',
  },
  {
    quote:
      'El Modo Transparencia es magia: redacto con el mundo fuera, y un toque me devuelve a la entrevista. Es mi herramienta de trabajo.',
    name: 'Lucía Herrera',
    role: 'Periodista · Bogotá',
  },
];
