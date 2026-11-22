/* 蓝色记账官网 · 三语切换（简中 / 繁中 / English）与轻量交互（无第三方依赖） */

(function () {
  'use strict';

  var I18N = {
    zh: {
      skip: '跳到主要内容',
      brand: '蓝色记账',
      brandSub: 'BLUE LEDGER',
      navFeatures: '功能',
      navPro: 'Pro',
      navDownload: '获取应用',
      getApp: '获取应用',

      heroEyebrow: '本地记账 · 数据由你掌控',
      heroTitle: '蓝色记账',
      heroTitleSub: 'BLUE LEDGER',
      heroLead: '简洁好用的个人记账应用：记一笔、分类管理、月度统计、账单搜索。数据只存在本机，打开就记。',
      tagLocal: '本地存储',
      tagLangs: '三语界面',
      tagPro: 'Pro 一次买断',
      tagFree: '免费下载',
      appStoreCta: '在 App Store 获取',
      playCta: '在 Google Play 获取',
      heroMeta: 'iOS 13+ · Android 5.0+ · 简体 / English / 日本語',
      heroCardA: '蓝色记账',
      heroCardASub: '本机账本',
      statSteps: '步记完一笔',
      statPro: '项 Pro 权益',
      statLangs: '种界面语言',
      statCloud: '云端账号',

      featuresKicker: '核心功能',
      featuresTitle: '记账这件事，越简单越好',
      featuresLead: '日常记账免费够用；想管理得更好，Pro 一次买断全部解锁。',
      f1Title: '快速记一笔',
      f1Desc: '金额、分类、备注，几步完成；支持收入与支出。',
      f2Title: '分类管理',
      f2Desc: '常用分类自由增删，账目一目了然。',
      f3Title: '月度统计',
      f3Desc: '本月收支概览与月度统计，钱花在哪一清二楚。',
      f4Title: '账单搜索',
      f4Desc: '按关键词与筛选条件查找历史账单，随时核对。',
      f5Title: '预算与储蓄目标',
      f5Desc: '设定月度预算和储蓄目标，进度实时提醒（Pro）。',
      f6Title: '备份与导出',
      f6Desc: '数据备份与导出（Pro），换机不丢账。',

      proKicker: 'Pro 高级版',
      proTitle: '一次买断，全部解锁',
      proLead: '无需订阅：一次购买，永久使用，并在所有支持设备上共享。',
      noSub: '无订阅 · 永久使用',
      proPerks: '项权益',
      adCount: '广告',
      proTier1: '完整功能',
      proTier1Sub: '预算、储蓄目标、记账日历、资产负债、多账本',
      proTier2: '无广告干扰',
      proTier2Sub: '购买后不再展示任何广告',
      proNote: '免费版包含 AdMob 插屏与激励广告（插屏仅低概率出现），看激励广告可获权益；Pro 买断后全部去除。',

      dlKicker: '免费下载',
      dlTitle: '今天开始，记下第一笔。',
      dlLead: '在 App Store 与 Google Play 免费获取《蓝色记账》。数据只存在本机，无需注册。',
      privacyLink: '隐私政策',
      dlMeta: '包名 com.luohuidan.jizhang · 联系',
      footerTagline: '简洁好用，数据由你掌控。',
      contact: '联系我们',
      madeBy: '由 oneusop 出品',
      footerNote: '个人记账应用 · 数据仅保存在本机',

      privacyTitle: '隐私政策',
      privacyMeta: '生效日期：2026 年 11 月 22 日｜适用应用：蓝色记账（iOS / Android，包名 com.luohuidan.jizhang）',
      backHome: '返回官网'
    },
    'zh-Hant': {
      skip: '跳到主要內容',
      brand: '藍色記賬',
      brandSub: 'BLUE LEDGER',
      navFeatures: '功能',
      navPro: 'Pro',
      navDownload: '獲取應用',
      getApp: '獲取應用',
      heroEyebrow: '本地記賬 · 資料由你掌控',
      heroTitle: '藍色記賬',
      heroTitleSub: 'BLUE LEDGER',
      heroLead: '簡潔好用的個人記賬應用：記一筆、分類管理、月度統計、帳單搜尋。資料只存在本機，打開就記。',
      tagLocal: '本地儲存',
      tagLangs: '三語介面',
      tagPro: 'Pro 一次買斷',
      tagFree: '免費下載',
      appStoreCta: '在 App Store 獲取',
      playCta: '在 Google Play 獲取',
      heroMeta: 'iOS 13+ · Android 5.0+ · 簡體 / English / 日本語',
      heroCardA: '藍色記賬',
      heroCardASub: '本機帳本',
      statSteps: '步記完一筆',
      statPro: '項 Pro 權益',
      statLangs: '種介面語言',
      statCloud: '雲端帳號',
      featuresKicker: '核心功能',
      featuresTitle: '記賬這件事，越簡單越好',
      featuresLead: '日常記賬免費夠用；想管理得更好，Pro 一次買斷全部解鎖。',
      f1Title: '快速記一筆',
      f1Desc: '金額、分類、備註，幾步完成；支援收入與支出。',
      f2Title: '分類管理',
      f2Desc: '常用分類自由增刪，帳目一目瞭然。',
      f3Title: '月度統計',
      f3Desc: '本月收支概覽與月度統計，錢花在哪一清二楚。',
      f4Title: '帳單搜尋',
      f4Desc: '按關鍵詞與篩選條件查找歷史帳單，隨時核對。',
      f5Title: '預算與儲蓄目標',
      f5Desc: '設定月度預算和儲蓄目標，進度即時提醒（Pro）。',
      f6Title: '備份與匯出',
      f6Desc: '資料備份與匯出（Pro），換機不丟帳。',
      proKicker: 'Pro 進階版',
      proTitle: '一次買斷，全部解鎖',
      proLead: '無需訂閱：一次購買，永久使用，並在所有支援裝置上共享。',
      noSub: '無訂閱 · 永久使用',
      proPerks: '項權益',
      adCount: '廣告',
      proTier1: '完整功能',
      proTier1Sub: '預算、儲蓄目標、記賬日曆、資產負債、多帳本',
      proTier2: '無廣告干擾',
      proTier2Sub: '購買後不再展示任何廣告',
      proNote: '免費版包含 AdMob 插屏與激勵廣告（插屏僅低機率出現），看激勵廣告可獲權益；Pro 買斷後全部去除。',
      dlKicker: '免費下載',
      dlTitle: '今天開始，記下第一筆。',
      dlLead: '在 App Store 與 Google Play 免費獲取《藍色記賬》。資料只存在本機，無需註冊。',
      privacyLink: '隱私政策',
      dlMeta: '包名 com.luohuidan.jizhang · 聯絡',
      footerTagline: '簡潔好用，資料由你掌控。',
      contact: '聯絡我們',
      madeBy: '由 oneusop 出品',
      footerNote: '個人記賬應用 · 資料僅儲存在本機',
      privacyTitle: '隱私政策',
      privacyMeta: '生效日期：2026 年 11 月 22 日｜適用應用：藍色記賬（iOS / Android，包名 com.luohuidan.jizhang）',
      backHome: '返回官網'
    },
    en: {
      skip: 'Skip to content',
      brand: 'Blue Ledger',
      brandSub: 'BLUE LEDGER',
      navFeatures: 'Features',
      navPro: 'Pro',
      navDownload: 'Get the app',
      getApp: 'Get the app',

      heroEyebrow: 'Local-first bookkeeping · your data stays yours',
      heroTitle: 'Blue Ledger',
      heroTitleSub: 'BLUE LEDGER',
      heroLead: 'A simple, friendly bookkeeping app: log a transaction, manage categories, see monthly stats, search bills. Data stays on your phone.',
      tagLocal: 'Local storage',
      tagLangs: 'Three languages',
      tagPro: 'One-time Pro',
      tagFree: 'Free download',
      appStoreCta: 'Download on the App Store',
      playCta: 'Get it on Google Play',
      heroMeta: 'iOS 13+ · Android 5.0+ · 简体 / English / 日本語',
      heroCardA: 'Blue Ledger',
      heroCardASub: 'your local ledger',
      statSteps: 'steps per entry',
      statPro: 'Pro perks',
      statLangs: 'languages',
      statCloud: 'cloud accounts',

      featuresKicker: 'Features',
      featuresTitle: 'Bookkeeping, kept simple',
      featuresLead: 'Everything you need for daily tracking is free; Pro unlocks the full toolkit with a one-time purchase.',
      f1Title: 'Log in seconds',
      f1Desc: 'Amount, category, note — a few taps for income or expense.',
      f2Title: 'Category management',
      f2Desc: 'Add or remove the categories you actually use.',
      f3Title: 'Monthly statistics',
      f3Desc: 'This month in one glance — see exactly where the money goes.',
      f4Title: 'Bill search',
      f4Desc: 'Find past transactions by keyword and filters anytime.',
      f5Title: 'Budgets & savings goals',
      f5Desc: 'Set a monthly budget and savings goals with live progress (Pro).',
      f6Title: 'Backup & export',
      f6Desc: 'Back up and export your data (Pro) — nothing lost when you switch phones.',

      proKicker: 'Pro upgrade',
      proTitle: 'One purchase, everything unlocked',
      proLead: 'No subscription: buy once, use forever, across all your supported devices.',
      noSub: 'No subscription · Yours forever',
      proPerks: 'perks',
      adCount: 'ads',
      proTier1: 'Every feature',
      proTier1Sub: 'Budgets, savings goals, calendar, net worth, multiple ledgers',
      proTier2: 'Zero ads',
      proTier2Sub: 'No ads of any kind after purchase',
      proNote: 'The free version shows AdMob interstitial and rewarded ads (interstitials are rare); rewarded videos can grant perks. Buying Pro removes everything.',

      dlKicker: 'Free download',
      dlTitle: 'Start your first entry today.',
      dlLead: 'Get Blue Ledger free on the App Store and Google Play. Data stays on the phone — no sign-up.',
      privacyLink: 'Privacy Policy',
      dlMeta: 'Package com.luohuidan.jizhang · Contact',
      footerTagline: 'Simple, useful, yours.',
      contact: 'Contact',
      madeBy: 'made by oneusop',
      footerNote: 'Bookkeeping app · data stays on the device',

      privacyTitle: 'Privacy Policy',
      privacyMeta: 'Effective November 22, 2026 · Applies to Blue Ledger (iOS / Android, package com.luohuidan.jizhang)',
      backHome: 'Back to site'
    }
  };

  var TITLES = {
    home: {
      zh: '蓝色记账 · Blue Ledger — 简洁好用的个人记账应用',
      'zh-Hant': '藍色記賬 · Blue Ledger — 簡潔好用的個人記賬應用',
      en: 'Blue Ledger — simple local-first bookkeeping'
    },
    privacy: {
      zh: '隐私政策 · 蓝色记账',
      'zh-Hant': '隱私政策 · 藍色記賬',
      en: 'Privacy Policy · Blue Ledger'
    }
  };

  var DESCS = {
    home: {
      zh: '蓝色记账：本地存储的个人记账应用。记一笔、分类管理、月度统计、账单搜索；Pro 一次买断解锁 32+ 权益。',
      'zh-Hant': '藍色記賬：本地儲存的個人記賬應用。記一筆、分類管理、月度統計、帳單搜尋；Pro 一次買斷解鎖 32+ 權益。',
      en: 'Blue Ledger: local-first bookkeeping. Log entries, manage categories, monthly stats, bill search; Pro unlocks 32+ perks with a one-time purchase.'
    },
    privacy: {
      zh: '蓝色记账隐私政策：无需注册，账目数据仅保存在本机；广告由 Google AdMob 提供，Pro 为一次性买断。',
      'zh-Hant': '藍色記賬隱私政策：無需註冊，帳目資料僅儲存在本機；廣告由 Google AdMob 提供，Pro 為一次性買斷。',
      en: 'Blue Ledger privacy policy: no sign-up, ledger data stays on your device. Ads served by Google AdMob; Pro is a one-time purchase.'
    }
  };

  var root = document.documentElement;
  var page = /privacy\.html$/.test(location.pathname) ? 'privacy' : 'home';

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

  function detectLang() {
    var qs = null;
    try { qs = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    var n = normalizeLang(qs);
    if (n) return n;
    var saved = null;
    try { saved = localStorage.getItem('bluejizhang_lang'); } catch (e) {}
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

    var dict = I18N[current];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var on = btn.getAttribute('data-set-lang') === current;
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    if (TITLES[page]) document.title = TITLES[page][current] || TITLES[page].zh;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && DESCS[page]) metaDesc.setAttribute('content', DESCS[page][current] || DESCS[page].zh);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && TITLES[page]) ogTitle.setAttribute('content', TITLES[page][current] || TITLES[page].zh);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && DESCS[page]) ogDesc.setAttribute('content', DESCS[page][current] || DESCS[page].zh);

    try {
      localStorage.setItem('bluejizhang_lang', current);
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

  // 滚动浮现
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    items.forEach(function (el) {
      io.observe(el);
    });
  } else {
    items.forEach(function (el) {
      el.classList.add('is-in');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
