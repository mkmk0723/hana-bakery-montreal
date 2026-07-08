const header = document.getElementById('siteHeader');
const mobileNav = document.getElementById('mobileNav');
const hamburger = document.getElementById('hamburger');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');

    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
    });
  });
}

const i18n = {
  en: {
    tagline: 'BAKERY & PÂTISSERIE',
    nav: {
      'index.html': 'TOP',
      'about.html': 'ABOUT',
      'menu.html': 'MENU',
      'shop.html': 'LOCATIONS',
      'news.html': 'NEWS',
      'contact.html': 'CONTACT',
      'recruit.html': 'CAREERS',
    },
    footerTagline: 'Japanese-French pastry,<br />baked fresh in Montréal.<br />Something special, every day.',
    navigation: 'NAVIGATION',
    shopInfo: 'MAIN LOCATION',
    shopAddress: '📍 123 Rue Laurier Ouest, Montréal, QC H2T 2N7',
    shopHours: '🕘 Tue–Sun 08:00 – 18:00<br /><small>Closed Mondays</small>',
    shopTel: '☎ 514-123-4567',
    home: {
      est: 'MONTRÉAL — EST. 2018',
      heroTitle: 'A gift for yourself,<br /><em>shared with everyone.</em>',
      heroSub: 'We listen to the language of ingredients, and honour the warmth of handcraft. Freshly baked every morning — pastries and breads that soften the heart.',
      menuCta: 'View Menu',
      aboutCta: 'About',
      topicsLabel: 'TOPICS',
      topics: [
        ['2025.07.01', 'Notice', 'Summer-limited Peach Pie available from 15 July'],
        ['2025.06.20', 'Media', 'Featured in Montréal Food Guide'],
        ['2025.06.10', 'Notice', '7th Anniversary Fair in Montréal — details inside'],
      ],
      allNews: 'ALL NEWS ›',
      aboutLabel: 'ABOUT',
      aboutTitle: 'Listening to ingredients,<br /><span class="red">honoring handcraft.</span>',
      aboutText: 'HANA was born in 2018 on a quiet street in Montréal, with a single wish: to bring Japanese-French bakery craft to everyday tables.',
      readMore: 'READ MORE ›',
      featuresLabel: 'FEATURES',
      features: [
        ['01 — CRISPY PASTRY', 'Shatteringly Crisp', 'Canadian flour and cultured butter, folded layer upon layer. The scent and texture of something just out of the oven.'],
        ['02 — RICH CUSTARD', 'Velvety Custard', 'Local dairy and fresh egg yolks — our house custard is silky and deeply flavoured.'],
        ['03 — PREMIUM APPLE', 'Québec Orchard Apple', 'Sourced from local Québec orchards. Natural sweetness and gentle acidity that lift every bite.'],
      ],
      shopLabel: 'LOCATIONS',
      shopName: 'Laurier',
      shopTag: 'BOULANGERIE',
      viewShops: 'VIEW LOCATIONS ›',
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'Our Story',
      labels: ['PHILOSOPHY', 'VALUES', 'TEAM'],
      philTitle: 'Listening to ingredients,<br />honoring handcraft.',
      philBody: [
        'HANA was born in 2018 on a quiet street in Montréal, with a single wish: to bring Japanese-French bakery craft to everyday tables.',
        'Founder Misaki Hanada trained with Parisian boulangers before creating her own Japanese-French bakery style in Montréal, using Canadian flour, local dairy, and seasonal Québec ingredients.',
        'We never chase volume. Every morning begins with dough shaped by hand, and that promise never changes.',
      ],
      values: [
        ['Honest Ingredients', 'We visit every farm personally and use only produce with a face behind it. Seasonal ingredients at their natural peak.'],
        ['Accumulated Craft', 'No shortcuts. Dough is shaped by the hands and intuition of our bakers. Consistency is built day by day.'],
        ['Everyday Richness', 'Not only for special occasions — we want to make every table more beautiful. Real quality for daily life.'],
      ],
      team: [
        ['Misaki Hanada', 'Founder & Head Pâtissière', 'After seven years in Parisian boulangers, Misaki founded HANA in 2018. Her recipes evolve quietly with each season.'],
        ['Yuichi Tanaka', 'Head Boulanger', 'Starting at 4 a.m. every day, Yuichi’s artisan discipline is the backbone of our bread programme.'],
      ],
    },
    menu: {
      eyebrow: 'MENU',
      title: 'Our Menu',
      tabs: ['APPLE PIE', 'PASTRY', 'BREAD'],
      categories: [
        ['APPLE PIE', [
          ['Classic Apple Pie', '$8.00', 'Our signature: Québec orchard apples encased in a shatteringly crisp pastry shell.'],
          ['Custard Apple Pie', '$8.50', 'Rich house-made custard paired with fresh apple.'],
          ['Caramel Apple Pie', '$8.75', 'Deep caramel sauce entwines the apple filling.'],
        ]],
        ['PASTRY', [
          ['Butter Croissant', '$7.00', 'Crafted with cultured butter and layered by hand. Golden, flaky, and fragrant from the oven.'],
          ['Seasonal Danish', '$6.00', 'Crowned with today’s seasonal fruit. Made by hand each morning.'],
        ]],
        ['BREAD', [
          ['Square Milk Loaf', '$9.50', 'Cold-fermented overnight. Pillowy texture and a clean, sweet aroma.'],
          ['Campagne', '$7.50', 'Whole-wheat and rye loaf with deep grain sweetness.'],
        ]],
      ],
      note: '* Prices are listed in CAD. Items are limited and available while stock lasts.<br />* Please ask staff for allergen information.',
    },
    shop: {
      eyebrow: 'LOCATIONS',
      title: 'Visit HANA in Montréal',
      label: 'MONTRÉAL LOCATIONS',
      shops: [
        ['BOULANGERIE', 'Laurier', 'Our main bakery on Laurier, serving fresh pastries, sourdough, and Japanese-French seasonal desserts every morning.', '📍 123 Rue Laurier Ouest, Montréal, QC H2T 2N7', '🕘 Tue–Sun 08:00 – 18:00<br /><small>Closed Mondays</small>', '☎ 514-123-4567'],
        ['CAFÉ', 'Mile End', 'A quiet café space for coffee, croissants, and afternoon sweets in one of Montréal’s most creative neighbourhoods.', '📍 78 Avenue Fairmount Ouest, Montréal, QC H2T 2M2', '🕘 Wed–Sun 08:00 – 17:00<br /><small>Closed Mondays & Tuesdays</small>', '☎ 514-987-5432'],
        ['PÂTISSERIE', 'Vieux-Montréal', 'A small pâtisserie boutique offering gift boxes, seasonal cakes, and limited weekend pastries near the historic district.', '📍 45 Rue Saint-Paul Ouest, Montréal, QC H2Y 1Y9', '🕘 Wed–Sun 09:00 – 19:00<br /><small>Closed Mondays & Tuesdays</small>', '☎ 514-111-2222'],
      ],
    },
    news: {
      eyebrow: 'NEWS',
      title: 'News & Topics',
      filters: ['All', 'Notice', 'Product', 'Media'],
      items: [
        ['2025.07.01', 'Notice', 'Summer-limited Peach Pie available from 15 July'],
        ['2025.06.20', 'Media', 'Featured in Montréal Food Guide'],
        ['2025.06.10', 'Notice', '7th Anniversary Fair in Montréal — details inside'],
        ['2025.05.28', 'Product', 'Apple Pie Gift Assortment now available to order'],
        ['2025.05.15', 'Notice', 'Mother’s Day gift orders have now closed'],
        ['2025.04.30', 'Media', 'Featured in Montréal Food Guide as a local bakery to watch'],
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Get in Touch',
      label: 'CONTACT',
      heading: 'Questions, orders, or collaborations.',
      text: 'For product inquiries, media requests, and local collaboration proposals, please contact us through the form below. Our team will reply within three business days.',
      tel: 'Tel',
      email: 'Email',
      hours: 'Hours',
      hoursValue: 'Tue–Sun 08:00 – 18:00 / Closed Mondays',
      form: ['Name', 'Your name', 'Email', 'your@email.com', 'Subject', 'Order / Media / Collaboration', 'Message', 'Write your message here', 'SEND MESSAGE'],
    },
    recruit: {
      eyebrow: 'CAREERS',
      title: 'Careers',
      messageLabel: 'MESSAGE',
      positionsLabel: 'OPEN POSITIONS',
      heading: 'Make everyday tables more beautiful with us.',
      text: 'HANA is looking for people who respect ingredients, value careful handwork, and enjoy serving local customers with warmth. Experience is welcome, but curiosity and consistency matter most.',
      contactCta: 'CONTACT US',
      jobs: [
        ['Full-time', 'Baker / Boulanger', 'Bread production, dough shaping, oven work, and daily mise en place.', 'APPLY ›'],
        ['Full-time', 'Pâtissier / Pâtissière', 'Apple pies, seasonal pastries, custard, Danish finishing, and quality control.', 'APPLY ›'],
        ['Part-time', 'Café Staff', 'Customer service, coffee, packaging, and warm guest communication.', 'APPLY ›'],
      ],
    },
  },
  fr: {
    tagline: 'BOULANGERIE & PÂTISSERIE',
    nav: {
      'index.html': 'ACCUEIL',
      'about.html': 'À PROPOS',
      'menu.html': 'CARTE',
      'shop.html': 'ADRESSES',
      'news.html': 'ACTUALITÉS',
      'contact.html': 'CONTACT',
      'recruit.html': 'CARRIÈRES',
    },
    footerTagline: 'Pâtisserie franco-japonaise,<br />cuite fraîche à Montréal.<br />Quelque chose d’exceptionnel, chaque jour.',
    navigation: 'NAVIGATION',
    shopInfo: 'ADRESSE PRINCIPALE',
    shopAddress: '📍 123 rue Laurier Ouest, Montréal, QC H2T 2N7',
    shopHours: '🕘 mar.–dim. 08h00 – 18h00<br /><small>Fermé le lundi</small>',
    shopTel: '☎ 514-123-4567',
    home: {
      est: 'MONTRÉAL — FONDÉE EN 2018',
      heroTitle: 'Un trésor pour soi,<br /><em>partagé avec tous.</em>',
      heroSub: 'À l’écoute des ingrédients, dans le respect du geste artisanal. Chaque matin, des viennoiseries et des pains qui apaisent l’âme.',
      menuCta: 'Voir la carte',
      aboutCta: 'À propos',
      topicsLabel: 'ACTUALITÉS',
      topics: [
        ['2025.07.01', 'Annonce', 'Tarte à la pêche édition estivale — disponible dès le 15 juillet'],
        ['2025.06.20', 'Médias', 'Présentation dans le numéro de juin de « Food & Living »'],
        ['2025.06.10', 'Annonce', 'Foire du 7e anniversaire à Montréal — tous les détails'],
      ],
      allNews: 'TOUTES LES ACTUALITÉS ›',
      aboutLabel: 'À PROPOS',
      aboutTitle: 'À l’écoute des ingrédients,<br /><span class="red">honorer le savoir-faire.</span>',
      aboutText: 'HANA est née en 2018 dans une rue tranquille de Montréal, avec un seul désir : apporter le savoir-faire franco-japonais aux tables du quotidien.',
      readMore: 'EN SAVOIR PLUS ›',
      featuresLabel: 'NOS ATOUTS',
      features: [
        ['01 — PÂTE CROUSTILLANTE', 'Feuilletage Éclatant', 'Farine canadienne et beurre de culture, plié couche par couche. Le parfum et la texture de quelque chose qui sort du four à l’instant.'],
        ['02 — CRÈME VELOUTÉE', 'Crème Pâtissière', 'Produits laitiers locaux et jaunes d’œufs frais — notre crème maison est soyeuse et profondément parfumée.'],
        ['03 — POMME D’EXCEPTION', 'Pomme des vergers du Québec', 'Approvisionnée dans des vergers du Québec. Une douceur naturelle et une acidité délicate qui subliment chaque bouchée.'],
      ],
      shopLabel: 'ADRESSES',
      shopName: 'Laurier',
      shopTag: 'BOULANGERIE',
      viewShops: 'VOIR LES ADRESSES ›',
    },
    about: {
      eyebrow: 'À PROPOS',
      title: 'Notre Histoire',
      labels: ['PHILOSOPHIE', 'VALEURS', 'ÉQUIPE'],
      philTitle: 'À l’écoute des ingrédients,<br />honorer le savoir-faire.',
      philBody: [
        'HANA est née en 2018 dans une rue tranquille de Montréal, avec un seul désir : apporter le savoir-faire franco-japonais aux tables du quotidien.',
        'La fondatrice Misaki Hanada s’est formée auprès de boulangers parisiens avant de créer à Montréal son propre style franco-japonais avec de la farine canadienne, des produits laitiers locaux et des ingrédients saisonniers du Québec.',
        'Nous ne cherchons jamais le volume. Chaque matin commence par des pâtes façonnées à la main, et cette promesse ne change jamais.',
      ],
      values: [
        ['Ingrédients Honnêtes', 'Nous visitons chaque ferme personnellement et n’utilisons que des produits avec un visage derrière eux. Des ingrédients de saison au sommet de leur saveur naturelle.'],
        ['L’Art Accumulé', 'Aucun raccourci. Les pâtes sont façonnées par les mains et l’intuition de nos boulangers. La constance se construit jour après jour.'],
        ['La Richesse du Quotidien', 'Pas seulement pour les grandes occasions — nous voulons embellir chaque table. Une vraie qualité pour la vie de tous les jours.'],
      ],
      team: [
        ['Misaki Hanada', 'Fondatrice & Chef Pâtissière', 'Après sept ans dans des boulangeries parisiennes, Misaki a fondé HANA en 2018. Ses recettes évoluent doucement au fil des saisons.'],
        ['Yuichi Tanaka', 'Chef Boulanger', 'Se levant chaque matin à 4h, la discipline artisanale de Yuichi est l’épine dorsale de notre programme de pain.'],
      ],
    },
    menu: {
      eyebrow: 'CARTE',
      title: 'Notre Carte',
      tabs: ['TARTE AUX POMMES', 'VIENNOISERIES', 'PAINS'],
      categories: [
        ['TARTE AUX POMMES', [
          ['Tarte Classique aux Pommes', '$8.00', 'Notre signature : des pommes de vergers du Québec enveloppées dans une pâte feuilletée d’une légèreté éclatante.'],
          ['Tarte Pommes-Crème Pâtissière', '$8.50', 'Une riche crème pâtissière maison associée à des pommes fraîches.'],
          ['Tarte Tatin Caramel', '$8.75', 'Un caramel profond entoure la garniture aux pommes.'],
        ]],
        ['VIENNOISERIES', [
          ['Croissant au Beurre', '$7.00', 'Réalisé avec du beurre de culture et façonné à la main. Doré, feuilleté et parfumé à la sortie du four.'],
          ['Danish de Saison', '$6.00', 'Couronné du fruit de saison du jour. Fait à la main chaque matin.'],
        ]],
        ['PAINS', [
          ['Pain de Mie Carré', '$9.50', 'Notre pâte maison, fermentée à froid toute la nuit. Une texture moelleuse et un arôme doux et pur.'],
          ['Pain de Campagne', '$7.50', 'Un pain robuste au blé complet et au seigle. Plus on mastique, plus la douceur du blé se révèle.'],
        ]],
      ],
      note: '* Les prix sont indiqués en dollars canadiens. Les articles sont limités et disponibles jusqu’à épuisement des stocks.<br />* Pour les informations sur les allergènes, veuillez consulter notre personnel.',
    },
    shop: {
      eyebrow: 'ADRESSES',
      title: 'Visitez HANA à Montréal',
      label: 'ADRESSES À MONTRÉAL',
      shops: [
        ['BOULANGERIE', 'Laurier', 'Notre boulangerie principale sur Laurier, avec viennoiseries fraîches, levain et desserts franco-japonais de saison chaque matin.', '📍 123 rue Laurier Ouest, Montréal, QC H2T 2N7', '🕘 mar.–dim. 08h00 – 18h00<br /><small>Fermé le lundi</small>', '☎ 514-123-4567'],
        ['CAFÉ', 'Mile End', 'Un espace café tranquille pour le café, les croissants et les douceurs de l’après-midi dans l’un des quartiers les plus créatifs de Montréal.', '📍 78 avenue Fairmount Ouest, Montréal, QC H2T 2M2', '🕘 mer.–dim. 08h00 – 17h00<br /><small>Fermé lundi et mardi</small>', '☎ 514-987-5432'],
        ['PÂTISSERIE', 'Vieux-Montréal', 'Une petite boutique de pâtisserie proposant coffrets cadeaux, gâteaux de saison et viennoiseries limitées près du quartier historique.', '📍 45 rue Saint-Paul Ouest, Montréal, QC H2Y 1Y9', '🕘 mer.–dim. 09h00 – 19h00<br /><small>Fermé lundi et mardi</small>', '☎ 514-111-2222'],
      ],
    },
    news: {
      eyebrow: 'ACTUALITÉS',
      title: 'Actualités & Événements',
      filters: ['Tout', 'Annonce', 'Produit', 'Médias'],
      items: [
        ['2025.07.01', 'Annonce', 'Tarte à la pêche édition estivale — disponible dès le 15 juillet'],
        ['2025.06.20', 'Médias', 'Présentation dans le numéro de juin de « Food & Living »'],
        ['2025.06.10', 'Annonce', 'Foire du 7e anniversaire à Montréal — tous les détails'],
        ['2025.05.28', 'Produit', 'Coffret assortiment de tartes aux pommes désormais disponible'],
        ['2025.05.15', 'Annonce', 'Les commandes pour la fête des mères sont closes'],
        ['2025.04.30', 'Médias', 'Mentionnée dans Montréal Food Guide comme boulangerie locale à découvrir'],
      ],
    },
    contact: {
      eyebrow: 'CONTACT',
      title: 'Nous Contacter',
      label: 'CONTACT',
      heading: 'Questions, commandes ou collaborations.',
      text: 'Pour les demandes de produits, les demandes médias et les propositions de collaboration locale, veuillez nous contacter via le formulaire ci-dessous. Notre équipe vous répondra sous trois jours ouvrés.',
      tel: 'Tél.',
      email: 'E-mail',
      hours: 'Horaires',
      hoursValue: '09h00 – 19h00 / Fermé le lundi',
      form: ['Nom', 'Votre nom', 'E-mail', 'votre@email.com', 'Sujet', 'Commande / Médias / Collaboration', 'Message', 'Écrivez votre message ici', 'ENVOYER'],
    },
    recruit: {
      eyebrow: 'CARRIÈRES',
      title: 'Carrières',
      messageLabel: 'MESSAGE',
      positionsLabel: 'POSTES OUVERTS',
      heading: 'Rendre les tables du quotidien plus belles avec nous.',
      text: 'HANA recherche des personnes qui respectent les ingrédients, valorisent le travail soigné et aiment servir les clients locaux avec chaleur. L’expérience est bienvenue, mais la curiosité et la constance comptent avant tout.',
      contactCta: 'CONTACTEZ-NOUS',
      jobs: [
        ['Temps plein', 'Boulanger / Boulangère', 'Production du pain, façonnage des pâtes, travail au four et mise en place quotidienne.', 'POSTULER ›'],
        ['Temps plein', 'Pâtissier / Pâtissière', 'Tartes aux pommes, viennoiseries de saison, crème pâtissière, finitions et contrôle qualité.', 'POSTULER ›'],
        ['Temps partiel', 'Personnel Café', 'Service client, café, emballage et communication chaleureuse avec les clients.', 'POSTULER ›'],
      ],
    },
  },
};

function getPageName() {
  const file = window.location.pathname.split('/').pop();
  return file || 'index.html';
}

function setHTML(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.innerHTML = value;
}

function setText(selector, value, root = document) {
  const element = root.querySelector(selector);
  if (element && value !== undefined) element.textContent = value;
}

function updateGlobal(lang) {
  const dict = i18n[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll('.logo small').forEach((element) => {
    element.textContent = dict.tagline;
  });

  document.querySelectorAll('.desktop-nav a, .mobile-nav a, .footer-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && dict.nav[href]) link.textContent = dict.nav[href];
  });

  document.querySelectorAll('.header-actions a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && dict.nav[href]) link.textContent = dict.nav[href];
  });

  document.querySelectorAll('.lang-switch button').forEach((button) => {
    const buttonLang = button.textContent.trim().toLowerCase();
    button.classList.toggle('active', buttonLang === lang);
  });

  setHTML('.footer-copy', dict.footerTagline);

  const footerHeadings = document.querySelectorAll('.footer-heading');
  if (footerHeadings[0]) footerHeadings[0].textContent = dict.navigation;
  if (footerHeadings[1]) footerHeadings[1].textContent = dict.shopInfo;

  const shopInfoItems = document.querySelectorAll('.shop-info li');
  if (shopInfoItems[0]) shopInfoItems[0].innerHTML = dict.shopAddress;
  if (shopInfoItems[1]) shopInfoItems[1].innerHTML = dict.shopHours;
  if (shopInfoItems[2]) shopInfoItems[2].innerHTML = dict.shopTel;
}

