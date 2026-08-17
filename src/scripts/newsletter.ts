/** Newsletter: validación de email + estado de éxito.
 *  Sin backend en la landing (estática). La integración con un ESP
 *  (Buttondown, Mailchimp, Resend…) se documenta en el README. */
export function initNewsletter(form: HTMLFormElement): void {
  const status = form.querySelector<HTMLElement>('[data-newsletter-status]');
  const input = form.querySelector<HTMLInputElement>('input[type="email"]');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!status || !input) return;

    const email = input.value.trim();

    if (!emailPattern.test(email)) {
      status.textContent = 'Introduce un correo electrónico válido.';
      status.dataset.state = 'error';
      status.hidden = false;
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }

    input.removeAttribute('aria-invalid');
    status.textContent = 'Gracias. Te avisaremos cuando llegue el silencio.';
    status.dataset.state = 'success';
    status.hidden = false;
    form.reset();
  });
}
