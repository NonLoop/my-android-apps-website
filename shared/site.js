/* ==========================================================================
   App landing sites — shared engine (i18n + light interactions)
   Each site keeps a small app.js with its copy (I18N/TITLES/DESCS) and calls:
     SiteApp.init({ storageKey, i18n, titles, descs, hanMap?, shotBase?, shotStyle? })
   No third-party dependencies.
   ========================================================================== */

window.SiteApp = (function () {
  'use strict';

  var SUPPORTED = ['zh', 'zh-Hant', 'en'];
  var LANG_ATTR = { zh: 'zh-Hans', 'zh-Hant': 'zh-Hant', en: 'en' };

  function normalizeLang(code) {
    if (!code) return null;
    code = String(code).toLowerCase();
    if (code === 'en') return 'en';
    if (code === 'zh' || code === 'zh-hans' || code === 'zh-cn' || code === 'cn') return 'zh';
    if (code === 'zh-hant' || code === 'zh-tw' || code === 'zh-hk' || code === 'zh-mo' || code === 'hant' || code === 'tw') return 'zh-Hant';
    return null;
  }

  function init(opts) {
    opts = opts || {};
    var storageKey = opts.storageKey || 'site_lang';
    var I18N = opts.i18n || {};
    var TITLES = opts.titles || {};
    var DESCS = opts.descs || {};
    var page = opts.page || (/privacy\.html$/.test(location.pathname) ? 'privacy' : 'home');
    var shotBase = opts.shotBase || null;
    var shotStyle = opts.shotStyle || 'enOnly'; // 'enOnly': shots/<n>.png + shots/en/<n>.png; 'zhEn': shots/zh|en/<n>.png
    var hanMap = opts.hanMap || null;
    var root = document.documentElement;

    function detectLang() {
      var qs = null;
      try { qs = new URLSearchParams(location.search).get('lang'); } catch (e) {}
      var n = normalizeLang(qs);
      if (n) return n;

      var saved = null;
      try { saved = localStorage.getItem(storageKey); } catch (e) {}
      n = normalizeLang(saved);
      if (n) return n;

      var nav = (navigator.language || navigator.browserLanguage || 'zh').toLowerCase();
      if (nav.indexOf('en') === 0) return 'en';
      if (/zh-(hant|tw|hk|mo)/.test(nav)) return 'zh-Hant';
      if (nav.indexOf('zh') === 0) return 'zh';
      return 'zh';
    }

    var current = detectLang();

    function applyLang(lang) {
      current = SUPPORTED.indexOf(lang) >= 0 ? lang : 'zh';
      root.setAttribute('lang', LANG_ATTR[current]);

      var dict = I18N[current] || I18N.zh || {};
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict[key] != null) el.textContent = dict[key];
      });

      document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
        var on = btn.getAttribute('data-set-lang') === current;
        btn.classList.toggle('is-on', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });

      // 站点专属：部分名词的繁体写法（保留 <small> 等子元素）
      if (hanMap) {
        function applyHan(el) {
          if (el.dataset.orig == null) {
            el.dataset.orig = el.firstChild ? el.firstChild.textContent : el.textContent;
          }
          var orig = el.dataset.orig;
          var val = current === 'zh-Hant' ? (hanMap[orig] || orig) : orig;
          if (el.firstChild) el.firstChild.textContent = val;
          else el.textContent = val;
        }
        document.querySelectorAll('.hc-name > span:first-child, .hero-card figcaption, .f-seal').forEach(applyHan);
      }

      // 站点专属：截图在中英文之间切换
      if (shotBase) {
        var dir = current === 'en'
          ? (shotStyle === 'zhEn' ? 'en/' : 'en/')
          : (shotStyle === 'zhEn' ? 'zh/' : '');
        document.querySelectorAll('img[data-shot]').forEach(function (img) {
          img.src = shotBase + dir + img.getAttribute('data-shot') + '.png';
        });
      }

      if (TITLES[page]) document.title = TITLES[page][current] || TITLES[page].zh;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && DESCS[page]) metaDesc.setAttribute('content', DESCS[page][current] || DESCS[page].zh);
      var ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle && TITLES[page]) ogTitle.setAttribute('content', TITLES[page][current] || TITLES[page].zh);
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc && DESCS[page]) ogDesc.setAttribute('content', DESCS[page][current] || DESCS[page].zh);

      try {
        localStorage.setItem(storageKey, current);
      } catch (e) {}
    }

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-set-lang'));
      });
    });

    applyLang(current);

    // 顶栏滚动态
    var header = document.querySelector('.site-header');
    function onScroll() {
      if (!header) return;
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // 移动端菜单
    var menuBtn = document.getElementById('menuBtn');
    var nav = document.getElementById('nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', function () {
        var open = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
        menuBtn.setAttribute('aria-label', open ? '打开菜单' : '关闭菜单');
        nav.classList.toggle('is-open', !open);
      });

      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          menuBtn.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        });
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('is-open')) {
          menuBtn.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        }
      });
    }

    // 页面已关闭全部动画，不再需要滚动浮现逻辑

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
  }

  return { init: init, normalizeLang: normalizeLang };
})();