function updateHome(lang) {
  const d = i18n[lang].home;
  setText('.hero-content .eyebrow', d.est);
  setHTML('.hero-content h1', d.heroTitle);
  setText('.hero-content .subcopy', d.heroSub);
  const buttons = document.querySelectorAll('.hero-content .buttons .btn');
  if (buttons[0]) buttons[0].textContent = d.menuCta;
  if (buttons[1]) buttons[1].textContent = d.aboutCta;

  const labels = document.querySelectorAll('.section-label .label');
  if (labels[0]) labels[0].textContent = d.topicsLabel;
  if (labels[1]) labels[1].textContent = d.aboutLabel;
  if (labels[2]) labels[2].textContent = d.featuresLabel;
  if (labels[3]) labels[3].textContent = d.shopLabel;

  document.querySelectorAll('.topics article').forEach((article, index) => {
    const item = d.topics[index];
    if (!item) return;
    const meta = article.querySelectorAll('.meta span');
    if (meta[0]) meta[0].textContent = item[0];
    if (meta[1]) meta[1].textContent = item[1];
    setText('p', item[2], article);
  });

  setText('.right .link', d.allNews);
  setHTML('.section.alt h2', d.aboutTitle);
  setText('.section.alt .text-block', d.aboutText);
  setText('.section.alt .link', d.readMore);

  document.querySelectorAll('.feature').forEach((feature, index) => {
    const item = d.features[index];
    if (!item) return;
    setText('.small', item[0], feature);
    setText('h3', item[1], feature);
    const paragraphs = feature.querySelectorAll('p');
    if (paragraphs[1]) paragraphs[1].textContent = item[2];
  });

  setText('.shop-dark h2', d.shopName);
  setText('.shop-dark .eyebrow', d.shopTag);
  setText('.shop-dark .light-link', d.viewShops);
}

