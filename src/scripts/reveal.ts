/** Reveal on scroll: IntersectionObserver que añade .is-visible.
 *  El estado oculto inicial solo aplica con scripting + motion OK
 *  (ver global.css: @media (scripting: enabled)). */
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (items.length > 0) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -48px 0px' },
    );
    items.forEach((el) => observer.observe(el));
  } else {
    items.forEach((el) => el.classList.add('is-visible'));
  }
}
