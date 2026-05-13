'use strict';

(function () {
  var STORAGE_KEY = 'screenly-lang';
  var RTL_LANGS = ['ur', 'fa'];
  var HTML_LANG = { ru: 'ru', kk: 'kk', uz: 'uz', ur: 'ur', hi: 'hi', fa: 'fa', id: 'id' };

  var ICON_DONE =
    '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><circle cx="7" cy="7" r="7" fill="#3a9e5f"/><polyline points="3.5,7 6,9.5 10.5,4.5" fill="none" stroke="white" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var ICON_THINKING =
    '<svg width="15" height="15" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style="animation:spin 3s linear infinite;transform-origin:center;display:block"><ellipse cx="8" cy="3" rx="1.3" ry="3.2" fill="#D4856A"/><ellipse cx="8" cy="3" rx="1.3" ry="3.2" fill="#D4856A" transform="rotate(30 8 8)"/><ellipse cx="8" cy="3" rx="1.3" ry="3.2" fill="#D4856A" transform="rotate(60 8 8)"/><ellipse cx="8" cy="3" rx="1.3" ry="3.2" fill="#D4856A" transform="rotate(90 8 8)"/><ellipse cx="8" cy="3" rx="1.3" ry="3.2" fill="#D4856A" transform="rotate(120 8 8)"/><ellipse cx="8" cy="3" rx="1.3" ry="3.2" fill="#D4856A" transform="rotate(150 8 8)"/></svg>';

  function feedCounterRu(n) {
    var w = n % 100;
    var w1 = w % 10;
    var form = 'й';
    if (w1 === 1 && w !== 11) form = 'е';
    else if (w1 >= 2 && w1 <= 4 && (w < 12 || w > 14)) form = 'я';
    return n + ' действи' + form + ' сегодня';
  }

  function feedTimeRu(secs) {
    if (secs < 60) return 'только что';
    if (secs < 120) return '1 мин назад';
    return Math.floor(secs / 60) + ' мин назад';
  }

  function feedCounterSimple(prefix, n, suffix) {
    return prefix + n + suffix;
  }

  function feedTimeTpl(just, oneMin, nMin, secs) {
    if (secs < 60) return just;
    if (secs < 120) return oneMin;
    return nMin.replace('{n}', String(Math.floor(secs / 60)));
  }

  var FEED_COUNTER = {
    ru: feedCounterRu,
    kk: function (n) {
      return 'Бүгін ' + n + ' әрекет';
    },
    uz: function (n) {
      return 'Bugun ' + n + ' ta harakat';
    },
    ur: function (n) {
      return 'آج ' + n + ' اقدامات';
    },
    hi: function (n) {
      return 'आज ' + n + ' कार्रवाइयाँ';
    },
    fa: function (n) {
      return 'امروز ' + n + ' اقدام';
    },
    id: function (n) {
      return n + ' tindakan hari ini';
    },
  };

  var FEED_TIME = {
    ru: feedTimeRu,
    kk: function (secs) {
      return feedTimeTpl('дәл қазір', '1 мин бұрын', '{n} мин бұрын', secs);
    },
    uz: function (secs) {
      return feedTimeTpl('hozirgina', '1 daqiqa oldin', '{n} daqiqa oldin', secs);
    },
    ur: function (secs) {
      return feedTimeTpl('ابھی ابھی', '1 منٹ پہلے', '{n} منٹ پہلے', secs);
    },
    hi: function (secs) {
      return feedTimeTpl('अभी', '1 मिनट पहले', '{n} मिनट पहले', secs);
    },
    fa: function (secs) {
      return feedTimeTpl('همین الان', '۱ دقیقه پیش', '{n} دقیقه پیش', secs);
    },
    id: function (secs) {
      return feedTimeTpl('baru saja', '1 mnt lalu', '{n} mnt lalu', secs);
    },
  };

  function feedEventsRu() {
    return [
      { icon: '🌍', label: 'Сканирую базы вакансий', detail: 'We Work Remotely · Himalayas · LinkedIn · Remote.co', type: 'processing' },
      { icon: '🔍', label: 'Найдено 3 новые позиции', detail: 'Stripe (США) · Linear (США) · Notion (США)', type: 'done' },
      { icon: '🧠', label: 'Анализирую совпадение профиля', detail: 'Senior PM в Stripe — совпадение 87%', type: 'processing' },
      { icon: '✍️', label: 'Адаптирую резюме', detail: 'Переписываю под ATS Stripe · добавляю remote-сигналы', type: 'processing' },
      { icon: '✅', label: 'Резюме готово', detail: 'Senior PM · Stripe · 100% remote · $140–180k', type: 'done' },
      { icon: '📝', label: 'Готовлю сопроводительное письмо', detail: 'Персонализирую под Senior PM · Stripe · remote-first культура', type: 'processing' },
      { icon: '📨', label: 'Отправляю заявку', detail: 'Remote-first Product Lead · Loom Inc.', type: 'processing' },
      { icon: '✅', label: 'Заявка отправлена', detail: 'Loom · подтверждение получено · жду ответа', type: 'done' },
      { icon: '🌍', label: 'Ищу новые позиции', detail: 'Обновляю фильтры · только fully remote · worldwide', type: 'processing' },
      { icon: '🔍', label: 'Найдено 2 позиции', detail: 'Figma (США) · Doist (Испания/удалённо)', type: 'done' },
      { icon: '✍️', label: 'Адаптирую резюме под Figma', detail: 'Фокус на дизайн-системах и продуктовых метриках', type: 'processing' },
      { icon: '📬', label: 'Читаю входящие письма', detail: 'Gmail · 3 новых ответа от рекрутеров · анализирую содержание', type: 'processing' },
      { icon: '📨', label: 'Отправляю заявку в Figma', detail: 'Письмо персонализировано под Head of PM Figma', type: 'processing' },
      { icon: '🔍', label: 'Мониторю статусы', detail: 'Stripe · Loom · Figma · Linear — все активны', type: 'processing' },
      { icon: '🌍', label: 'Новый цикл поиска', detail: 'Shopify · Automattic · Zapier · Buffer проверены', type: 'processing' },
    ];
  }

  var BASE_FEED = feedEventsRu();

  var FEED_DETAIL_EN = [
    'We Work Remotely · Himalayas · LinkedIn · Remote.co',
    'Stripe (US) · Linear (US) · Notion (US)',
    'Senior PM at Stripe — 87% match',
    'Rewriting for Stripe ATS · adding remote signals',
    'Senior PM · Stripe · 100% remote · $140–180k',
    'Personalizing cover letter · Senior PM · Stripe · remote-first',
    'Remote-first Product Lead · Loom Inc.',
    'Loom · confirmation received · awaiting reply',
    'Updating filters · fully remote only · worldwide',
    'Figma (US) · Doist (Spain / remote)',
    'Focus on design systems · product metrics',
    'Gmail · 3 new recruiter replies · parsing content',
    'Tailored message · Head of PM · Figma',
    'Stripe · Loom · Figma · Linear — all active',
    'Shopify · Automattic · Zapier · Buffer checked',
  ];

  window.SCREENLY_I18N = {
    ru: {
      'meta.title': 'Screenly — ИИ-агент для поиска глобальной удалённой работы',
      'lang.label': 'Язык',
      'nav.how': 'Как работает',
      'nav.benefits': 'Преимущества',
      'nav.reviews': 'Истории',
      'nav.cta': 'Запустить агента',
      'hero.pill': '100% удалённые · только глобальные компании · агент активен',
      'hero.title': 'Только полная удалёнка.<br>Только <em>мировые<br>компании.</em>',
      'hero.sub':
        'ИИ-агент находит только 100% удалённые вакансии в мировых компаниях, адаптирует резюме, подаёт заявки и готовит вас к интервью — пока вы занимаетесь жизнью.',
      'hero.btn': 'Запустить агента',
      'feed.header': 'Лог агента',
      'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">сейчас</span>',
      'stats.s1': 'только полностью<br>удалённые вакансии',
      'stats.s2': 'стран — компании,<br>нанимающие глобально',
      'stats.s3': 'получают оффер<br>за 6–8 недель',
      'ticker.label': 'компании, нанимающие удалённо по всему миру',
      'globe.title': 'Без офиса. Без границ.<br>Без компромиссов.',
      'globe.p':
        'Агент работает только с вакансиями, где работодатель нанимает глобально и готов платить вам — вне зависимости от того, где вы живёте.',
      'globe.region.na': 'Северная Америка',
      'globe.region.eu': 'Европа',
      'globe.region.uk': 'Великобритания',
      'globe.region.asia': 'Азия / Тихий океан',
      'globe.region.mena': 'Африка и Ближний Восток',
      'globe.region.latam': 'Латинская Америка',
      'how.eyebrow': 'Как работает агент',
      'how.h2': 'Только глобальные<br><em>remote-компании.</em><br>Только реальные позиции.',
      'how.lead':
        'Никаких «возможно удалённых» или «частично из офиса». Агент работает исключительно с fully remote вакансиями по всему миру.',
      'how.s1.tag': 'Поиск',
      'how.s1.h': 'Сканирует только 100% remote-вакансии',
      'how.s1.p':
        'Агент мониторит тысячи глобальных платформ — We Work Remotely, Remote.co, Himalayas, LinkedIn, закрытые доски — и фильтрует строго: только fully remote, без привязки к офису, из любой страны.',
      'how.s2.tag': 'Резюме',
      'how.s2.h': 'Улучшает и адаптирует резюме',
      'how.s2.p':
        'Под каждую вакансию агент создаёт отдельную версию резюме и сопроводительного письма — с нужными ключевыми словами, акцентами и структурой под ATS-системы.',
      'how.s3.tag': 'Заявки',
      'how.s3.h': 'Подаёт заявки автономно',
      'how.s3.p': 'Агент отправляет заявки, ведёт переписку с рекрутёрами и отслеживает каждый статус — пока вы занимаетесь своими делами.',
      'how.s4.tag': 'Интервью',
      'how.s4.h': 'Готовит к собеседованию',
      'how.s4.p':
        'Мок-интервью с обратной связью, разбор типичных вопросов и стратегия переговоров по офферу — агент помогает вам на каждом этапе до финала.',
      'match.meta': 'США · 100% remote · worldwide',
      'match.badge': '87% совпадение',
      'match.salary': '$140 000 – $180 000 / год',
      'match.tagsLabel': 'Ключевые совпадения',
      'match.tagPm': '5+ лет PM',
      'match.tagNo': 'Fintech — усилить',
      'match.step1': 'Вакансия найдена и проверена',
      'match.step2': 'Резюме адаптировано под ATS',
      'match.step3': 'Сопроводительное письмо готово',
      'match.step4': 'Отправляю заявку <span class="typing-dots"><span></span><span></span><span></span></span>',
      'match.step5': 'Ожидание ответа рекрутёра',
      'benefits.eyebrow': 'Почему агент лучше',
      'benefits.h2': 'Весь мировой рынок<br>удалённой работы —<br><em>в одном агенте</em>',
      'benefits.lead': 'Агент не ищет «рядом с домом». Он ищет лучшую работу в мире — там, где она есть.',
      'benefits.b1h': 'Работает 24/7',
      'benefits.b1p': 'Агент не спит, не уходит в отпуск и не отвлекается. Пока вы отдыхаете — он ищет, адаптирует и отправляет заявки.',
      'benefits.b2h': 'Только fully remote — без исключений',
      'benefits.b2p':
        'Агент фильтрует жёстко: никаких hybrid, никаких «иногда из офиса». Только позиции, где вы работаете откуда угодно, навсегда.',
      'benefits.b3h': 'Компании из 60+ стран',
      'benefits.b3p': 'США, Европа, Азия, Латинская Америка — агент видит весь рынок. Лучшая работа не обязательно в соседней стране.',
      'benefits.b4h': 'Резюме, которое проходит ATS',
      'benefits.b4p': 'Алгоритмы отсеивают большинство кандидатов до живого рекрутёра. Агент знает, как это обойти.',
      'benefits.b5h': 'Мок-интервью с ИИ',
      'benefits.b5p': 'Реалистичные симуляции собеседований с детальным разбором ответов. Вы выходите на интервью подготовленным.',
      'benefits.b6h': 'Переговоры по офферу',
      'benefits.b6p': 'Агент анализирует рыночные данные и помогает обосновать более высокую зарплату — в среднем +18%.',
      'intg.eyebrow': 'Интеграции',
      'intg.h2': 'Агент работает там,<br>где работаете <em>вы</em>',
      'intg.lead':
        'Подключите почту и Telegram — агент читает ответы рекрутёров, уведомляет о новых офферах и действует от вашего имени.',
      'intg.email.h': 'Email-интеграция',
      'intg.email.p':
        'Агент читает входящие письма от рекрутёров, анализирует офферы, отвечает на вопросы и согласовывает время интервью — от вашего имени.',
      'intg.tg.h': 'Telegram-интеграция',
      'intg.tg.p':
        'Агент подаёт заявки через Telegram-боты компаний, ведёт переписку с рекрутёрами в мессенджере и отвечает на вопросы — от вашего имени, пока вы занимаетесь жизнью.',
      'intg.sec.title': 'Безопасность',
      'intg.sec.li1': 'Доступ только к переписке с рекрутёрами — личные чаты закрыты',
      'intg.sec.li2': 'Никаких паролей — подключение через официальный Telegram Bot API',
      'intg.sec.li3': 'Отозвать доступ можно в один клик в любой момент',
      'test.eyebrow': 'Истории',
      'test.h2': 'Они уже работают<br><em>удалённо</em>',
      'test.q1':
        '«Я просто загрузила резюме и рассказала о себе. Через 5 недель — оффер из США, полностью удалённо. Агент нашёл вакансию, о которой я даже не знала, что она существует.»',
      'test.n1': 'Алина Смирнова',
      'test.r1': 'Product Manager · Stripe, Берлин',
      'test.q2':
        '«Мок-интервью с агентом — лучшая подготовка из всего, что я пробовал. На реальном собеседовании в Amazon чувствовал себя уверенно.»',
      'test.n2': 'Дмитрий Морозов',
      'test.r2': 'Software Engineer · Amazon, Лондон',
      'test.q3':
        '«Не верила, что ИИ сможет написать резюме лучше меня. Ошибалась. Агент переписал его так, что рекрутёры сами начали писать первыми.»',
      'test.n3': 'Мария Коваль',
      'test.r3': 'UX Designer · Figma, Амстердам',
      'cta.h2': 'Ваша глобальная<br>remote-карьера<br>начинается здесь',
      'cta.p': 'Расскажите о себе за 10 минут — агент начнёт искать вакансии по всему миру немедленно.',
      'cta.btn': 'Начать бесплатно',
      'cta.note': 'Бесплатный пробный период · Без карты · Отмена в любой момент',
      'footer.privacy': 'Конфиденциальность',
      'footer.terms': 'Условия',
      'footer.contact': 'Контакты',
      'footer.copy': '© {{year}} Screenly',
      feedEvents: feedEventsRu(),
    },
  };

  window.__screenlyFeedMeta = BASE_FEED.map(function (e) {
    return { icon: e.icon, type: e.type };
  });
  window.__screenlyFeedDetailEn = FEED_DETAIL_EN;

  window.__screenlyLang = 'ru';

  function getPack(lang) {
    return window.SCREENLY_I18N[lang] || window.SCREENLY_I18N.ru;
  }

  function applyStaticStrings(lang) {
    var pack = getPack(lang);
    document.documentElement.lang = HTML_LANG[lang] || 'ru';
    document.documentElement.dir = RTL_LANGS.indexOf(lang) !== -1 ? 'rtl' : 'ltr';

    var y = new Date().getFullYear();
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!k || k === 'footer.copy') return;
      var v = pack[k];
      if (typeof v === 'string') el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      var v = pack[k];
      if (typeof v === 'string') el.innerHTML = v;
    });
    var fc = document.getElementById('footer-copy');
    if (fc && typeof pack['footer.copy'] === 'string') {
      fc.textContent = pack['footer.copy'].replace('{{year}}', String(y));
    }
    var dt = document.getElementById('doc-title');
    if (dt && pack['meta.title']) dt.textContent = pack['meta.title'];
    else if (pack['meta.title']) document.title = pack['meta.title'];

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    var sel = document.getElementById('lang-select');
    if (sel) sel.value = lang;
    window.__screenlyLang = lang;
  }

  function initAgentFeed() {
    var list = document.getElementById('feed-list');
    var counter = document.getElementById('feed-counter');
    var progress = document.getElementById('feed-progress');
    if (!list || !counter || !progress) return;

    var MAX_VISIBLE = 4;
    var INTERVAL = 2800;
    var PROGRESS_DURATION = INTERVAL - 200;
    var idx = 0;
    var count = 0;
    var items = [];
    var timer1;
    var timer2;

    function currentLang() {
      return window.__screenlyLang || 'ru';
    }

    function pack() {
      return getPack(currentLang());
    }

    function timeAgo(secsAgo) {
      var fn = FEED_TIME[currentLang()];
      return fn ? fn(secsAgo) : feedTimeRu(secsAgo);
    }

    function render() {
      var p = pack();
      var nowHtml = p['feed.nowHtml'] || '<span style="color:var(--accent);font-weight:500">now</span>';
      list.innerHTML = '';
      items.forEach(function (item, i) {
        var isActive = i === items.length - 1;
        var secsAgo = Math.round((Date.now() - item.ts) / 1000);
        var div = document.createElement('div');
        div.className = 'feed-item' + (isActive ? ' feed-active feed-new' : '');
        var iconHtml = isActive ? ICON_THINKING : ICON_DONE;
        div.innerHTML =
          '<div class="feed-icon">' +
          iconHtml +
          '</div>' +
          '<div class="feed-text">' +
          '<div><strong>' +
          item.label +
          '</strong></div>' +
          '<div style="font-size:12px;color:var(--text3);margin-top:2px">' +
          item.detail +
          '</div>' +
          '<div class="feed-time">' +
          (isActive ? nowHtml : timeAgo(secsAgo)) +
          '</div>' +
          '</div>';
        if (isActive && item.type === 'processing') {
          var dots = document.createElement('span');
          dots.className = 'typing-dots';
          dots.style.cssText = 'margin-left:auto;align-self:center;flex-shrink:0';
          dots.innerHTML = '<span></span><span></span><span></span>';
          div.appendChild(dots);
        }
        list.appendChild(div);
      });
    }

    function animateProgress() {
      progress.style.transition = 'none';
      progress.style.width = '0%';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          progress.style.transition = 'width ' + PROGRESS_DURATION + 'ms linear';
          progress.style.width = '100%';
        });
      });
    }

    function addEvent() {
      var evs = pack().feedEvents || BASE_FEED;
      var ev = evs[idx % evs.length];
      idx++;
      count++;
      items.push({ icon: ev.icon, label: ev.label, detail: ev.detail, type: ev.type, ts: Date.now() });
      if (items.length > MAX_VISIBLE) items.shift();
      render();
      animateProgress();
      var fc = FEED_COUNTER[currentLang()];
      counter.textContent = fc ? fc(count) : String(count);
    }

    function clearTimers() {
      if (timer1) clearInterval(timer1);
      if (timer2) clearInterval(timer2);
      timer1 = timer2 = null;
    }

    function start() {
      clearTimers();
      idx = 0;
      count = 0;
      items = [];
      list.innerHTML = '';
      addEvent();
      timer1 = setInterval(addEvent, INTERVAL);
      timer2 = setInterval(function () {
        var now = Date.now();
        var divs = list.querySelectorAll('.feed-item:not(.feed-active) .feed-time');
        divs.forEach(function (el, i) {
          if (items[i]) el.textContent = timeAgo(Math.round((now - items[i].ts) / 1000));
        });
      }, 15000);
    }

    window.__screenlyFeedReset = function () {
      start();
    };

    start();
  }

  function applyLanguage(lang) {
    if (!window.SCREENLY_I18N[lang]) lang = 'ru';
    applyStaticStrings(lang);
    if (window.__screenlyFeedReset) window.__screenlyFeedReset();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var sel = document.getElementById('lang-select');
    var saved = 'ru';
    try {
      saved = localStorage.getItem(STORAGE_KEY) || 'ru';
    } catch (e) {}
    if (!window.SCREENLY_I18N[saved]) saved = 'ru';
    applyStaticStrings(saved);
    initAgentFeed();
    if (sel) {
      sel.addEventListener('change', function () {
        applyLanguage(sel.value);
      });
    }
  });
})();