function updateAbout(lang) {
  const d = i18n[lang].about;
  setText('.page-title .eyebrow', d.eyebrow);
  setText('.page-title h1', d.title);

  document.querySelectorAll('.section-label .label').forEach((label, index) => {
    if (d.labels[index]) label.textContent = d.labels[index];
  });

  setHTML('.section h2', d.philTitle);
  document.querySelectorAll('.text-block p').forEach((paragraph, index) => {
    if (d.philBody[index]) paragraph.textContent = d.philBody[index];
  });

  document.querySelectorAll('.value-card').forEach((card, index) => {
    const item = d.values[index];
    if (!item) return;
    setText('h3', item[0], card);
    const paragraphs = card.querySelectorAll('p');
    if (paragraphs[1]) paragraphs[1].textContent = item[1];
  });

  document.querySelectorAll('.team-card').forEach((card, index) => {
    const item = d.team[index];
    if (!item) return;
    setText('h3', item[0], card);
    setText('.eyebrow', item[1], card);
    const paragraphs = card.querySelectorAll('p');
    if (paragraphs[1]) paragraphs[1].textContent = item[2];
  });
}

function updateMenu(lang) {
  const d = i18n[lang].menu;
  setText('.page-title .eyebrow', d.eyebrow);
  setText('.page-title h1', d.title);

  document.querySelectorAll('[data-menu-tab]').forEach((button, index) => {
    if (d.tabs[index]) button.textContent = d.tabs[index];
  });

  document.querySelectorAll('.menu-category').forEach((category, categoryIndex) => {
    const categoryData = d.categories[categoryIndex];
    if (!categoryData) return;
    setText('h2', categoryData[0], category);

    category.querySelectorAll('.menu-card').forEach((card, itemIndex) => {
      const item = categoryData[1][itemIndex];
      if (!item) return;
      setText('h3', item[0], card);
      setText('.price', item[1], card);
      setText('p', item[2], card);
    });
  });

  setHTML('.note', d.note);
}

