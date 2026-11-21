/* 三国象棋官网 · 双语切换与轻量交互（无第三方依赖） */

(function () {
  'use strict';

  var I18N = {
    zh: {
      skip: '跳到主要内容',
      brand: '三国象棋',
      brandSub: 'SANGUO XIANGQI',
      navFeatures: '玩法特性',
      navFactions: '六方阵营',
      navHeroes: '武将图鉴',
      navShots: '界面',
      navDownload: '获取游戏',
      getApp: '获取游戏',

      heroEyebrow: '三国群雄 · 一局定天下',
      heroTitle: '三国象棋',
      heroTitleSub: 'SANGUO XIANGQI',
      heroLead:
        '同样是车马炮，棋子却叫刘备、曹操、关羽、赤兔。选一方旗号，执红或执黑，一局之内见分晓。',
      tagAi: '五档离线 AI',
      tagFactions: '六方阵营',
      tagOffline: '不耗流量',
      tagNoIap: '无内购',
      playCta: '在 Google Play 获取',
      learnMore: '先看看怎么玩',
      heroMeta: 'Android 7.0 及以上 · 免费下载 · 简体 / 繁体 / English / 日本語',
      heroCardGuanyu: '蜀汉 · 名将',
      heroCardZhuge: '蜀汉 · 军师',
      chipTitle: '九纵十横',
      chipSub: '竖屏 / 横屏都顺手',
      statFactions: '方阵营',
      statHeroes: '位武将',
      statAi: '档离线 AI',
      statLangs: '种界面语言',

      featuresKicker: '玩法与特性',
      featuresTitle: '熟悉的棋盘，陌生的战场',
      featuresLead:
        '规则仍是那套中国象棋：马走日、象走田、炮翻山。变的是旗号、棋子，与坐在对面的那位军师。',
      fAiTitle: '五档 AI，从入门到大师',
      fAiDesc:
        '入门、初级、中级、高级、大师，搜索深度与预算逐级提升。全部在手机本地运算，飞行模式也能开局。',
      fRulesTitle: '完整中国象棋规则',
      fRulesDesc:
        '蹩马腿、塞象眼、炮翻山、兵过河、将帅照面与九宫限制；将军提醒、困毙、长将、三次重复与无进展判和。',
      fFactionsTitle: '六方阵营，各有旗号',
      fFactionsDesc:
        '蜀汉、曹魏、东吴、群雄、西凉、黄巾。主公、谋士、军师、名马与战将，全部有名字。',
      fHintTitle: '悔棋与军师提示',
      fHintDesc: '每局三次免费悔棋；军师推演为你推荐下一步，需要时再看一段激励视频。',
      fLogTitle: '全程中文棋谱',
      fLogDesc: '每一步都记成「炮八平七」这样的棋谱，随时回看，复局推演。',
      fLayoutTitle: '竖屏横屏都顺手',
      fLayoutDesc: '单手竖屏、双手横屏都能下；平板与笔记本同样做了布局适配。',
      fPiecesTitle: '两套棋子外观',
      fPiecesDesc: '书法字棋子与阵营徽记，红黑双方以文字与边框区分，同阵营也能一眼分明。',
      fLangTitle: '四语界面',
      fLangDesc: '简体中文、繁體中文、English、日本語，默认跟随系统语言切换。',

      factionsKicker: '六方阵营',
      factionsTitle: '六面旗号，一副棋盘',
      factionsLead: '双方可以选择同一阵营：红黑文字与边框区分敌我，走法规则完全一致。',
      lord: '主公',
      rosterAdvisor: '谋士',
      rosterStrategist: '军师',
      rosterSteed: '名马',
      rosterGeneral: '战将',

      f0Name: '蜀汉', f0Leader: '刘备', f0Motto: '仁义为旗，匡扶汉室',
      f0Advisors: '庞统 · 法正', f0Strategists: '诸葛亮 · 徐庶', f0Steeds: '赤兔 · 的卢', f0Generals: '赵云 · 马超',
      f1Name: '曹魏', f1Leader: '曹操', f1Motto: '雄才大略，逐鹿中原',
      f1Advisors: '荀彧 · 荀攸', f1Strategists: '司马懿 · 贾诩', f1Steeds: '绝影 · 飞电', f1Generals: '张辽 · 徐晃',
      f2Name: '东吴', f2Leader: '孙权', f2Motto: '江东豪杰，虎踞龙盘',
      f2Advisors: '鲁肃 · 张昭', f2Strategists: '周瑜 · 陆逊', f2Steeds: '惊帆 · 玉龙', f2Generals: '甘宁 · 凌统',
      f3Name: '群雄', f3Leader: '袁绍', f3Motto: '诸侯并起，逐鹿天下',
      f3Advisors: '田丰 · 沮授', f3Strategists: '许攸 · 审配', f3Steeds: '白义 · 踏雪', f3Generals: '公孙瓒 · 袁术',
      f4Name: '西凉', f4Leader: '董卓', f4Motto: '铁骑纵横，威震关陇',
      f4Advisors: '李儒 · 贾诩', f4Strategists: '蔡邕 · 王允', f4Steeds: '赤兔 · 汗血', f4Generals: '吕布 · 张绣',
      f5Name: '黄巾', f5Leader: '张角', f5Motto: '苍天已死，黄天当立',
      f5Advisors: '张宝 · 张梁', f5Strategists: '波才 · 张曼成', f5Steeds: '黄骠 · 追风', f5Generals: '张燕 · 张牛角',

      heroesKicker: '武将图鉴',
      heroesTitle: '十八位武将，各为其主',
      heroesLead: '图鉴中收藏十八幅人物立绘：主公、军师、谋士与猛将，阵营与身份一目了然。',
      roleLord: '主公',
      roleGeneral: '名将',
      roleStrategist: '军师',
      roleWarrior: '猛将',
      roleCommander: '战将',
      roleVeteran: '老将',
      roleAdvisor: '谋士',
      heroesNote: '图鉴共 18 幅 · 每局可翻牌查看',

      shotsKicker: '界面一览',
      shotsTitle: '宣纸棋盘，木纹边框',
      shotsLead: '上一步高亮、将军提醒、吃子记录与完整棋谱，都在一屏之内。',
      shotHome: '布阵点将',
      shotHomeSub: '选阵营、定难度、执红先行',
      shotGame: '对局落子',
      shotGameSub: '军师建议与上一步高亮',
      shotSettings: '偏好设置',
      shotSettingsSub: '语言、音效、触感与棋子外观',
      shotRules: '规则说明',
      shotRulesSub: '走法、记谱与胜负裁定',
      laptopCaption: '横屏与平板布局，棋盘更大，落子更稳。',

      adsKicker: '广告与免广告',
      adsTitle: '免费对弈，也可安静下棋',
      adsLead:
        '免费版包含 Google AdMob 的横幅、插屏与激励视频，没有任何付费内购。自愿看完激励视频，就能累积免广告时长。',
      noIap: '无内购 · 无账号',
      tierViews: '次观看',
      tier1: '免广告 1 天',
      tier1Sub: '累积观看 3 次激励视频',
      tier2: '免广告 1 周',
      tier2Sub: '累积观看 10 次激励视频',
      tier3: '免广告 1 个月',
      tier3Sub: '累积观看 30 次激励视频',
      adsNote:
        '免广告期间不展示横幅与插屏；观看记录只保存在本机，卸载即清除。对局 AI 完全离线，不消耗流量。',

      dlKicker: '免费下载',
      dlTitle: '坐下来，落一子。',
      dlLead: '在 Google Play 免费获取《三国象棋》。Android 7.0 及以上，离线可玩，一局十分钟。',
      privacyLink: '隐私政策',
      dlMeta: '包名 com.oneusop.sanguo · 联系',
      footerTagline: '一方棋局，天下谋略。',
      contact: '联系我们',
      madeBy: '由 oneusop 出品',
      footerNote: '非官方三国题材同人作品 · 棋规遵循中国象棋协会通行规则',

      privacyTitle: '隐私政策',
      privacyMeta: '生效日期：2026 年 11 月 14 日｜适用应用：三国象棋（Android，包名 com.oneusop.sanguo）',
      backHome: '返回官网'
    },

    en: {
      skip: 'Skip to content',
      brand: 'Sanguo Xiangqi',
      brandSub: 'THREE KINGDOMS CHESS',
      navFeatures: 'Gameplay',
      navFactions: 'Factions',
      navHeroes: 'Heroes',
      navShots: 'Screens',
      navDownload: 'Download',
      getApp: 'Get the game',

      heroEyebrow: 'Three Kingdoms · one board',
      heroTitle: 'Sanguo Xiangqi',
      heroTitleSub: 'THREE KINGDOMS CHESS',
      heroLead:
        'The same chariots, horses and cannons — but the pieces answer to Liu Bei, Cao Cao, Guan Yu and Red Hare. Pick a banner, take red or black, and settle the realm in one game.',
      tagAi: 'Five offline AI levels',
      tagFactions: 'Six factions',
      tagOffline: 'No data needed',
      tagNoIap: 'No in-app purchases',
      playCta: 'Get it on Google Play',
      learnMore: 'See how it plays',
      heroMeta: 'Android 7.0+ · Free · 简体 / 繁體 / English / 日本語',
      heroCardGuanyu: 'Shu Han · General',
      heroCardZhuge: 'Shu Han · Strategist',
      chipTitle: 'Nine files, ten ranks',
      chipSub: 'Portrait or landscape',
      statFactions: 'factions',
      statHeroes: 'heroes',
      statAi: 'offline AI levels',
      statLangs: 'languages',

      featuresKicker: 'Gameplay',
      featuresTitle: 'A familiar board, an unfamiliar war',
      featuresLead:
        'The rules are the classic ones: the horse’s move, the elephant’s field, the cannon’s screen. What changes is the banners, the pieces — and the strategist across the board.',
      fAiTitle: 'Five AI levels, beginner to master',
      fAiDesc:
        'Beginner, Easy, Medium, Hard and Master, each with a deeper search and a larger budget. Everything runs on your phone — play in airplane mode.',
      fRulesTitle: 'Complete xiangqi rules',
      fRulesDesc:
        'Horse-leg block, elephant-eye block, cannon screens, pawns across the river, the flying general and palace limits. Check alerts, stalemate, perpetual check, threefold repetition and no-progress draws are all handled.',
      fFactionsTitle: 'Six factions, six banners',
      fFactionsDesc:
        'Shu Han, Cao Wei, Eastern Wu, the Warlords, Xi Liang and the Yellow Turbans. Lords, advisors, strategists, famous steeds and commanders all carry names.',
      fHintTitle: 'Undo and strategist hints',
      fHintDesc:
        'Three free undos per game; the strategist suggests your next move, with a rewarded video when you need more.',
      fLogTitle: 'Full Chinese notation',
      fLogDesc: 'Every move is recorded in notation such as “Cannon 8 to 7”, ready to review and replay.',
      fLayoutTitle: 'Portrait and landscape',
      fLayoutDesc: 'One-handed portrait, two-handed landscape, plus layouts tuned for tablets and laptops.',
      fPiecesTitle: 'Two piece styles',
      fPiecesDesc:
        'Calligraphic glyphs with faction emblems; red and black stay distinct by text and border even in the same faction.',
      fLangTitle: 'Four languages',
      fLangDesc: 'Simplified Chinese, Traditional Chinese, English and Japanese, following your system language.',

      factionsKicker: 'Six factions',
      factionsTitle: 'Six banners, one board',
      factionsLead:
        'Both sides may choose the same faction: red and black text and borders keep them apart, and the rules never change.',
      lord: 'Lord',
      rosterAdvisor: 'Advisor',
      rosterStrategist: 'Strategist',
      rosterSteed: 'Steed',
      rosterGeneral: 'Commander',

      f0Name: 'Shu Han', f0Leader: 'Liu Bei', f0Motto: 'Righteousness as our banner, restore the Han',
      f0Advisors: 'Pang Tong · Fa Zheng', f0Strategists: 'Zhuge Liang · Xu Shu', f0Steeds: 'Red Hare · Dilu', f0Generals: 'Zhao Yun · Ma Chao',
      f1Name: 'Cao Wei', f1Leader: 'Cao Cao', f1Motto: 'Great ambition, contend for the central plains',
      f1Advisors: 'Xun Yu · Xun You', f1Strategists: 'Sima Yi · Jia Xu', f1Steeds: 'Jueying · Feidian', f1Generals: 'Zhang Liao · Xu Huang',
      f2Name: 'Eastern Wu', f2Leader: 'Sun Quan', f2Motto: 'Heroes of Jiangdong, dragons coiled and tigers seated',
      f2Advisors: 'Lu Su · Zhang Zhao', f2Strategists: 'Zhou Yu · Lu Xun', f2Steeds: 'Jingfan · Yulong', f2Generals: 'Gan Ning · Ling Tong',
      f3Name: 'Warlords', f3Leader: 'Yuan Shao', f3Motto: 'Warlords rise, all under heaven at stake',
      f3Advisors: 'Tian Feng · Ju Shou', f3Strategists: 'Xu You · Shen Pei', f3Steeds: 'Baiyi · Taxue', f3Generals: 'Gongsun Zan · Yuan Shu',
      f4Name: 'Xi Liang', f4Leader: 'Dong Zhuo', f4Motto: 'Iron cavalry sweep the northwest',
      f4Advisors: 'Li Ru · Jia Xu', f4Strategists: 'Cai Yong · Wang Yun', f4Steeds: 'Red Hare · Hanxue', f4Generals: 'Lu Bu · Zhang Xiu',
      f5Name: 'Yellow Turbans', f5Leader: 'Zhang Jiao', f5Motto: 'The azure sky is dead, the yellow heaven rises',
      f5Advisors: 'Zhang Bao · Zhang Liang', f5Strategists: 'Bo Cai · Zhang Mancheng', f5Steeds: 'Huangbiao · Zhuifeng', f5Generals: 'Zhang Yan · Zhang Niujiao',

      heroesKicker: 'Hero gallery',
      heroesTitle: 'Eighteen heroes, eighteen loyalties',
      heroesLead:
        'Eighteen painted portraits — lords, strategists, advisors and warriors, each with a banner and a role.',
      roleLord: 'Lord',
      roleGeneral: 'General',
      roleStrategist: 'Strategist',
      roleWarrior: 'Warrior',
      roleCommander: 'Commander',
      roleVeteran: 'Veteran',
      roleAdvisor: 'Advisor',
      heroesNote: '18 portraits · flip through them in the app',

      shotsKicker: 'Screens',
      shotsTitle: 'Rice-paper board, wood-grain frame',
      shotsLead:
        'Last-move highlights, check alerts, captured pieces and full notation, all on one screen.',
      shotHome: 'Pick your banners',
      shotHomeSub: 'Faction, difficulty, red or black',
      shotGame: 'Make a move',
      shotGameSub: 'Strategist hints and last-move highlight',
      shotSettings: 'Tune the game',
      shotSettingsSub: 'Language, sound, haptics, piece style',
      shotRules: 'Rules & notation',
      shotRulesSub: 'Moves, notation, how games end',
      laptopCaption: 'Landscape and tablet layouts give the board more room.',

      adsKicker: 'Ads & ad-free',
      adsTitle: 'Free to play, quiet when you want',
      adsLead:
        'The free version shows banner, interstitial and rewarded ads from Google AdMob, with no paid in-app purchases. Watch rewarded videos voluntarily to earn ad-free time.',
      noIap: 'No IAP · No account',
      tierViews: 'views',
      tier1: 'Ad-free for 1 day',
      tier1Sub: 'Watch 3 rewarded videos',
      tier2: 'Ad-free for 1 week',
      tier2Sub: 'Watch 10 rewarded videos',
      tier3: 'Ad-free for 1 month',
      tier3Sub: 'Watch 30 rewarded videos',
      adsNote:
        'No banners or interstitials while ad-free; view counts stay on your device and are cleared on uninstall. The AI runs fully offline and uses no data.',

      dlKicker: 'Free download',
      dlTitle: 'Sit down. Make a move.',
      dlLead:
        'Get Sanguo Xiangqi free on Google Play. Android 7.0+, playable offline, about ten minutes a game.',
      privacyLink: 'Privacy Policy',
      dlMeta: 'Package com.oneusop.sanguo · Contact',
      footerTagline: 'One board, a realm of strategy.',
      contact: 'Contact',
      madeBy: 'made by oneusop',
      footerNote: 'Unofficial Three Kingdoms fan project · Rules follow standard Chinese chess',

      privacyTitle: 'Privacy Policy',
      privacyMeta: 'Effective November 14, 2026 · Applies to 三国象棋 (Android, package com.oneusop.sanguo)',
      backHome: 'Back to site'
    }
  };

  var TITLES = {
    home: {
      zh: '三国象棋 · Sanguo Xiangqi — 六阵营中国象棋，五档离线 AI',
      en: 'Sanguo Xiangqi — Three Kingdoms Chinese Chess with Offline AI'
    },
    privacy: {
      zh: '隐私政策 · 三国象棋',
      en: 'Privacy Policy · Sanguo Xiangqi'
    }
  };

  var DESCS = {
    home: {
      zh: '三国象棋把中国象棋放进三国乱世：六方阵营、十八位武将、五档离线 AI，无需联网，一局定天下。',
      en: 'Six Three Kingdoms factions, eighteen painted heroes and five offline AI levels. Classic Chinese chess, no internet needed.'
    },
    privacy: {
      zh: '三国象棋隐私政策：不设账号、不收集通讯录与位置，设置与进度仅保存在本机。',
      en: 'Sanguo Xiangqi privacy policy: no accounts, no contacts or location, settings stay on your device.'
    }
  };

  var root = document.documentElement;
  var page = /privacy\.html$/.test(location.pathname) ? 'privacy' : 'home';
  var queryLang = null;
  try {
    queryLang = new URLSearchParams(location.search).get('lang');
  } catch (e) {}
  var current =
    queryLang === 'en' || queryLang === 'zh'
      ? queryLang
      : root.getAttribute('lang') === 'en'
        ? 'en'
        : 'zh';

  function applyLang(lang) {
    current = lang === 'en' ? 'en' : 'zh';
    root.setAttribute('lang', current === 'en' ? 'en' : 'zh-Hans');

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

    // 截图在中英文之间切换（应用内截图本身是双语版本）
    document.querySelectorAll('img[data-shot]').forEach(function (img) {
      var name = img.getAttribute('data-shot');
      img.src = 'assets/sanguo/shots/' + (current === 'en' ? 'en/' : '') + name + '.png';
    });

    if (TITLES[page]) document.title = TITLES[page][current];
    var meta = document.querySelector('meta[name="description"]');
    if (meta && DESCS[page]) meta.setAttribute('content', DESCS[page][current]);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && TITLES[page]) ogTitle.setAttribute('content', TITLES[page][current]);
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && DESCS[page]) ogDesc.setAttribute('content', DESCS[page][current]);

    try {
      localStorage.setItem('sanguo_lang', current);
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
