/* 卡通绘画官网 · 三语切换（简中 / 繁中 / English）与轻量交互（无第三方依赖） */

(function () {
  'use strict';

  var I18N = {
    zh: {
      skip: '跳到主要内容',
      brand: '卡通绘画',
      brandSub: 'CARTOON DRAWING',
      navFeatures: '玩法特性',
      navTemplates: '线稿图鉴',
      navShots: '界面',
      navDownload: '获取应用',
      getApp: '获取应用',

      heroEyebrow: '描摹与涂鸦 · 释放你的创造力',
      heroTitle: '卡通绘画',
      heroTitleSub: 'CARTOON DRAWING',
      heroLead:
        '画板上会淡淡印着一只卡通动物：照着描，或者把线稿藏起来自己画。画完存进「我的作品」，用系统分享发出去。',
      tagTrace: '29 张线稿',
      tagStickers: '贴纸装饰',
      tagLangs: '三语界面',
      tagNoIap: '无内购',
      playCta: '在 Google Play 获取',
      appStoreCta: '在 App Store 获取',
      learnMore: '先看看怎么玩',
      heroMeta: 'iOS 13+ · Android 5.0+ · 免费 · 简体 / English / 日本語',
      heroCardA: '卡通动物',
      heroCardASub: '淡淡的线稿',
      heroCardB: '自由涂鸦',
      heroCardBSub: '配色与贴纸',
      chipTitle: '29 张线稿',
      chipSub: '陆地 / 海洋，可收藏',
      statOutlines: '张线稿',
      statColors: '种画布底色',
      statLangs: '种界面语言',
      statIap: '个付费内购',

      featuresKicker: '玩法与特性',
      featuresTitle: '小小画板，大大的创造力',
      featuresLead:
        '选一只喜欢的动物，照着淡淡的线稿描；描熟了就调淡，或者干脆藏起来，画出自己的版本。',
      fTraceTitle: '29 张卡通线稿',
      fTraceDesc:
        '长颈鹿、小熊、小猫、小马、小鱼……分成陆地与海洋两类，喜欢的可以收藏，随时回来再画。',
      fDoodleTitle: '描摹或自由画',
      fDoodleDesc:
        '线稿浓淡可调：照着描、调淡一点，或者完全隐藏，同一只动物能画出无数个版本。',
      fToolsTitle: '顺手的画笔工具',
      fToolsDesc: '画笔粗细与透明度可调，配橡皮与撤销，画错一步也不怕，随时重来。',
      fStickerTitle: '贴纸装饰',
      fStickerDesc: '把可爱的贴纸贴到画上，一幅安静的涂鸦立刻热闹起来。',
      fCanvasTitle: '九种画布底色',
      fCanvasDesc: '柔和的画布配色，换一种底色，就有一种新的心情。',
      fSaveTitle: '作品保存在本机',
      fSaveDesc:
        '画完存进「我的作品」，也能用系统分享发出去；不读取相册、不上传服务器，卸载应用即一并删除。',
      fLangTitle: '三语界面',
      fLangDesc: '简体中文、English、日本語，跟随系统语言，也可在设置里手动切换。',
      fFreeTitle: '无账号无内购',
      fFreeDesc: '不用注册，没有付费内购；免费下载，打开就画。',

      tplKicker: '线稿图鉴',
      tplTitle: '29 只卡通动物，等你来画',
      tplLead: '线稿分成陆地与海洋两类，浓淡可调，还能收藏。下面是图鉴中的几位。',
      tplCardName: '卡通动物',
      tplCardRole: '线稿',
      tplNote: '图鉴共 29 张 · 应用内可收藏喜欢的线稿',

      shotsKicker: '界面一览',
      shotsTitle: '大色块、圆按钮，孩子也能上手',
      shotsLead: '画笔、调色、贴纸与设置，都在一屏之内，动动手指就能开始。',
      shotCanvas: '起笔画板',
      shotCanvasSub: '描摹线稿或自由涂鸦',
      shotColors: '调色盘',
      shotColorsSub: '颜色、粗细与透明度',
      shotTools: '工具栏',
      shotToolsSub: '橡皮、撤销、贴纸与清空',
      shotAnimals: '挑一只动物',
      shotAnimalsSub: '陆地与海洋，浓淡可调',
      shotTheme: '画布配色',
      shotThemeSub: '九种柔和底色',
      shotSettings: '偏好设置',
      shotSettingsSub: '语言、主题与更多',
      featureCaption: '描摹或自由涂鸦，作品只留在手机里。',

      adsKicker: '广告与免广告',
      adsTitle: '免费画画，也能安静地画',
      adsLead:
        '免费版包含 Google AdMob 的插屏、激励视频与激励插屏，没有付费内购。自愿看完激励视频，就能暂时去掉广告。',
      noIap: '无内购 · 无账号',
      tierViews: '次观看',
      tier1: '免广告 1 天',
      tier1Sub: '累计观看 3 次激励视频',
      tier2: '免广告 1 周',
      tier2Sub: '累计观看 7 次激励视频',
      adsNote:
        '免广告期间不再展示插屏；观看记录只保存在本机，卸载即清除。绘画本身完全离线，不消耗流量。',

      dlKicker: '免费下载',
      dlTitle: '拿起画笔，画一只。',
      dlLead:
        '在 Google Play 与 App Store 免费获取《卡通绘画》。iOS 13+ / Android 5.0+，打开就画，作品只存在本机。',
      privacyLink: '隐私政策',
      dlMeta: '包名 com.oneusop.painting1 · 联系',
      footerTagline: '释放你的创造力。',
      contact: '联系我们',
      madeBy: '由 oneusop 出品',
      footerNote: '描摹与涂鸦应用 · 作品仅保存在本机',

      privacyTitle: '隐私政策',
      privacyMeta: '生效日期：2026 年 11 月 22 日｜适用应用：卡通绘画（iOS / Android，包名 com.oneusop.painting1）',
      backHome: '返回官网'
    },
    zhHant: {
      skip: '跳到主要內容',
      brand: '卡通繪畫',
      brandSub: 'CARTOON DRAWING',
      navFeatures: '玩法特性',
      navTemplates: '線稿圖鑑',
      navShots: '介面',
      navDownload: '獲取應用',
      getApp: '獲取應用',
      heroEyebrow: '描摹與塗鴉 · 釋放你的創造力',
      heroTitle: '卡通繪畫',
      heroTitleSub: 'CARTOON DRAWING',
      heroLead: '畫板上會淡淡印著一隻卡通動物：照著描，或者把線稿藏起來自己畫。畫完存進「我的作品」，用系統分享發出去。',
      tagTrace: '29 張線稿',
      tagStickers: '貼紙裝飾',
      tagLangs: '三語介面',
      tagNoIap: '無內購',
      playCta: '在 Google Play 獲取',
      appStoreCta: '在 App Store 獲取',
      learnMore: '先看看怎麼玩',
      heroMeta: 'iOS 13+ · Android 5.0+ · 免費 · 簡體 / English / 日本語',
      heroCardA: '卡通動物',
      heroCardASub: '淡淡的線稿',
      heroCardB: '自由塗鴉',
      heroCardBSub: '配色與貼紙',
      chipTitle: '29 張線稿',
      chipSub: '陸地 / 海洋，可收藏',
      statOutlines: '張線稿',
      statColors: '種畫布底色',
      statLangs: '種介面語言',
      statIap: '個付費內購',
      featuresKicker: '玩法與特性',
      featuresTitle: '小小畫板，大大的創造力',
      featuresLead: '選一隻喜歡的動物，照著淡淡的線稿描；描熟了就調淡，或者乾脆藏起來，畫出自己的版本。',
      fTraceTitle: '29 張卡通線稿',
      fTraceDesc: '長頸鹿、小熊、小貓、小馬、小魚……分成陸地與海洋兩類，喜歡的可以收藏，隨時回來再畫。',
      fDoodleTitle: '描摹或自由畫',
      fDoodleDesc: '線稿濃淡可調：照著描、調淡一點，或者完全隱藏，同一隻動物能畫出無數個版本。',
      fToolsTitle: '順手的畫筆工具',
      fToolsDesc: '畫筆粗細與透明度可調，配橡皮與撤銷，畫錯一步也不怕，隨時重來。',
      fStickerTitle: '貼紙裝飾',
      fStickerDesc: '把可愛的貼紙貼到畫上，一幅安靜的塗鴉立刻熱鬧起來。',
      fCanvasTitle: '九種畫布底色',
      fCanvasDesc: '柔和的畫布配色，換一種底色，就有一種新的心情。',
      fSaveTitle: '作品儲存在本機',
      fSaveDesc: '畫完存進「我的作品」，也能用系統分享發出去；不讀取相簿、不上傳伺服器，解除安裝應用即一併刪除。',
      fLangTitle: '三語介面',
      fLangDesc: '簡體中文、English、日本語，跟隨系統語言，也可在設定裡手動切換。',
      fFreeTitle: '無帳號無內購',
      fFreeDesc: '不用註冊，沒有付費內購；免費下載，打開就畫。',
      tplKicker: '線稿圖鑑',
      tplTitle: '29 隻卡通動物，等你來畫',
      tplLead: '線稿分成陸地與海洋兩類，濃淡可調，還能收藏。下面是圖鑑中的幾位。',
      tplCardName: '卡通動物',
      tplCardRole: '線稿',
      tplNote: '圖鑑共 29 張 · 應用內可收藏喜歡的線稿',
      shotsKicker: '介面一覽',
      shotsTitle: '大色塊、圓按鈕，孩子也能上手',
      shotsLead: '畫筆、調色、貼紙與設定，都在一屏之內，動動手指就能開始。',
      shotCanvas: '起筆畫板',
      shotCanvasSub: '描摹線稿或自由塗鴉',
      shotColors: '調色盤',
      shotColorsSub: '顏色、粗細與透明度',
      shotTools: '工具列',
      shotToolsSub: '橡皮、撤銷、貼紙與清空',
      shotAnimals: '挑一隻動物',
      shotAnimalsSub: '陸地與海洋，濃淡可調',
      shotTheme: '畫布配色',
      shotThemeSub: '九種柔和底色',
      shotSettings: '偏好設定',
      shotSettingsSub: '語言、主題與更多',
      featureCaption: '描摹或自由塗鴉，作品只留在手機裡。',
      adsKicker: '廣告與免廣告',
      adsTitle: '免費畫畫，也能安靜地畫',
      adsLead: '免費版包含 Google AdMob 的插屏、激勵影片與激勵插屏，沒有付費內購。自願看完激勵影片，就能暫時去掉廣告。',
      noIap: '無內購 · 無帳號',
      tierViews: '次觀看',
      tier1: '免廣告 1 天',
      tier1Sub: '累計觀看 3 次激勵影片',
      tier2: '免廣告 1 週',
      tier2Sub: '累計觀看 7 次激勵影片',
      adsNote: '免廣告期間不再展示插屏；觀看記錄只儲存在本機，解除安裝即清除。繪畫本身完全離線，不消耗流量。',
      dlKicker: '免費下載',
      dlTitle: '拿起畫筆，畫一隻。',
      dlLead: '在 Google Play 與 App Store 免費獲取《卡通繪畫》。iOS 13+ / Android 5.0+，打開就畫，作品只存在本機。',
      privacyLink: '隱私政策',
      dlMeta: '包名 com.oneusop.painting1 · 聯絡',
      footerTagline: '釋放你的創造力。',
      contact: '聯絡我們',
      madeBy: '由 oneusop 出品',
      footerNote: '描摹與塗鴉應用 · 作品僅儲存在本機',
      privacyTitle: '隱私政策',
      privacyMeta: '生效日期：2026 年 11 月 22 日｜適用應用：卡通繪畫（iOS / Android，包名 com.oneusop.painting1）',
      backHome: '返回官網'
    },
    en: {
      skip: 'Skip to content',
      brand: 'Cartoon Drawing',
      brandSub: 'TRACE & DOODLE',
      navFeatures: 'Features',
      navTemplates: 'Templates',
      navShots: 'Screens',
      navDownload: 'Get the app',
      getApp: 'Get the app',

      heroEyebrow: 'Trace or doodle · free your creativity',
      heroTitle: 'Cartoon Drawing',
      heroTitleSub: 'TRACE & DOODLE',
      heroLead:
        'A faint cartoon sits on the canvas: follow the lines, or hide them and draw your own. Save it to My Works, or share it straight from your phone.',
      tagTrace: '29 outlines',
      tagStickers: 'Stickers',
      tagLangs: 'Three languages',
      tagNoIap: 'No IAP',
      playCta: 'Get it on Google Play',
      appStoreCta: 'Download on the App Store',
      learnMore: 'See how it works',
      heroMeta: 'iOS 13+ · Android 5.0+ · Free · 简体 / English / 日本語',
      heroCardA: 'Cartoon animals',
      heroCardASub: 'faint outlines',
      heroCardB: 'Free doodling',
      heroCardBSub: 'colors & stickers',
      chipTitle: '29 outlines',
      chipSub: 'Land / ocean, with favorites',
      statOutlines: 'outlines',
      statColors: 'canvas colors',
      statLangs: 'languages',
      statIap: 'in-app purchases',

      featuresKicker: 'Features',
      featuresTitle: 'A small canvas, big creativity',
      featuresLead:
        'Pick an animal you like and trace its faint outline. When you know the lines, fade them out — or hide them completely and draw your own version.',
      fTraceTitle: '29 cartoon outlines',
      fTraceDesc:
        'A giraffe, a bear, a kitty, a pony, a fish… grouped into land and ocean, with favorites so you can come back anytime.',
      fDoodleTitle: 'Trace or doodle',
      fDoodleDesc:
        'The guide line can be stronger or fainter: trace it, fade it, or hide it — one animal, endless versions.',
      fToolsTitle: 'Friendly painting tools',
      fToolsDesc: 'Adjustable brush size and opacity, with an eraser and undo — one wrong line is never the end.',
      fStickerTitle: 'Stickers',
      fStickerDesc: 'Place cute stickers on your drawing and a quiet doodle turns into a party.',
      fCanvasTitle: 'Nine canvas colors',
      fCanvasDesc: 'Soft canvas colors — a new background sets a new mood.',
      fSaveTitle: 'Artwork stays on the phone',
      fSaveDesc:
        'Save pictures to My Works or share them with the system share sheet. The app never reads your photo library, never uploads drawings, and everything is deleted on uninstall.',
      fLangTitle: 'Three languages',
      fLangDesc: 'Simplified Chinese, English and Japanese — follow the system language or pick one in Settings.',
      fFreeTitle: 'No account, no IAP',
      fFreeDesc: 'No sign-up, no paid in-app purchases. Free to download — open it and draw.',

      tplKicker: 'Template gallery',
      tplTitle: '29 cartoon animals, waiting for you',
      tplLead: 'Outlines are grouped into land and ocean, with adjustable strength and favorites. Meet a few of them.',
      tplCardName: 'Cartoon animal',
      tplCardRole: 'Outline',
      tplNote: '29 templates in all · favorite the ones you like in the app',

      shotsKicker: 'Screens',
      shotsTitle: 'Big colors, round buttons, easy for kids',
      shotsLead: 'Brush, colors, stickers and settings are all one screen away.',
      shotCanvas: 'Start drawing',
      shotCanvasSub: 'Trace an outline or doodle freely',
      shotColors: 'Color picker',
      shotColorsSub: 'Color, brush size and opacity',
      shotTools: 'Toolbar',
      shotToolsSub: 'Eraser, undo, stickers, clear',
      shotAnimals: 'Pick an animal',
      shotAnimalsSub: 'Land and ocean, adjustable strength',
      shotTheme: 'Canvas colors',
      shotThemeSub: 'Nine soft backgrounds',
      shotSettings: 'Settings',
      shotSettingsSub: 'Language, theme and more',
      featureCaption: 'Trace or doodle — artwork stays on the phone.',

      adsKicker: 'Ads & ad-free',
      adsTitle: 'Free to draw, quiet when you want',
      adsLead:
        'The free version shows interstitial, rewarded and rewarded-interstitial ads from Google AdMob, with no paid in-app purchases. Watch rewarded videos voluntarily to pause the ads.',
      noIap: 'No IAP · No account',
      tierViews: 'views',
      tier1: 'Ad-free for 1 day',
      tier1Sub: 'Watch 3 rewarded videos',
      tier2: 'Ad-free for 1 week',
      tier2Sub: 'Watch 7 rewarded videos',
      adsNote:
        'No interstitials while the ad-free pass is active; view counts stay on your device and are cleared on uninstall. Drawing itself works fully offline.',

      dlKicker: 'Free download',
      dlTitle: 'Pick up the brush. Draw one.',
      dlLead:
        'Get Cartoon Drawing free on Google Play and the App Store. iOS 13+ / Android 5.0+, ready when you are, and artwork stays on the phone.',
      privacyLink: 'Privacy Policy',
      dlMeta: 'Package com.oneusop.painting1 · Contact',
      footerTagline: 'Free your creativity.',
      contact: 'Contact',
      madeBy: 'made by oneusop',
      footerNote: 'Tracing & doodling app · artwork stays on the device',

      privacyTitle: 'Privacy Policy',
      privacyMeta: 'Effective November 22, 2026 · Applies to Cartoon Drawing (iOS / Android, package com.oneusop.painting1)',
      backHome: 'Back to site'
    }
  };

  var TITLES = {
    home: {
      zh: '卡通绘画 · Cartoon Drawing — 29 张线稿描摹与自由涂鸦',
      'zh-Hant': '卡通繪畫 · Cartoon Drawing — 29 張線稿描摹與自由塗鴉',
      en: 'Cartoon Drawing — Trace 29 cartoon animals or doodle freely'
    },
    privacy: {
      zh: '隐私政策 · 卡通绘画',
      'zh-Hant': '隱私政策 · 卡通繪畫',
      en: 'Privacy Policy · Cartoon Drawing'
    }
  };

  var DESCS = {
    home: {
      zh: '卡通绘画：照着 29 张卡通动物线稿描摹，也能隐藏线稿自由涂鸦。画笔、贴纸、九种画布底色，作品只留在手机里。',
      'zh-Hant': '卡通繪畫：照著 29 張卡通動物線稿描摹，也能隱藏線稿自由塗鴉。畫筆、貼紙、九種畫布底色，作品只留在手機裡。',
      en: 'Trace 29 cartoon animal outlines or hide them and doodle freely. Brush, stickers, nine canvas colors — artwork stays on your phone.'
    },
    privacy: {
      zh: '卡通绘画隐私政策：不设账号、不读取相册，作品与设置仅保存在本机；广告由 Google AdMob 提供。',
      'zh-Hant': '卡通繪畫隱私政策：不設帳號、不讀取相簿，作品與設定僅儲存在本機；廣告由 Google AdMob 提供。',
      en: 'Cartoon Drawing privacy policy: no accounts, no photo-library access; artwork and settings stay on your device. Ads served by Google AdMob.'
    }
  };

  var root = document.documentElement;
  var page = /privacy\.html$/.test(location.pathname) ? 'privacy' : 'home';

  var SUPPORTED = ['zh', 'zh-Hant', 'en'];
  var LANG_ATTR = { 'zh': 'zh-Hans', 'zh-Hant': 'zh-Hant', en: 'en' };

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
    try { saved = localStorage.getItem('cartoondraw_lang'); } catch (e) {}
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

    // 截图在中英文之间切换
    document.querySelectorAll('img[data-shot]').forEach(function (img) {
      var name = img.getAttribute('data-shot');
      img.src = 'assets/cartoon/shots/' + (current === 'en' ? 'en/' : 'zh/') + name + '.png';
    });

    if (TITLES[page]) document.title = TITLES[page][current] || TITLES[page].zh;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && DESCS[page]) metaDesc.setAttribute('content', DESCS[page][current] || DESCS[page].zh);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && TITLES[page]) ogTitle.setAttribute('content', TITLES[page][current] || TITLES[page].zh);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && DESCS[page]) ogDesc.setAttribute('content', DESCS[page][current] || DESCS[page].zh);

    try {
      localStorage.setItem('cartoondraw_lang', current);
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