function updateShop(lang) {
  const d = i18n[lang].shop;
  setText('.page-title .eyebrow', d.eyebrow);
  setText('.page-title h1', d.title);
  setText('.section-label .label', d.label);

  document.querySelectorAll('.shop-row').forEach((row, index) => {
    const item = d.shops[index];
    if (!item) return;
    setText('.badge', item[0], row);
    setText('h2', item[1], row);
    const description = row.querySelector('.shop-description');
    if (description) description.textContent = item[2];
    const listItems = row.querySelectorAll('.shop-list li');
    if (listItems[0]) listItems[0].innerHTML = item[3];
    if (listItems[1]) listItems[1].innerHTML = item[4];
    if (listItems[2]) listItems[2].innerHTML = item[5];
  });
}

function updateNews(lang) {
  const d = i18n[lang].news;
  setText('.page-title .eyebrow', d.eyebrow);
  setText('.page-title h1', d.title);

  document.querySelectorAll('[data-news-filter]').forEach((button, index) => {
    if (d.filters[index]) button.textContent = d.filters[index];
  });

  document.querySelectorAll('[data-news-category]').forEach((item, index) => {
    const news = d.items[index];
    if (!news) return;
    const meta = item.querySelectorAll('.meta span');
    if (meta[0]) meta[0].textContent = news[0];
    if (meta[1]) meta[1].textContent = news[1];
    setText('p', news[2], item);
  });
}

