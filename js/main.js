(() => {
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const menu = document.querySelector('[data-menu]');
  const menuOpen = document.querySelector('[data-menu-open]');
  const toast = document.querySelector('[data-toast]');
  const cookieBanner = document.querySelector('[data-cookie-banner]');

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };

  const setMenu = (open) => {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    menuOpen?.setAttribute('aria-expanded', String(open));
    body.classList.toggle('is-locked', open);
  };

  menuOpen?.addEventListener('click', () => setMenu(true));
  document.querySelector('[data-menu-close]')?.addEventListener('click', () => setMenu(false));
  document.querySelectorAll('[data-menu-link]').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  document.querySelector('[data-share]')?.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, text: 'Upptäck möjligheter hos Agil Arbetskraft', url: location.href });
      } else {
        await navigator.clipboard.writeText(location.href);
        showToast('Länken har kopierats.');
      }
    } catch (_) {}
  });

  document.querySelector('[data-chat]')?.addEventListener('click', () => showToast('Hej! Hur kan vi hjälpa dig?'));

  document.querySelector('[data-cookie-open]')?.addEventListener('click', () => {
    if (cookieBanner) cookieBanner.hidden = false;
  });
  document.querySelectorAll('[data-cookie-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('agil-careers-cookie', button.dataset.cookieChoice || 'necessary');
      if (cookieBanner) cookieBanner.hidden = true;
      showToast('Dina cookieinställningar har sparats.');
    });
  });
  if (!localStorage.getItem('agil-careers-cookie') && cookieBanner) {
    setTimeout(() => { cookieBanner.hidden = false; }, 700);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
