// ============================================================================
// <site-nav> — shared site navigation (single source of truth for the menu).
//
// Renders the Vestaform header into LIGHT DOM (not shadow DOM) so it is reached
// by the page's existing i18n loop (document.querySelectorAll('[data-i18n]')),
// the global CSS in vestaform.css, and the global setLang()/toggleNav() handlers.
//
// Usage:
//   <link rel="stylesheet" href="vestaform.css">
//   <script src="project/nav.js"></script>
//   <site-nav data-active="design" data-home="../index.html"
//             data-design-href="design.html"></site-nav>
//
// Attributes (all optional):
//   data-active       key of the current nav item: approach|os|industries|
//                     design|work|about. Adds .is-active + aria-current="page".
//   data-home         path prefix to the home page. "" (default) => same-page
//                     anchors (#model) and logo -> #top. "../index.html" =>
//                     cross-page links (../index.html#model) and logo there.
//   data-design-href  href for the "Vestaform Design" link (the real page).
//                     Default "project/design.html" (correct from the root).
//
// The logo sits in .nav-inner but OUTSIDE #nav-links, so the 880px mobile
// collapse (which only hides .nav-links) keeps the logo visible at every width.
// ============================================================================
(() => {
  // anchor: in-page section id. page: this link points at the real design page.
  const LINKS = [
    { key: 'approach',   anchor: '#model',      i18n: 'nav.approach' },
    { key: 'os',         anchor: '#os',         i18n: 'nav.os' },
    { key: 'industries', anchor: '#industries', i18n: 'nav.industries' },
    { key: 'design',     page: true,            i18n: 'nav.design' },
    { key: 'work',       anchor: '#work',       i18n: 'nav.work' },
    { key: 'about',      anchor: '#about',      i18n: 'nav.about' },
  ];

  function buildHTML(home, designHref) {
    const links = LINKS.map(l => {
      const href = l.page ? designHref : home + l.anchor;
      return `<a href="${href}" data-key="${l.key}" data-i18n="${l.i18n}"></a>`;
    }).join('\n        ');

    return `
  <nav class="nav-inner">
    <a href="${home}#top" class="nav-logo">
      <span class="nav-logo-name">vestaform</span>
    </a>
    <div class="nav-links" id="nav-links">
        ${links}
    </div>
    <div class="nav-right">
      <div class="lang-toggle" role="group" aria-label="Language">
        <button id="btn-en" onclick="setLang('en')" aria-pressed="true" aria-label="English">EN</button>
        <span class="sep">/</span>
        <button id="btn-es" onclick="setLang('es')" aria-pressed="false" aria-label="Español">ES</button>
      </div>
      <a href="${home}#contact" class="btn-cta btn-glass" data-i18n="nav.cta"></a>
      <button class="nav-toggle" id="nav-toggle" onclick="toggleNav()" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">
        <span class="nav-toggle-bars"></span>
      </button>
    </div>
  </nav>`;
  }

  class SiteNav extends HTMLElement {
    connectedCallback() {
      if (this._mounted) return;          // render once → no duplicate ids
      this._mounted = true;

      this.classList.add('nav');
      if (!this.id) this.id = 'top';      // so toggleNav() (getElementById('top')) finds it

      const home = this.dataset.home || '';
      const designHref = this.dataset.designHref || 'project/design.html';
      this.innerHTML = buildHTML(home, designHref);

      const active = this.dataset.active;
      if (active) {
        const el = this.querySelector(`[data-key="${active}"]`);
        if (el) { el.classList.add('is-active'); el.setAttribute('aria-current', 'page'); }
      }
    }
  }

  if (!customElements.get('site-nav')) customElements.define('site-nav', SiteNav);
})();