function updateContact(lang) {
  const d = i18n[lang].contact;
  setText('.page-title .eyebrow', d.eyebrow);
  setText('.page-title h1', d.title);
  setText('.section-label .label', d.label);
  setText('.section h2', d.heading);
  setText('.text-block', d.text);

  const contactItems = document.querySelectorAll('.contact-list li');
  const labels = [d.tel, d.email, d.hours];
  contactItems.forEach((item, index) => {
    const strong = item.querySelector('strong');
    if (strong && labels[index]) strong.textContent = labels[index];
  });
  const hours = contactItems[2]?.querySelector('span');
  if (hours) hours.textContent = d.hoursValue;

  const formLabels = document.querySelectorAll('.form-card label');
  formLabels.forEach((label, index) => {
    const input = label.querySelector('input, textarea');
    const labelText = d.form[index * 2];
    const placeholderText = d.form[index * 2 + 1];
    if (labelText && input) {
      label.childNodes[0].textContent = labelText + ' ';
      input.setAttribute('placeholder', placeholderText);
    }
  });
  setText('.form-card .btn', d.form[8]);
}

function updateRecruit(lang) {
  const d = i18n[lang].recruit;
  setText('.page-title .eyebrow', d.eyebrow);
  setText('.page-title h1', d.title);

  const labels = document.querySelectorAll('.section-label .label');
  if (labels[0]) labels[0].textContent = d.messageLabel;
  if (labels[1]) labels[1].textContent = d.positionsLabel;

  setText('.section h2', d.heading);
  setText('.text-block', d.text);
  setText('.section .btn', d.contactCta);

  document.querySelectorAll('.job-card').forEach((card, index) => {
    const job = d.jobs[index];
    if (!job) return;
    setText('.badge', job[0], card);
    setText('h3', job[1], card);
    setText('p:not(.badge)', job[2], card);
    setText('.link', job[3], card);
  });
}

