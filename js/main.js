(() => {
  const body = document.body;
  const header = document.querySelector('[data-header]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const mobileToggle = document.querySelector('[data-mobile-menu-toggle]');
  const menuClose = document.querySelector('[data-menu-close]');
  const toast = document.querySelector('[data-toast]');
  const cookieBanner = document.querySelector('[data-cookie-banner]');
  const languageButtons = [...document.querySelectorAll('[data-language-toggle]')];

  const translations = {
    sv: {
      'meta.title': 'Jobb hos Agil Arbetskraft',
      'meta.description': 'Hitta lediga tjänster hos Agil Arbetskraft inom IT, lager och logistik, bygg, transport samt flytt och montage.',
      'brand.home': 'Agil Arbetskraft – startsida',
      'nav.mainLabel': 'Huvudmeny',
      'nav.mobileLabel': 'Mobilmeny',
      'nav.careerMenuLabel': 'Karriärmeny',
      'nav.careerMenuTitle': 'Karriärmeny',
      'nav.siteHome': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.employeeLogin': 'Medarbetare login',
      'nav.candidateLogin': 'Kandidat login',
      'nav.employeeTitle': 'Medarbetare',
      'nav.employeeLoginSubtitle': 'Logga in som medarbetare',
      'nav.candidateTitle': 'Kandidat',
      'nav.candidateLoginSubtitle': 'Logga in i Connect',
      'nav.home': 'Start',
      'nav.jobs': 'Jobb',
      'nav.employees': 'Medarbetare',
      'nav.departments': 'Avdelningar',
      'common.connect': 'Connecta',
      'hero.eyebrow': 'JOBBA MED OSS',
      'hero.title': 'Vilken tjänst<br><em>söker du?</em>',
      'hero.description': 'Välj ett område och hitta din nästa möjlighet hos Agil Arbetskraft.',
      'cards.viewJobs': 'Se jobb',
      'cards.itAria': 'Visa lediga jobb inom IT',
      'cards.itAlt': 'Person som arbetar vid en laptop inom IT',
      'cards.logisticsAria': 'Connecta för framtida jobb inom lager och logistik',
      'cards.logisticsAlt': 'Flyttpersonal som lastar lådor vid en lastbil',
      'cards.constructionAria': 'Connecta för framtida jobb inom bygg',
      'cards.constructionAlt': 'Byggarbetare i hjälm på en arbetsplats',
      'cards.transportAria': 'Visa lediga jobb inom transport',
      'cards.transportAlt': 'Lastbil på väg i solnedgång',
      'cards.movingAria': 'Connecta för framtida jobb inom flytt och montage',
      'cards.movingAlt': 'Flyttpersonal som bär möbler',
      'future.eyebrow': 'FRAMTIDA MÖJLIGHETER',
      'future.title': 'Hittar du inte tjänsten du önskar?',
      'future.description': 'Inget ledigt för dig? Eller är du nyfiken och spanar för framtiden? Connecta med oss, så hör vi av oss så snart vi har en tjänst ledig som du kan vara intresserad av.',
      'future.button': 'Connecta med oss',
      'strip.kicker': 'Din nästa möjlighet kan vara närmare än du tror.',
      'strip.title': 'Skapa din kandidatprofil redan idag.',
      'strip.button': 'Connecta för framtida möjligheter',
      'footer.description': 'Bemanning och rekrytering för svenska företag. Rätt personal, i rätt tid.',
      'footer.navLabel': 'Sidfotsmeny',
      'footer.privacy': 'Data och integritet',
      'footer.cookies': 'Hantera cookies',
      'footer.employeeLogin': 'Inloggning för medarbetare',
      'footer.connectLogin': 'Logga in till Connect',
      'footer.teamtailor': 'Karriärsida från Teamtailor',
      'chat.open': 'Öppna chatten',
      'chat.message': 'Hej! Hur kan vi hjälpa dig?',
      'cookies.title': 'Cookies',
      'cookies.description': 'Vi använder nödvändiga cookies för att sidan ska fungera korrekt.',
      'cookies.necessary': 'Endast nödvändiga',
      'cookies.all': 'Godkänn alla',
      'cookies.saved': 'Dina cookieinställningar har sparats.',
      'menu.open': 'Öppna menyn',
      'menu.close': 'Stäng menyn',
      'language.switch': 'Byt till engelska',
      'language.title': 'English',
      'language.code': 'EN',
      'language.flag': '🇬🇧'
    },
    en: {
      'meta.title': 'Jobs at Agil Arbetskraft',
      'meta.description': 'Find open roles at Agil Arbetskraft in IT, warehousing and logistics, construction, transport, moving and assembly.',
      'brand.home': 'Agil Arbetskraft – home',
      'nav.mainLabel': 'Main navigation',
      'nav.mobileLabel': 'Mobile navigation',
      'nav.careerMenuLabel': 'Career menu',
      'nav.careerMenuTitle': 'Career menu',
      'nav.siteHome': 'Home',
      'nav.services': 'Services',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.employeeLogin': 'Employee login',
      'nav.candidateLogin': 'Candidate login',
      'nav.employeeTitle': 'Employee',
      'nav.employeeLoginSubtitle': 'Log in as an employee',
      'nav.candidateTitle': 'Candidate',
      'nav.candidateLoginSubtitle': 'Log in to Connect',
      'nav.home': 'Start',
      'nav.jobs': 'Jobs',
      'nav.employees': 'Employees',
      'nav.departments': 'Departments',
      'common.connect': 'Connect',
      'hero.eyebrow': 'WORK WITH US',
      'hero.title': 'Which role<br><em>are you looking for?</em>',
      'hero.description': 'Choose an area and find your next opportunity at Agil Arbetskraft.',
      'cards.viewJobs': 'View jobs',
      'cards.itAria': 'View open IT jobs',
      'cards.itAlt': 'Person working on a laptop in IT',
      'cards.logisticsAria': 'Connect for future warehousing and logistics jobs',
      'cards.logisticsAlt': 'Moving staff loading boxes beside a truck',
      'cards.constructionAria': 'Connect for future construction jobs',
      'cards.constructionAlt': 'Construction worker wearing a helmet at a worksite',
      'cards.transportAria': 'View open transport jobs',
      'cards.transportAlt': 'Truck driving on a road at sunset',
      'cards.movingAria': 'Connect for future moving and assembly jobs',
      'cards.movingAlt': 'Moving staff carrying furniture',
      'future.eyebrow': 'FUTURE OPPORTUNITIES',
      'future.title': "Can't find the role you're looking for?",
      'future.description': "Nothing available for you right now? Or are you exploring future opportunities? Connect with us and we'll get in touch as soon as we have a role that may suit you.",
      'future.button': 'Connect with us',
      'strip.kicker': 'Your next opportunity may be closer than you think.',
      'strip.title': 'Create your candidate profile today.',
      'strip.button': 'Connect for future opportunities',
      'footer.description': 'Staffing and recruitment for Swedish companies. The right people, at the right time.',
      'footer.navLabel': 'Footer navigation',
      'footer.privacy': 'Data and privacy',
      'footer.cookies': 'Manage cookies',
      'footer.employeeLogin': 'Employee login',
      'footer.connectLogin': 'Log in to Connect',
      'footer.teamtailor': 'Career site by Teamtailor',
      'chat.open': 'Open chat',
      'chat.message': 'Hello! How can we help you?',
      'cookies.title': 'Cookies',
      'cookies.description': 'We use necessary cookies to ensure that the website works correctly.',
      'cookies.necessary': 'Necessary only',
      'cookies.all': 'Accept all',
      'cookies.saved': 'Your cookie preferences have been saved.',
      'menu.open': 'Open menu',
      'menu.close': 'Close menu',
      'language.switch': 'Switch to Swedish',
      'language.title': 'Svenska',
      'language.code': 'SV',
      'language.flag': '🇸🇪'
    }
  };

  let currentLanguage = 'sv';

  const text = (key) => translations[currentLanguage][key] || translations.sv[key] || key;

  const applyLanguage = (language) => {
    currentLanguage = language === 'en' ? 'en' : 'sv';
    document.documentElement.lang = currentLanguage;
    document.title = text('meta.title');

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = text(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      element.innerHTML = text(element.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      element.setAttribute('aria-label', text(element.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      element.setAttribute('alt', text(element.dataset.i18nAlt));
    });
    document.querySelectorAll('[data-i18n-content]').forEach((element) => {
      element.setAttribute('content', text(element.dataset.i18nContent));
    });

    languageButtons.forEach((button) => {
      button.setAttribute('aria-label', text('language.switch'));
      button.setAttribute('title', text('language.title'));
      const code = button.querySelector('[data-language-code]');
      const flag = button.querySelector('[data-language-flag]');
      if (code) code.textContent = text('language.code');
      if (flag) flag.textContent = text('language.flag');
    });

    if (mobileToggle) {
      const isOpen = mobileMenu?.classList.contains('is-open');
      mobileToggle.setAttribute('aria-label', text(isOpen ? 'menu.close' : 'menu.open'));
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => applyLanguage(currentLanguage === 'sv' ? 'en' : 'sv'));
  });

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
  };

  let menuWasOpenedBy = null;

  const setMobileMenu = (open) => {
    if (!mobileMenu || !mobileToggle) return;
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    mobileToggle.setAttribute('aria-expanded', String(open));
    mobileToggle.setAttribute('aria-label', text(open ? 'menu.close' : 'menu.open'));
    body.classList.toggle('is-locked', open);

    if (open) {
      menuWasOpenedBy = document.activeElement;
      window.setTimeout(() => menuClose?.focus(), 30);
    } else if (menuWasOpenedBy instanceof HTMLElement) {
      window.setTimeout(() => menuWasOpenedBy.focus(), 30);
      menuWasOpenedBy = null;
    }
  };

  mobileToggle?.addEventListener('click', () => setMobileMenu(true));
  menuClose?.addEventListener('click', () => setMobileMenu(false));

  document.querySelectorAll('[data-mobile-menu-link]').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMobileMenu(false);
  });

  const navLinks = [...document.querySelectorAll('[data-nav-link]')];
  const sections = ['start', 'jobb', 'medarbetare', 'avdelningar']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
    });
  };

  const updateActiveSection = () => {
    if (window.scrollY < 90) {
      setActiveLink('start');
      return;
    }

    const marker = window.scrollY + Math.min(window.innerHeight * 0.30, 220);
    const orderedSections = [...sections].sort((first, second) => {
      const firstTop = first.getBoundingClientRect().top + window.scrollY;
      const secondTop = second.getBoundingClientRect().top + window.scrollY;
      return firstTop - secondTop;
    });

    let active = 'start';
    orderedSections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if (sectionTop <= marker) active = section.id;
    });
    setActiveLink(active);
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const id = link.getAttribute('href')?.slice(1);
      if (id) setActiveLink(id);
    });
  });

  document.querySelector('[data-chat]')?.addEventListener('click', () => showToast(text('chat.message')));

  const readCookiePreference = () => {
    try {
      return localStorage.getItem('agil-careers-cookie');
    } catch (error) {
      return null;
    }
  };

  const saveCookiePreference = (choice) => {
    try {
      localStorage.setItem('agil-careers-cookie', choice);
    } catch (error) {
      // The banner must still close when the page is opened directly from a local file.
    }
  };

  const setCookieBanner = (visible) => {
    if (!cookieBanner) return;
    cookieBanner.hidden = !visible;
    cookieBanner.setAttribute('aria-hidden', String(!visible));
  };

  document.querySelector('[data-cookie-open]')?.addEventListener('click', () => {
    setCookieBanner(true);
  });

  document.querySelectorAll('[data-cookie-choice]').forEach((button) => {
    button.addEventListener('click', () => {
      setCookieBanner(false);
      saveCookiePreference(button.dataset.cookieChoice || 'necessary');
      showToast(text('cookies.saved'));
    });
  });

  if (!readCookiePreference() && cookieBanner) {
    setTimeout(() => setCookieBanner(true), 700);
  } else {
    setCookieBanner(false);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

  const onScroll = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
    updateActiveSection();
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  applyLanguage('sv');
  onScroll();
})();
