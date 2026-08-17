export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: '¿Cuánto dura la batería realmente?',
    answer:
      'Lumina One ofrece 40 horas de reproducción con cancelación de ruido activa. Con ANC apagado supera las 60 horas. La carga rápida USB-C da 5 horas con 10 minutos.',
  },
  {
    question: '¿Cómo funciona la cancelación de ruido?',
    answer:
      'Cada copa tiene dos micrófonos que captan el ruido externo y generan una onda inversa en tiempo real. Puedes elegir entre tres modos: Silencio, Transparencia y Adaptativo.',
  },
  {
    question: '¿Puedo conectarlos a varios dispositivos a la vez?',
    answer:
      'Sí. La conexión multipunto mantiene dos dispositivos emparejados simultáneamente — por ejemplo, el portátil y el móvil — y cambia entre ellos automáticamente.',
  },
  {
    question: '¿Qué incluye la garantía?',
    answer:
      'Dos años de garantía contra defectos de fabricación, con sustitución sin coste durante el primer año. El envío de retorno está cubierto.',
  },
  {
    question: '¿Puedo devolverlos si no me convencen?',
    answer:
      'Claro. Tienes 30 días para probarlos desde que los recibes. Si no encuentras tu silencio, te devolvemos el 100 % del importe.',
  },
  {
    question: '¿Hacen envíos internacionales?',
    answer:
      'Sí, enviamos a más de 40 países con seguimiento y seguro. Los pedidos se preparan en 24 horas y llegan en 3–7 días laborables.',
  },
];