function applyLanguage(lang) {
  const currentLang = i18n[lang] ? lang : 'en';
  const page = getPageName();

  localStorage.setItem('hanaLang', currentLang);
  updateGlobal(currentLang);

  if (page === 'index.html') updateHome(currentLang);
  if (page === 'about.html') updateAbout(currentLang);
  if (page === 'menu.html') updateMenu(currentLang);
  if (page === 'shop.html') updateShop(currentLang);
  if (page === 'news.html') updateNews(currentLang);
  if (page === 'contact.html') updateContact(currentLang);
  if (page === 'recruit.html') updateRecruit(currentLang);
}

const tabButtons = document.querySelectorAll('[data-menu-tab]');
const menuCategories = document.querySelectorAll('.menu-category[data-category]');

function setActiveMenu(target) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.menuTab === target);
  });

  menuCategories.forEach((category) => {
    category.classList.toggle('active', category.dataset.category === target);
  });
}

if (tabButtons.length > 0 && menuCategories.length > 0) {
  const initialTarget = document.querySelector('[data-menu-tab].active')?.dataset.menuTab || '0';
  setActiveMenu(initialTarget);

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setActiveMenu(button.dataset.menuTab);
    });
  });
}

const filterButtons = document.querySelectorAll('[data-news-filter]');
const newsItems = document.querySelectorAll('[data-news-category]');

if (filterButtons.length > 0 && newsItems.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.newsFilter;

      filterButtons.forEach((filterButton) => {
        filterButton.classList.toggle('active', filterButton === button);
      });

      newsItems.forEach((item) => {
        const shouldShow = filter === 'All' || item.dataset.newsCategory === filter;
        item.style.display = shouldShow ? '' : 'none';
      });
    });
  });
}

document.querySelectorAll('.lang-switch button').forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLang = button.textContent.trim().toLowerCase();
    applyLanguage(selectedLang);
  });
});

applyLanguage(localStorage.getItem('hanaLang') || 'en');
