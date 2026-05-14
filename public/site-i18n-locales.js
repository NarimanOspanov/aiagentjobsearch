'use strict';

(function () {
  function feedFromLabels(labels) {
    var M = window.__screenlyFeedMeta;
    var D = window.__screenlyFeedDetailEn;
    if (!M || !D) return [];
    return M.map(function (m, i) {
      return { icon: m.icon, label: labels[i], detail: D[i], type: m.type };
    });
  }

  var EN = {
    'meta.title': 'Screenly — AI agent for global remote job search',
    'lang.label': 'Language',
    'nav.how': 'How it works',
    'nav.benefits': 'Benefits',
    'nav.reviews': 'Stories',
    'nav.cta': 'Launch the agent',
    'hero.pill': '100% remote · global companies only · agent active',
    'hero.title': 'Fully remote only.<br>Only <em>world-class<br>companies.</em>',
    'hero.sub':
      'The AI agent finds only 100% remote openings at global companies, tailors your résumé, submits applications, and prepares you for interviews — while you get on with life.',
    'hero.btn': 'Launch the agent',
    'feed.header': 'Agent log',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">now</span>',
    'stats.s1': 'only fully<br>remote roles',
    'stats.s2': 'companies hiring<br>across borders',
    'stats.s3': 'land an offer<br>in 6–8 weeks',
    'ticker.label': 'companies hiring remotely worldwide',
    'globe.title': 'No office. No borders.<br>No compromises.',
    'globe.p':
      'The agent only works openings where the employer hires globally and is ready to pay you — no matter where you live.',
    'globe.region.na': 'North America',
    'globe.region.eu': 'Europe',
    'globe.region.uk': 'United Kingdom',
    'globe.region.asia': 'Asia / Pacific',
    'globe.region.mena': 'Africa & Middle East',
    'globe.region.latam': 'Latin America',
    'how.eyebrow': 'How the agent works',
    'how.h2': 'Only global<br><em>remote-first companies.</em><br>Only real roles.',
    'how.lead':
      'No “maybe remote” or “partly from the office.” The agent works exclusively with fully remote openings worldwide.',
    'how.s1.tag': 'Search',
    'how.s1.h': 'Scans only 100% remote openings',
    'how.s1.p':
      'The agent monitors thousands of global platforms — We Work Remotely, Remote.co, Himalayas, LinkedIn, private boards — and filters strictly: fully remote only, no office tie-in, from any country.',
    'how.s2.tag': 'Résumé',
    'how.s2.h': 'Improves and tailors your résumé',
    'how.s2.p':
      'For each role the agent builds a separate résumé and cover letter — with the right keywords, emphasis, and structure for ATS systems.',
    'how.s3.tag': 'Applications',
    'how.s3.h': 'Submits applications autonomously',
    'how.s3.p':
      'The agent sends applications, corresponds with recruiters, and tracks every status — while you focus on your own work.',
    'how.s4.tag': 'Interview',
    'how.s4.h': 'Interview prep',
    'how.s4.p':
      'Mock interviews with feedback, review of typical questions, and offer-negotiation strategy — the agent supports you at every stage through to the final round.',
    'match.meta': 'US · 100% remote · worldwide',
    'match.badge': '87% match',
    'match.salary': '$140,000 – $180,000 / year',
    'match.tagsLabel': 'Key matches',
    'match.tagPm': '5+ years PM',
    'match.tagNo': 'Fintech — strengthen',
    'match.step1': 'Role found and verified',
    'match.step2': 'Résumé tailored for ATS',
    'match.step3': 'Cover letter ready',
    'match.step4': 'Submitting application <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'Awaiting recruiter reply',
    'benefits.eyebrow': 'Why the agent wins',
    'benefits.h2': 'The entire global<br>remote job market —<br><em>in one agent</em>',
    'benefits.lead':
      'The agent does not look “near home.” It looks for the best job in the world — wherever that is.',
    'benefits.b1h': 'Runs 24/7',
    'benefits.b1p':
      'The agent does not sleep, take vacation, or get sidetracked. While you rest, it searches, tailors, and submits applications.',
    'benefits.b2h': 'Fully remote only — no exceptions',
    'benefits.b2p':
      'Strict filtering: no hybrid, no “sometimes from the office.” Only roles where you work from anywhere, for good.',
    'benefits.b3h': 'Companies from 60+ countries',
    'benefits.b3p':
      'US, Europe, Asia, Latin America — the agent sees the whole market. The best role is not always in the next country over.',
    'benefits.b4h': 'Résumés that pass ATS',
    'benefits.b4p':
      'Algorithms filter out most candidates before a human recruiter ever sees them. The agent knows how to get through.',
    'benefits.b5h': 'AI mock interviews',
    'benefits.b5p':
      'Realistic interview practice with detailed answer review. You walk into the real interview prepared.',
    'benefits.b6h': 'Offer negotiation',
    'benefits.b6p':
      'The agent analyzes market data and helps you justify a higher salary — on average about +18%.',
    'intg.eyebrow': 'Integrations',
    'intg.h2': 'The agent works where<br><em>you</em> work',
    'intg.lead':
      'Connect your Gmail and a dedicated browser profile — the agent reads your mail (including confirmations and magic links), applies on employer career sites the way you would, and keeps recruiter threads moving.',
    'intg.email.h': 'Email integration',
    'intg.email.p':
      'The agent uses your inbox for confirmation emails, and verification links — so an application does not stall when a site asks you to confirm by mail.',
    'intg.browser.chip': 'Browser',
    'intg.browser.h': "The agent's browser on the agent's computer for applications",
    'intg.browser.p':
      'The agent opens company career portals in a controlled browser and completes the flow like a human: each step of the form, résumé upload, and submit — including in-flow confirmations when required.',
    'intg.sec.title': 'Security',
    'intg.sec.li1':
      'Uses OAuth 2 — Gmail connects through Google\'s official OAuth 2 authorization; we never store your password.',
    'intg.sec.li2':
      'Scoped access — recruiter threads and application flows only; the rest of your inbox stays private',
    'intg.sec.li3':
      'Browser automation only on sites you authorize; revoke access in one click at any time',
    'test.eyebrow': 'Stories',
    'test.h2': 'They are already working<br><em>remotely</em>',
    'test.q1':
      '“I just uploaded my résumé and told my story. Five weeks later — a fully remote offer from the US. The agent found a role I did not even know existed.”',
    'test.n1': 'Alina Smirnova',
    'test.r1': 'Product Manager · Stripe, Berlin',
    'test.q2':
      '“Mock interviews with the agent were the best prep I have tried. I felt confident in the real Amazon interview.”',
    'test.n2': 'Dmitry Morozov',
    'test.r2': 'Software Engineer · Amazon, London',
    'test.q3':
      '“I did not believe AI could write a better résumé than I could. I was wrong. The agent rewrote it so recruiters started reaching out first.”',
    'test.n3': 'Maria Koval',
    'test.r3': 'UX Designer · Figma, Amsterdam',
    'cta.h2': 'Your global<br>remote career<br>starts here',
    'cta.p': 'Tell us about yourself in 10 minutes — the agent starts searching worldwide immediately.',
    'cta.btn': 'Start free',
    'cta.note': 'Free trial · No card required · Cancel anytime',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'Scanning job databases',
      'Found 3 new positions',
      'Analyzing profile match',
      'Tailoring résumé',
      'Résumé ready',
      'Drafting cover letter',
      'Submitting application',
      'Application sent',
      'Searching for new positions',
      'Found 2 positions',
      'Tailoring résumé for Figma',
      'Reading inbox',
      'Submitting application to Figma',
      'Monitoring statuses',
      'New search cycle',
    ]),
  };

  var KK = {
    'meta.title': 'Screenly — ғаламдық қашықтан жұмыс іздеуге арналған жасанды интеллект агенті',
    'lang.label': 'Тіл',
    'nav.how': 'Қалай жұмыс істейді',
    'nav.benefits': 'Артықшылықтар',
    'nav.reviews': 'Әңгімелер',
    'nav.cta': 'Агентті іске қосу',
    'hero.pill': '100% қашықтан · тек әлемдік компаниялар · агент белсенді',
    'hero.title': 'Тек толық қашықтан жұмыс.<br>Тек <em>әлемдік<br>компаниялар.</em>',
    'hero.sub':
      'Жасанды интеллект агенті әлемдік компаниялардағы тек толығымен қашықтан атқарылатын бос орындарды табады, түйіндемеңізді бейімдейді, өтініштер береді және сұхбатқа дайындайды — сіз өз тіршілігіңізбен айналысқанда.',
    'hero.btn': 'Агентті іске қосу',
    'feed.header': 'Агенттің әрекет журналы',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">қазір</span>',
    'stats.s1': 'тек толығымен<br>қашықтан бос орындар',
    'stats.s2': 'елден елге қызметкер<br>алатын компаниялар',
    'stats.s3': '6–8 аптада<br>ұсыныс алады',
    'ticker.label': 'бүкіл әлем бойынша қашықтан қызметкер іріктейтін компаниялар',
    'globe.title': 'Кеңсе жоқ. Шекара жоқ.<br>Ешқандай ымыра жоқ.',
    'globe.p':
      'Агент тек жұмыс берушісі қызметкерін әлемнің кез келген түкпірінен қабылдайтын және Сізге төлем жасауға дайын бос орындармен жұмыс істейді — тұратын еліңіз маңызды емес.',
    'globe.region.na': 'Солтүстік Америка',
    'globe.region.eu': 'Еуропа',
    'globe.region.uk': 'Ұлыбритания',
    'globe.region.asia': 'Азия / Тынық мұхиты',
    'globe.region.mena': 'Африка және Таяу Шығыс',
    'globe.region.latam': 'Латын Америкасы',
    'how.eyebrow': 'Агент қалай жұмыс істейді',
    'how.h2': 'Тек әлемдік<br><em>қашықтан жұмыс істейтін компаниялар.</em><br>Тек нақты лауазымдар.',
    'how.lead':
      '«Әбден қашықтан болуы мүмкін» немесе «кейде кеңсеге бару керек» деген жоқ. Агент тек әлемнің түкпір-түкпіріндегі толығымен қашықтан бос орындармен жұмыс істейді.',
    'how.s1.tag': 'Іздеу',
    'how.s1.h': 'Тек 100% қашықтан бос орындарды сканерлейді',
    'how.s1.p':
      'Агент мыңдаған ғаламдық алаңдарды бақылайды — We Work Remotely, Remote.co, Himalayas, LinkedIn, жабық тақталар — және қатаң сүзгіден өткізеді: тек толығымен қашықтан, кеңсеге байланысты емес, кез келген елден.',
    'how.s2.tag': 'Түйіндеме',
    'how.s2.h': 'Түйіндемені жетілдіреді және бейімдейді',
    'how.s2.p':
      'Әр бос орын үшін агент түйіндеме мен ілеспе хаттың бөлек нұсқасын жасайды — ATS жүйелеріне лайықты кілт сөздер, басты ұпайлар мен құрылыммен.',
    'how.s3.tag': 'Өтініштер',
    'how.s3.h': 'Өтініштерді дербес береді',
    'how.s3.p':
      'Агент өтініштер жібереді, HR мамандарымен хат-хабар жүргізеді және әрбір мәртебені бақылайды — сіз өз ісіңізбен айналысқанда.',
    'how.s4.tag': 'Сұхбат',
    'how.s4.h': 'Сұхбатқа дайындайды',
    'how.s4.p':
      'Сынақ сұхбат пен кері байланыс, жиі қойылатын сұрақтарды талдау және жұмыс ұсынысы бойынша келіссөз стратегиясы — агент сізді финалға дейін қолдайды.',
    'match.meta': 'АҚШ · 100% remote · worldwide',
    'match.badge': '87% сәйкестік',
    'match.salary': '$140 000 – $180 000 / жыл',
    'match.tagsLabel': 'Негізгі сәйкестіктер',
    'match.tagPm': '5+ жыл PM',
    'match.tagNo': 'Fintech — күшейту',
    'match.step1': 'Бос орын табылды және тексерілді',
    'match.step2': 'ATS үшін түйіндеме бейімделді',
    'match.step3': 'Ілеспе хат дайын',
    'match.step4': 'Өтініш жіберілуде <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'HR маманының жауабын күту',
    'benefits.eyebrow': 'Неге агент тиімдірек',
    'benefits.h2': 'Бүкіл әлемдік<br>қашықтан жұмыс нарығы —<br><em>бір агентте</em>',
    'benefits.lead':
      'Агент «үйдің қасында» іздемейді. Әлемдегі ең жақсы жұмысты, қай жерде болса да, соны табады.',
    'benefits.b1h': '24/7 жұмыс істейді',
    'benefits.b1p':
      'Ұйықтамайды, демалысқа шықпайды, бөгде нәрсеге алаңдамайды. Сіз демалғанда іздейді, бейімдейді және өтініштер жібереді.',
    'benefits.b2h': 'Тек толық қашықтан — ерекшелік жоқ',
    'benefits.b2p':
      'Агент қатаң сүзеді: аралас формат жоқ, «кейде кеңседен» деген жоқ. Тек қай жерден болсаңыз да, мәңгіге қашықтан орындалатын лауазымдар.',
    'benefits.b3h': '60+ елдегі компаниялар',
    'benefits.b3p':
      'АҚШ, Еуропа, Азия, Латын Америкасы — агент бүкіл нарықты көреді. Ең жақсы жұмыс көрші елде болмауы мүмкін.',
    'benefits.b4h': 'ATS-тен өтетін түйіндеме',
    'benefits.b4p':
      'Алгоритмдер үміткерлердің көпшілігін тірі HR маманына жетпей-ақ сүзіп тастайды. Агент оны қалай айналып өту керектігін біледі.',
    'benefits.b5h': 'Жасанды интеллектпен сынақ сұхбат',
    'benefits.b5p':
      'Нақты сұхбатқа ұқсас жаттығу және жауаптарды түсіндірумен талдау. Негізгі сұхбатқа сенімді барасыз.',
    'benefits.b6h': 'Жұмыс ұсынысы бойынша келіссөз',
    'benefits.b6p':
      'Агент нарық деректерін талдайды және жоғары жалақыны негіздеуге көмектеседі — орта есеппен +18%.',
    'intg.eyebrow': 'Интеграциялар',
    'intg.h2': 'Агент сіз жұмыс істейтін<br>жерде <em>жұмыс істейді</em>',
    'intg.lead':
      'Gmail мен бөлек браузер профилін қосыңыз — агент хаттарды оқиды (растау хаттары мен сілтемелерді қоса), жұмыс берушінің карьералық сайтында адам сияқты өтініш береді.',
    'intg.email.h': 'Электрондық пошта интеграциясы',
    'intg.email.p':
      'Агент поштаңызды растау хаттары мен верификация сілтемелері үшін пайдаланады — сайт пошта арқылы растауды сұрағанда өтінім тоқтап қалмасын.',
    'intg.browser.chip': 'Браузер',
    'intg.browser.h': 'Өтініштерді беру үшін агенттің өз компьютеріндегі браузері',
    'intg.browser.p':
      'Агент компанияның карьералық порталдарын басқарылатын браузерде ашады да, форманың әр қадамын, түйіндеме жүктеуін және жіберуді адам сияқты орындайды — қажет болса, ағын ішіндегі растау қадамдарын да.',
    'intg.sec.title': 'Қауіпсіздік',
    'intg.sec.li1':
      'OAuth 2 қолданылады — Gmail Google OAuth 2 ресми рұқсатымен қосылады; құпия сөз біздің серверлерде сақталмайды',
    'intg.sec.li2':
      'Шектеулі қолжетімділік — тек HR хаттары мен өтінім ағыны; қалған пошта мен жеке деректер қолжетімсіз',
    'intg.sec.li3':
      'Браузер автоматизациясы тек сіз рұқсат берген сайттарда; кіруді кез келген сәтте бір басумен тоқтатуға болады',
    'test.eyebrow': 'Әңгімелер',
    'test.h2': 'Олар қазірдің өзінде<br><em>қашықтан</em> жұмыс істейді',
    'test.q1':
      '«Мен түйіндемемді жүктеп, өзім туралы айтып бердім. Бес аптадан кейін — АҚШ-тан толығымен қашықтан жұмыс ұсынысы. Агент маған бұрын-соңды белгісіз болған бос орынды тапты.»',
    'test.n1': 'Алина Смирнова',
    'test.r1': 'Product Manager · Stripe, Берлин',
    'test.q2':
      '«Агентпен сынақ сұхбат — мен көрген ең мықты дайындық. Amazon сұхбатында өзімді сенімді сезіндім.»',
    'test.n2': 'Дмитрий Морозов',
    'test.r2': 'Software Engineer · Amazon, Лондон',
    'test.q3':
      '«Жасанды интеллект түйіндемемді менен жақсы жазады деп сенбедім. Қателестім. Агент оны қайта жазды да, HR мамандарының өзі алдымен жаза бастады.»',
    'test.n3': 'Мария Коваль',
    'test.r3': 'UX Designer · Figma, Амстердам',
    'cta.h2': 'Сіздің ғаламдық<br>қашықтан карьераңыз<br>мұнда басталады',
    'cta.p': 'Өзіңіз туралы он минутта айтып беріңіз — агент дереу бүкіл әлем бойынша бос орын іздеуді бастайды.',
    'cta.btn': 'Тегін бастау',
    'cta.note': 'Тегін сынақ мерзімі · Банк картасы қажет емес · Кез келген уақытта бас тарту',
    'footer.privacy': 'Құпиялылық',
    'footer.terms': 'Шарттар',
    'footer.contact': 'Байланыс',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'Бос орындар базасын сканерлеймін',
      '3 жаңа лауазым табылды',
      'Профильдің сәйкестігін талдаймын',
      'Түйіндемені бейімдеймін',
      'Түйіндеме дайын',
      'Ілеспе хат дайындаймын',
      'Өтініш жіберудемін',
      'Өтініш жіберілді',
      'Жаңа лауазымдар іздеймін',
      '2 лауазым табылды',
      'Figma үшін түйіндемені бейімдеймін',
      'Кіріс хаттарды оқимын',
      'Figma-ға өтініш жіберудемін',
      'Мәртебелерді бақылаймын',
      'Іздеудің жаңа циклі',
    ]),
  };

  var UZ = {
    'meta.title': 'Screenly — global masofaviy ish qidirish uchun sun\'iy intellekt agenti',
    'lang.label': 'Til',
    'nav.how': 'Qanday ishlaydi',
    'nav.benefits': 'Afzalliklar',
    'nav.reviews': 'Hikoyalar',
    'nav.cta': 'Agentni ishga tushirish',
    'hero.pill': '100% masofaviy · faqat global kompaniyalar · agent faol',
    'hero.title': 'Faqat to\'liq masofaviy ish.<br>Faqat <em>jahon<br>kompaniyalari.</em>',
    'hero.sub':
      'Sun\'iy intellekt agenti global kompaniyalarda faqat 100% masofaviy vakansiyalarni topadi, rezyumeni moslashtiradi, arizalarni yuboradi va suhbatga tayyorlaydi — siz o\'z hayotingiz bilan shug\'ullanayotganingizda.',
    'hero.btn': 'Agentni ishga tushirish',
    'feed.header': 'Agent jurnali',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">hozir</span>',
    'stats.s1': 'faqat to\'liq<br>masofaviy vakansiyalar',
    'stats.s2': 'chegaralar orasida xodim<br>oladigan kompaniyalar',
    'stats.s3': '6–8 hafta ichida<br>taklif oladi',
    'ticker.label': 'butun dunyo bo\'yicha masofaviy ishga oladigan kompaniyalar',
    'globe.title': 'Ofis yo\'q. Chegara yo\'q.<br>Kompromiss yo\'q.',
    'globe.p':
      'Agent faqat shunday vakansiyalar bilan ishlaydiki, ish beruvchi global qabul qiladi va sizga maosh to\'lashga tayyor — qayerda yashashingizdan qat\'i nazar.',
    'globe.region.na': 'Shimoliy Amerika',
    'globe.region.eu': 'Yevropa',
    'globe.region.uk': 'Buyuk Britaniya',
    'globe.region.asia': 'Osiyo / Tinch okeani',
    'globe.region.mena': 'Afrika va Yaqin Sharq',
    'globe.region.latam': 'Lotin Amerikasi',
    'how.eyebrow': 'Agent qanday ishlaydi',
    'how.h2': 'Faqat global<br><em>masofaviy kompaniyalar.</em><br>Faqat haqiqiy lavozimlar.',
    'how.lead':
      '«Ehtimol masofaviy» yoki «ba\'zan ofisdan» deganlar yo\'q. Agent butun dunyo bo\'yicha faqat to\'liq remote vakansiyalar bilan ishlaydi.',
    'how.s1.tag': 'Qidiruv',
    'how.s1.h': 'Faqat 100% remote vakansiyalarni skanerlaydi',
    'how.s1.p':
      'Agent minglab global platformalarni kuzatadi — We Work Remotely, Remote.co, Himalayas, LinkedIn, yopiq doskalar — va qat\'iy filtrlaydi: faqat fully remote, ofisga bog\'lanmagan, istalgan mamlakatdan.',
    'how.s2.tag': 'Rezyume',
    'how.s2.h': 'Rezyumeni yaxshilaydi va moslashtiradi',
    'how.s2.p':
      'Har bir vakansiya uchun agent alohida rezyume va qo\'shimcha xat versiyasini yaratadi — ATS tizimlari uchun kerakli kalit so\'zlar, urg\'ular va tuzilma bilan.',
    'how.s3.tag': 'Arizalar',
    'how.s3.h': 'Arizalarni mustaqil yuboradi',
    'how.s3.p':
      'Agent arizalarni yuboradi, rekruterlar bilan yozishadi va har bir holatni kuzatadi — siz o\'z ishingiz bilan band bo\'lganingizda.',
    'how.s4.tag': 'Suhbat',
    'how.s4.h': 'Suhbatga tayyorlaydi',
    'how.s4.p':
      'Fikr-mulohaza bilan suhbat simulyatsiyasi, tipik savollarni tahlil qilish va taklif bo\'yicha muzokara strategiyasi — agent sizni yakuniy bosqichgacha qo\'llab-quvvatlaydi.',
    'match.meta': 'AQSH · 100% remote · worldwide',
    'match.badge': '87% moslik',
    'match.salary': '$140 000 – $180 000 / yil',
    'match.tagsLabel': 'Asosiy mosliklar',
    'match.tagPm': '5+ yil PM',
    'match.tagNo': 'Fintech — kuchaytirish',
    'match.step1': 'Vakansiya topildi va tekshirildi',
    'match.step2': 'ATS uchun rezyume moslashtirildi',
    'match.step3': 'Qo\'shimcha xat tayyor',
    'match.step4': 'Ariza yuborilmoqda <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'Rekruter javobini kutish',
    'benefits.eyebrow': 'Nima uchun agent yaxshiroq',
    'benefits.h2': 'Butun global<br>masofaviy ish bozori —<br><em>bitta agentda</em>',
    'benefits.lead':
      'Agent «uy yaqinida» qidirimaydi. Dunyodagi eng yaxshi ishni qayerda bo\'lsa ham topadi.',
    'benefits.b1h': '24/7 ishlaydi',
    'benefits.b1p':
      'Agent uxlamaydi, ta\'tilda ketmaydi va chalg\'imaydi. Siz dam olayotganda u qidiradi, moslashtiradi va arizalarni yuboradi.',
    'benefits.b2h': 'Faqat fully remote — istisnosiz',
    'benefits.b2p':
      'Agent qat\'iy filtrlaydi: hybrid yo\'q, «ba\'zan ofisdan» yo\'q. Faqat qayerdan bo\'lishingizdan qat\'i nazar, doimiy ravishda masofaviy lavozimlar.',
    'benefits.b3h': '60+ mamlakatdagi kompaniyalar',
    'benefits.b3p':
      'AQSH, Yevropa, Osiyo, Lotin Amerikasi — agent butun bozorni ko\'radi. Eng yaxshi ish qo\'shni mamlakatda bo\'lmasligi mumkin.',
    'benefits.b4h': 'ATSdan o\'tadigan rezyume',
    'benefits.b4p':
      'Algoritmlar nomzodlarning aksariyatini jonli rekrutergacha yetkazmay filtrlaydi. Agent qanday o\'tishni biladi.',
    'benefits.b5h': 'Sun\'iy intellekt bilan sinov suhbati',
    'benefits.b5p':
      'Haqiqiy suhbatga yaqin mashqlar va javoblarni batafsil tahlil. Haqiqiy suhbatga tayyor kelasiz.',
    'benefits.b6h': 'Taklif bo\'yicha muzokara',
    'benefits.b6p':
      'Agent bozor ma\'lumotlarini tahlil qiladi va yuqori maoshni asoslashga yordam beradi — o\'rtacha +18%.',
    'intg.eyebrow': 'Integratsiyalar',
    'intg.h2': 'Agent siz ishlaydigan<br>yerda <em>ishlaydi</em>',
    'intg.lead':
      'Gmail va alohida brauzer profilini ulang — agent xatlarni o\'qiydi (tasdiqlash va havolalar bilan), ish beruvchining karyera saytida insondek ariza yuboradi.',
    'intg.email.h': 'Email integratsiyasi',
    'intg.email.p':
      'Agent pochtangizdan tasdiqlash xatlari va verifikatsiya havolalari uchun foydalanadi — sayt pochta orqali tasdiqlashni so\'rasa, ariza to\'xtab qolmasin.',
    'intg.browser.chip': 'Brauzer',
    'intg.browser.h': 'Arizalarni yuborish uchun agentning o\'z kompyuteridagi brauzeri',
    'intg.browser.p':
      'Agent kompaniya karyera portallarini boshqariladigan brauzerda ochadi va shaklning har bir bosqichini, rezyume yuklash va yuborishni insondek bajaradi — kerak bo\'lsa, oqim ichidagi tasdiqlashlarni ham.',
    'intg.sec.title': 'Xavfsizlik',
    'intg.sec.li1':
      'OAuth 2 ishlatiladi — Gmail rasmiy Google OAuth 2 orqali ulanadi; parollar serverlarimizda saqlanmaydi',
    'intg.sec.li2':
      'Cheklangan kirish — faqat rekruter yozishmalari va ariza oqimi; qolgan pochta va shaxsiy ma\'lumotlar ochiq emas',
    'intg.sec.li3':
      'Brauzer avtomatizatsiyasi faqat siz ruxsat bergan saytlarda; istalgan paytda bir bosishda kirishni bekor qilish mumkin',
    'test.eyebrow': 'Hikoyalar',
    'test.h2': 'Ular allaqachon<br><em>masofaviy</em> ishlaydi',
    'test.q1':
      '«Men rezyumeni yukladim va o\'zim haqimda gapirdim. Beshta haftadan keyin — AQSHdan to\'liq masofaviy taklif. Agent mavjudligini umuman bilmagan vakansiyani topdi.»',
    'test.n1': 'Alina Smirnova',
    'test.r1': 'Product Manager · Stripe, Berlin',
    'test.q2':
      '«Agent bilan sinov suhbati — sinab ko\'rganlarimning eng yaxshi tayyorgarligi. Amazon suhbatida o\'zimga ishonchim komil edi.»',
    'test.n2': 'Dmitriy Morozov',
    'test.r2': 'Software Engineer · Amazon, London',
    'test.q3':
      '«Sun\'iy intellekt mendan yaxshiroq rezyume yozadi deb ishonmasdim. Xato qildim. Agent uni shunday qayta yozdiki, rekruterlar o\'zlari birinchi bo\'lib yozishni boshlashdi.»',
    'test.n3': 'Mariya Koval',
    'test.r3': 'UX Designer · Figma, Amsterdam',
    'cta.h2': 'Sizning global<br>masofaviy karyerangiz<br>shu yerda boshlanadi',
    'cta.p': 'O\'zingiz haqingizda 10 daqiqada gapirib bering — agent darhol butun dunyo bo\'yicha qidirishni boshlaydi.',
    'cta.btn': 'Bepul boshlash',
    'cta.note': 'Bepul sinov muddati · Karta talab qilinmaydi · Istagan payt bekor qilish',
    'footer.privacy': 'Maxfiylik',
    'footer.terms': 'Shartlar',
    'footer.contact': 'Aloqa',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'Vakansiya bazalarini skanerlayapman',
      '3 ta yangi lavozim topildi',
      'Profil mosligini tahlil qilyapman',
      'Rezyumeni moslashtiryapman',
      'Rezyume tayyor',
      'Qo\'shimcha xat tayyorlayapman',
      'Ariza yuborilmoqda',
      'Ariza yuborildi',
      'Yangi lavozimlarni qidiryapman',
      '2 ta lavozim topildi',
      'Figma uchun rezyumeni moslashtiryapman',
      'Kiruvchi xatlarni o\'qiyapman',
      'Figma-ga ariza yuborilmoqda',
      'Statuslarni kuzatyapman',
      'Yangi qidiruv tsikli',
    ]),
  };

  var ID = {
    'meta.title': 'Screenly — agen AI untuk mencari kerja remote global',
    'lang.label': 'Bahasa',
    'nav.how': 'Cara kerja',
    'nav.benefits': 'Keunggulan',
    'nav.reviews': 'Cerita',
    'nav.cta': 'Jalankan agen',
    'hero.pill': '100% remote · hanya perusahaan global · agen aktif',
    'hero.title': 'Hanya kerja remote penuh.<br>Hanya <em>perusahaan<br>kelas dunia.</em>',
    'hero.sub':
      'Agen AI hanya menemukan lowongan 100% remote di perusahaan global, menyesuaikan CV, mengirim lamaran, dan mempersiapkan Anda untuk wawancara — sementara Anda menjalani hidup.',
    'hero.btn': 'Jalankan agen',
    'feed.header': 'Log agen',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">sekarang</span>',
    'stats.s1': 'hanya lowongan<br>remote sepenuhnya',
    'stats.s2': 'perusahaan yang merekrut<br>lintas negara',
    'stats.s3': 'mendapat tawaran<br>dalam 6–8 minggu',
    'ticker.label': 'perusahaan yang merekrut secara remote di seluruh dunia',
    'globe.title': 'Tanpa kantor. Tanpa batas.<br>Tanpa kompromi.',
    'globe.p':
      'Agen hanya bekerja dengan lowongan di mana pemberi kerja merekrut secara global dan siap membayar Anda — di mana pun Anda tinggal.',
    'globe.region.na': 'Amerika Utara',
    'globe.region.eu': 'Eropa',
    'globe.region.uk': 'Britania Raya',
    'globe.region.asia': 'Asia / Pasifik',
    'globe.region.mena': 'Afrika & Timur Tengah',
    'globe.region.latam': 'Amerika Latin',
    'how.eyebrow': 'Cara agen bekerja',
    'how.h2': 'Hanya perusahaan<br><em>global yang remote-first.</em><br>Hanya posisi nyata.',
    'how.lead':
      'Tanpa «mungkin remote» atau «sebagian dari kantor». Agen hanya menangani lowongan fully remote di seluruh dunia.',
    'how.s1.tag': 'Pencarian',
    'how.s1.h': 'Memindai hanya lowongan 100% remote',
    'how.s1.p':
      'Agen memantau ribuan platform global — We Work Remotely, Remote.co, Himalayas, LinkedIn, papan lowongan tertutup — dan menyaring secara ketat: hanya fully remote, tanpa ikatan kantor, dari negara mana pun.',
    'how.s2.tag': 'CV',
    'how.s2.h': 'Memperbaiki dan menyesuaikan CV',
    'how.s2.p':
      'Untuk setiap lowongan agen membuat versi terpisah CV dan surat lamaran — dengan kata kunci, penekanan, dan struktur yang tepat untuk sistem ATS.',
    'how.s3.tag': 'Lamaran',
    'how.s3.h': 'Mengirim lamaran secara mandiri',
    'how.s3.p':
      'Agen mengirim lamaran, berkorespondensi dengan perekrut, dan melacak setiap status — sementara Anda sibuk dengan urusan Anda sendiri.',
    'how.s4.tag': 'Wawancara',
    'how.s4.h': 'Persiapan wawancara',
    'how.s4.p':
      'Wawancara simulasi dengan umpan balik, pembahasan pertanyaan umum, dan strategi negosiasi tawaran — agen mendampingi Anda di setiap tahap hingga putaran final.',
    'match.meta': 'AS · 100% remote · worldwide',
    'match.badge': '87% kecocokan',
    'match.salary': '$140.000 – $180.000 / tahun',
    'match.tagsLabel': 'Kecocokan utama',
    'match.tagPm': '5+ tahun PM',
    'match.tagNo': 'Fintech — perkuat',
    'match.step1': 'Lowongan ditemukan dan diverifikasi',
    'match.step2': 'CV disesuaikan untuk ATS',
    'match.step3': 'Surat lamaran siap',
    'match.step4': 'Mengirim lamaran <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'Menunggu balasan perekrut',
    'benefits.eyebrow': 'Mengapa agen lebih unggul',
    'benefits.h2': 'Seluruh pasar kerja<br>remote global —<br><em>dalam satu agen</em>',
    'benefits.lead':
      'Agen tidak mencari «dekat rumah». Ia mencari pekerjaan terbaik di dunia — di mana pun itu berada.',
    'benefits.b1h': 'Beroperasi 24/7',
    'benefits.b1p':
      'Agen tidak tidur, tidak cuti, dan tidak terganggu. Saat Anda beristirahat, ia mencari, menyesuaikan, dan mengirim lamaran.',
    'benefits.b2h': 'Hanya fully remote — tanpa pengecualian',
    'benefits.b2p':
      'Penyaringan ketat: tanpa hybrid, tanpa «kadang dari kantor». Hanya posisi di mana Anda bekerja dari mana saja, untuk selamanya.',
    'benefits.b3h': 'Perusahaan dari 60+ negara',
    'benefits.b3p':
      'AS, Eropa, Asia, Amerika Latin — agen melihat seluruh pasar. Pekerjaan terbaik belum tentu di negara tetangga.',
    'benefits.b4h': 'CV yang lolos ATS',
    'benefits.b4p':
      'Algoritme menyaring sebagian besar kandidat sebelum perekrut manusia melihatnya. Agen tahu cara melewatinya.',
    'benefits.b5h': 'Wawancara simulasi dengan AI',
    'benefits.b5p':
      'Latihan wawancara yang realistis dengan tinjauan jawaban secara rinci. Anda masuk ke wawancara sungguhan dengan persiapan matang.',
    'benefits.b6h': 'Negosiasi tawaran',
    'benefits.b6p':
      'Agen menganalisis data pasar dan membantu membenarkan gaji yang lebih tinggi — rata-rata sekitar +18%.',
    'intg.eyebrow': 'Integrasi',
    'intg.h2': 'Agen bekerja di tempat<br>Anda <em>bekerja</em>',
    'intg.lead':
      'Hubungkan Gmail dan profil browser khusus — agen membaca surat (termasuk konfirmasi dan tautan verifikasi), mengirim lamaran di portal karier perusahaan seperti manusia, dan menjaga percakapan perekrut tetap berjalan.',
    'intg.email.h': 'Integrasi email',
    'intg.email.p':
      'Agen memakai kotak masuk untuk email konfirmasi dan tautan verifikasi — agar lamaran tidak tertahan saat situs meminta konfirmasi lewat email.',
    'intg.browser.chip': 'Browser',
    'intg.browser.h': 'Browser agen di komputer agen sendiri untuk mengirim lamaran',
    'intg.browser.p':
      'Agen membuka portal karier perusahaan di browser terkontrol dan menyelesaikan alur seperti manusia: setiap langkah formulir, unggah CV, dan kirim — termasuk konfirmasi dalam alur bila diperlukan.',
    'intg.sec.title': 'Keamanan',
    'intg.sec.li1':
      'Menggunakan OAuth 2 — Gmail terhubung melalui otorisasi OAuth 2 resmi Google; kami tidak pernah menyimpan kata sandi Anda.',
    'intg.sec.li2':
      'Akses terbatas — hanya utas perekrut dan alur lamaran; sisa kotak surat tetap pribadi',
    'intg.sec.li3':
      'Otomasi browser hanya di situs yang Anda izinkan; cabut akses kapan saja dengan satu klik',
    'test.eyebrow': 'Cerita',
    'test.h2': 'Mereka sudah bekerja<br><em>secara remote</em>',
    'test.q1':
      '«Saya hanya mengunggah CV dan menceritakan diri saya. Lima minggu kemudian — tawaran dari AS, sepenuhnya remote. Agen menemukan lowongan yang bahkan tidak saya ketahui keberadaannya.»',
    'test.n1': 'Alina Smirnova',
    'test.r1': 'Product Manager · Stripe, Berlin',
    'test.q2':
      '«Wawancara simulasi dengan agen adalah persiapan terbaik yang pernah saya coba. Di wawancara sungguhan Amazon saya merasa percaya diri.»',
    'test.n2': 'Dmitry Morozov',
    'test.r2': 'Software Engineer · Amazon, London',
    'test.q3':
      '«Saya tidak percaya AI bisa menulis CV lebih baik dari saya. Saya salah. Agen menulis ulangnya sehingga perekrut yang menghubungi lebih dulu.»',
    'test.n3': 'Maria Koval',
    'test.r3': 'UX Designer · Figma, Amsterdam',
    'cta.h2': 'Karier remote global Anda<br>dimulai di sini',
    'cta.p': 'Ceritakan tentang diri Anda dalam 10 menit — agen segera mulai mencari lowongan di seluruh dunia.',
    'cta.btn': 'Mulai gratis',
    'cta.note': 'Masa percobaan gratis · Tanpa kartu · Batalkan kapan saja',
    'footer.privacy': 'Privasi',
    'footer.terms': 'Syarat',
    'footer.contact': 'Kontak',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'Memindai basis lowongan',
      '3 posisi baru ditemukan',
      'Menganalisis kecocokan profil',
      'Menyesuaikan CV',
      'CV siap',
      'Menyusun surat lamaran',
      'Mengirim lamaran',
      'Lamaran terkirim',
      'Mencari posisi baru',
      '2 posisi ditemukan',
      'Menyesuaikan CV untuk Figma',
      'Membaca kotak masuk',
      'Mengirim lamaran ke Figma',
      'Memantau status',
      'Siklus pencarian baru',
    ]),
  };

  var UR = {
    'meta.title': 'Screenly — عالمی ریموٹ ملازمت تلاش کے لیے AI ایجنٹ',
    'lang.label': 'زبان',
    'nav.how': 'یہ کیسے کام کرتا ہے',
    'nav.benefits': 'فوائد',
    'nav.reviews': 'کہانیاں',
    'nav.cta': 'ایجنٹ چلائیں',
    'hero.pill': '100% ریموٹ · صرف عالمی کمپنیاں · ایجنٹ فعال',
    'hero.title': 'صرف مکمل ریموٹ۔<br>صرف <em>عالمی<br>کمپنیاں۔</em>',
    'hero.sub':
      'AI ایجنٹ عالمی کمپنیوں میں صرف 100% ریموٹ نوکریاں ڈھونڈتا ہے، ریزیومے ڈھالتا ہے، درخواستیں جمع کراتا ہے اور انٹرویو کی تیاری کراتا ہے — جب آپ اپنی زندگی گزار رہے ہوں۔',
    'hero.btn': 'ایجنٹ چلائیں',
    'feed.header': 'ایجنٹ لاگ',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">ابھی</span>',
    'stats.s1': 'صرف مکمل طور پر<br>ریموٹ نوکریاں',
    'stats.s2': 'ملکوں پار بھرتی<br>کرنے والی کمپنیاں',
    'stats.s3': '6–8 ہفتوں میں<br>آفر ملتی ہے',
    'ticker.label': 'دنیا بھر میں ریموٹ بھرتی کرنے والی کمپنیاں',
    'globe.title': 'دفتر نہیں۔ سرحد نہیں۔<br>کوئی سمجھوتہ نہیں۔',
    'globe.p':
      'ایجنٹ صرف ان نوکریوں پر کام کرتا ہے جہاں آجر عالمی سطح پر بھرتی کرتا ہے اور آپ کو تنخواہ دینے کو تیار ہے — چاہے آپ کہیں بھی رہیں۔',
    'globe.region.na': 'شمالی امریکہ',
    'globe.region.eu': 'یورپ',
    'globe.region.uk': 'برطانیہ',
    'globe.region.asia': 'ایشیا / پیسیفک',
    'globe.region.mena': 'افریقہ اور مشرق وسطیٰ',
    'globe.region.latam': 'لاطینی امریکہ',
    'how.eyebrow': 'ایجنٹ کیسے کام کرتا ہے',
    'how.h2': 'صرف عالمی<br><em>ریموٹ فرسٹ کمپنیاں۔</em><br>صرف حقیقی عہدے۔',
    'how.lead':
      'کوئی «شاید ریموٹ» یا «آدھا دفتر» نہیں۔ ایجنٹ صرف دنیا بھر میں مکمل ریموٹ نوکریوں کے ساتھ کام کرتا ہے۔',
    'how.s1.tag': 'تلاش',
    'how.s1.h': 'صرف 100% ریموٹ نوکریاں اسکین کرتا ہے',
    'how.s1.p':
      'ایجنٹ ہزاروں عالمی پلیٹ فارمز کی نگرانی کرتا ہے — We Work Remotely، Remote.co، Himalayas، LinkedIn، بند بورڈز — اور سخت فلٹر: صرف fully remote، دفتر کی پابندی نہیں، کسی بھی ملک سے۔',
    'how.s2.tag': 'ریزیومے',
    'how.s2.h': 'ریزیومے بہتر اور ڈھالتا ہے',
    'how.s2.p':
      'ہر نوکری کے لیے الگ ریزیومے اور کور لیٹر — ATS کے لیے درست کلیدی الفاظ، زور اور ڈھانچہ۔',
    'how.s3.tag': 'درخواستیں',
    'how.s3.h': 'خود مختار طور پر درخواستیں بھیجتا ہے',
    'how.s3.p':
      'ایجنٹ درخواستیں بھیجتا ہے، بھرتی کاروں سے خط و کتابت کرتا ہے، ہر حیثیت ٹریک کرتا ہے — جب آپ اپنے کاموں میں مصروف ہوں۔',
    'how.s4.tag': 'انٹرویو',
    'how.s4.h': 'انٹرویو کی تیاری',
    'how.s4.p':
      'موک انٹرویو، رائے، عام سوالات کا جائزہ، اور آفر مذاکرات کی حکمت عملی — ایجنٹ ہر مرحلے پر آخری راؤنڈ تک آپ کی مدد کرتا ہے۔',
    'match.meta': 'امریکہ · 100% remote · worldwide',
    'match.badge': '87% مماثلت',
    'match.salary': '$140,000 – $180,000 / سال',
    'match.tagsLabel': 'اہم مماثلتیں',
    'match.tagPm': '5+ سال PM',
    'match.tagNo': 'Fintech — مضبوط کریں',
    'match.step1': 'نوکری ملی اور تصدیق ہوئی',
    'match.step2': 'ATS کے لیے ریزیومے ڈھالا گیا',
    'match.step3': 'کور لیٹر تیار',
    'match.step4': 'درخواست بھیج رہا ہوں <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'بھرتی کار کے جواب کا انتظار',
    'benefits.eyebrow': 'ایجنٹ کیوں بہتر ہے',
    'benefits.h2': 'پوری عالمی<br>ریموٹ مارکیٹ —<br><em>ایک ایجنٹ میں</em>',
    'benefits.lead':
      'ایجنٹ «گھر کے پاس» نہیں ڈھونڈتا۔ دنیا کی بہترین نوکری ڈھونڈتا ہے — جہاں بھی ہو۔',
    'benefits.b1h': '24/7 کام',
    'benefits.b1p':
      'نہ سوتا، نہ چھٹی، نہ بے توجہ۔ جب آپ آرام کریں — وہ ڈھونڈتا، ڈھالتا، درخواستیں بھیجتا ہے۔',
    'benefits.b2h': 'صرف fully remote — کوئی استثناء نہیں',
    'benefits.b2p':
      'سخت فلٹر: کوئی ہائبرڈ نہیں، «کبھی دفتر سے» نہیں۔ صرف وہ عہدے جہاں آپ کہیں سے بھی، ہمیشہ کے لیے ریموٹ کام کریں۔',
    'benefits.b3h': '60+ ممالک کی کمپنیاں',
    'benefits.b3p':
      'امریکہ، یورپ، ایشیا، لاطینی امریکہ — ایجنٹ پورا مارکیٹ دیکھتا ہے۔ بہترین نوکری ہمسایہ ملک میں بھی نہیں ہو سکتی۔',
    'benefits.b4h': 'ATS پاس کرنے والا ریزیومے',
    'benefits.b4p':
      'الگورتھم زیادہ تر امیدواروں کو زندہ بھرتی کار تک پہنچنے سے پہلے فلٹر کر دیتے ہیں۔ ایجنٹ جانتا ہے کیسے پار کرنا ہے۔',
    'benefits.b5h': 'AI کے ساتھ موک انٹرویو',
    'benefits.b5p':
      'حقیقت پسندانہ مشق اور جوابات کا تفصیلی جائزہ۔ آپ اصل انٹرویو پر تیار جائیں۔',
    'benefits.b6h': 'آفر پر بات چیت',
    'benefits.b6p':
      'مارکیٹ ڈیٹا کا تجزیہ اور زیادہ تنخواہ کی وجوہات — اوسطاً +18%۔',
    'intg.eyebrow': 'انٹیگریشن',
    'intg.h2': 'ایجنٹ وہاں کام کرتا ہے<br>جہاں <em>آپ</em> کام کرتے ہیں',
    'intg.lead':
      'Gmail اور الگ براؤزر پروفائل جوڑیں — ایجنٹ میل پڑھتا ہے (تصدیق اور لنک سمیت)، آجر کی کیریئر سائٹ پر انسان کی طرح درخواست بھیجتا ہے۔',
    'intg.email.h': 'ای میل انٹیگریشن',
    'intg.email.p':
      'ایجنٹ تصدیقی ای میلز اور تصدیق کے لنکس کے لیے ان باکس استعمال کرتا ہے — تاکہ جب سائٹ ای میل سے تصدیق مانگے درخواست رک نہ جائے۔',
    'intg.browser.chip': 'براؤزر',
    'intg.browser.h': 'درخواستیں جمع کرانے کے لیے ایجنٹ کا براؤزر ایجنٹ کے کمپیوٹر پر',
    'intg.browser.p':
      'ایجنٹ کمپنی کے کیریئر پورٹلز کو کنٹرول شدہ براؤزر میں کھولتا ہے اور فارم کے ہر مرحلے، ریزیومے اپ لوڈ اور جمع کرانے کو انسان کی طرح مکمل کرتا ہے — ضرورت ہو تو بہاؤ میں تصدیق بھی۔',
    'intg.sec.title': 'سیکیورٹی',
    'intg.sec.li1':
      'OAuth 2 استعمال ہوتا ہے — Gmail Google کی سرکاری OAuth 2 اجازت سے جڑتا ہے؛ پاس ورڈ ہمارے سرورز پر محفوظ نہیں ہوتا',
    'intg.sec.li2':
      'محدود رسائی — صرف بھرتی کار والی سلسلے اور درخواست کا بہاؤ؛ باقی میل نجی رہتی ہے',
    'intg.sec.li3':
      'براؤزر خودکار صرف ان سائٹس پر جو آپ اجازت دیں؛ کسی بھی وقت ایک کلک میں رسائی ختم کریں',
    'test.eyebrow': 'کہانیاں',
    'test.h2': 'وہ پہلے سے<br><em>ریموٹ</em> کام کر رہے ہیں',
    'test.q1':
      '«میں نے ریزیومے اپ لوڈ کیا اور اپنے بارے میں بتایا۔ پانچ ہفتوں بعد — امریکہ سے مکمل ریموٹ آفر۔ ایجنٹ نے وہ نوکری ڈھونڈی جس کے وجود سے میں واقف ہی نہیں تھی۔»',
    'test.n1': 'آلینا سمیرنووا',
    'test.r1': 'Product Manager · Stripe، برلن',
    'test.q2':
      '«ایجنٹ کے ساتھ موک انٹرویو — اب تک کی بہترین تیاری۔ اصل Amazon انٹرویو میں میں پراعتماد محسوس کر رہا تھا۔»',
    'test.n2': 'دمیتری موروزوف',
    'test.r2': 'Software Engineer · Amazon، لندن',
    'test.q3':
      '«مجھے یقین نہیں تھا AI میرے سے بہتر ریزیومے لکھے گا۔ میں غلط تھی۔ ایجنٹ نے ایسا دوبارہ لکھا کہ بھرتی کار خود پہلے لکھنے لگے۔»',
    'test.n3': 'ماریا کووال',
    'test.r3': 'UX Designer · Figma، ایمسٹرڈیم',
    'cta.h2': 'آپ کا عالمی<br>ریموٹ کیریئر<br>یہاں شروع ہوتا ہے',
    'cta.p': '10 منٹ میں اپنے بارے میں بتائیں — ایجنٹ فوراً دنیا بھر میں تلاش شروع کرے گا۔',
    'cta.btn': 'مفت شروع کریں',
    'cta.note': 'مفت آزمائشی مدت · کارڈ نہیں · کسی بھی وقت منسوخ',
    'footer.privacy': 'رازداری',
    'footer.terms': 'شرائط',
    'footer.contact': 'رابطہ',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'نوکری کے ڈیٹابیس اسکین کر رہا ہوں',
      '3 نئی پوزیشنز ملیں',
      'پروفائل میچ کا تجزیہ',
      'ریزیومے ڈھال رہا ہوں',
      'ریزیومے تیار',
      'کور لیٹر تیار',
      'درخواست بھیج رہا ہوں',
      'درخواست بھیج دی',
      'نئی پوزیشنز تلاش',
      '2 پوزیشنز ملیں',
      'Figma کے لیے ریزیومے ڈھال رہا ہوں',
      'ان باکس پڑھ رہا ہوں',
      'Figma کو درخواست بھیج رہا ہوں',
      'اسٹیٹس مانیٹر',
      'نیا تلاش چکر',
    ]),
  };

  var HI = {
    'meta.title': 'Screenly — वैश्विक रिमोट नौकरी खोजने के लिए AI एजेंट',
    'lang.label': 'भाषा',
    'nav.how': 'यह कैसे काम करता है',
    'nav.benefits': 'फ़ायदे',
    'nav.reviews': 'कहानियाँ',
    'nav.cta': 'एजेंट चलाएँ',
    'hero.pill': '100% रिमोट · केवल वैश्विक कंपनियाँ · एजेंट सक्रिय',
    'hero.title': 'केवल पूर्ण रिमोट।<br>केवल <em>विश्वस्तरीय<br>कंपनियाँ।</em>',
    'hero.sub':
      'AI एजेंट वैश्विक कंपनियों में केवल 100% रिमोट नौकरियाँ ढूँढता है, रिज़्यूमे अनुकूलित करता है, आवेदन जमा कराता है और इंटरव्यू की तैयारी कराता है — जब आप अपना जीवन जी रहे हों।',
    'hero.btn': 'एजेंट चलाएँ',
    'feed.header': 'एजेंट लॉग',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">अभी</span>',
    'stats.s1': 'केवल पूरी तरह<br>रिमोट नौकरियाँ',
    'stats.s2': 'सीमाओं पार भर्ती<br>करने वाली कंपनियाँ',
    'stats.s3': '6–8 सप्ताह में<br>ऑफ़र मिलता है',
    'ticker.label': 'दुनिया भर में रिमोट भर्ती करने वाली कंपनियाँ',
    'globe.title': 'कार्यालय नहीं। सीमा नहीं।<br>कोई समझौता नहीं।',
    'globe.p':
      'एजेंट केवल उन नौकरियों पर काम करता है जहाँ नियोक्ता वैश्विक स्तर पर भर्ती करता है और आपको वेतन देने को तैयार है — चाहे आप कहीं भी रहें।',
    'globe.region.na': 'उत्तरी अमेरिका',
    'globe.region.eu': 'यूरोप',
    'globe.region.uk': 'यूनाइटेड किंगडम',
    'globe.region.asia': 'एशिया / प्रशांत',
    'globe.region.mena': 'अफ्रीका और मध्य पूर्व',
    'globe.region.latam': 'लैटिन अमेरिका',
    'how.eyebrow': 'एजेंट कैसे काम करता है',
    'how.h2': 'केवल वैश्विक<br><em>रिमोट-फ़र्स्ट कंपनियाँ।</em><br>केवल वास्तविक पद।',
    'how.lead':
      'कोई «शायद रिमोट» या «आंशिक कार्यालय» नहीं। एजेंट केवल पूरी दुनिया में पूर्ण रिमोट नौकरियों के साथ काम करता है।',
    'how.s1.tag': 'खोज',
    'how.s1.h': 'केवल 100% रिमोट नौकरियाँ स्कैन करता है',
    'how.s1.p':
      'एजेंट हज़ारों वैश्विक प्लेटफ़ॉर्म पर नज़र रखता है — We Work Remotely, Remote.co, Himalayas, LinkedIn, निजी बोर्ड — और सख्त फ़िल्टर: केवल fully remote, कार्यालय बंधन नहीं, किसी भी देश से।',
    'how.s2.tag': 'रिज़्यूमे',
    'how.s2.h': 'रिज़्यूमे सुधारता और अनुकूलित करता है',
    'how.s2.p':
      'प्रत्येक नौकरी के लिए अलग रिज़्यूमे और कवर लेटर — ATS के लिए सही कीवर्ड, ज़ोर और संरचना।',
    'how.s3.tag': 'आवेदन',
    'how.s3.h': 'स्वायत्त रूप से आवेदन भेजता है',
    'how.s3.p':
      'एजेंट आवेदन भेजता है, भर्तीकर्ताओं से पत्राचार करता है, हर स्थिति ट्रैक करता है — जब आप अपने काम में व्यस्त हों।',
    'how.s4.tag': 'इंटरव्यू',
    'how.s4.h': 'इंटरव्यू की तैयारी',
    'how.s4.p':
      'मॉक इंटरव्यू व फीडबैक, सामान्य प्रश्नों का विश्लेषण, और ऑफ़र बातचीत की रणनीति — एजेंट अंतिम राउंड तक हर चरण पर आपकी मदद करता है।',
    'match.meta': 'यूएस · 100% remote · worldwide',
    'match.badge': '87% मिलान',
    'match.salary': '$140,000 – $180,000 / वर्ष',
    'match.tagsLabel': 'मुख्य मिलान',
    'match.tagPm': '5+ वर्ष PM',
    'match.tagNo': 'Fintech — मज़बूत करें',
    'match.step1': 'नौकरी मिली और सत्यापित',
    'match.step2': 'ATS के लिए रिज़्यूमे अनुकूलित',
    'match.step3': 'कवर लेटर तैयार',
    'match.step4': 'आवेदन भेज रहा हूँ <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'भर्तीकर्ता के उत्तर की प्रतीक्षा',
    'benefits.eyebrow': 'एजेंट क्यों बेहतर है',
    'benefits.h2': 'पूरा वैश्विक<br>रिमोट बाज़ार —<br><em>एक एजेंट में</em>',
    'benefits.lead':
      'एजेंट «घर के पास» नहीं ढूँढता। दुनिया की सर्वोत्तम नौकरी ढूँढता है — जहाँ कहीं भी हो।',
    'benefits.b1h': '24/7 चालू',
    'benefits.b1p':
      'न सोता, न छुट्टी, न भटकता। जब आप आराम करें — वह खोजता, अनुकूलित करता है, आवेदन भेजता है।',
    'benefits.b2h': 'केवल fully remote — कोई अपवाद नहीं',
    'benefits.b2p':
      'सख्त फ़िल्टर: कोई हाइब्रिड नहीं, «कभी-कभी कार्यालय» नहीं। केवल वे पद जहाँ आप कहीं से भी, स्थायी रूप से रिमोट काम करें।',
    'benefits.b3h': '60+ देशों की कंपनियाँ',
    'benefits.b3p':
      'यूएस, यूरोप, एशिया, लैटिन अमेरिका — एजेंट पूरा बाज़ार देखता है। सर्वोत्तम नौकरी पड़ोसी देश में भी नहीं हो सकती।',
    'benefits.b4h': 'ATS पास करने वाला रिज़्यूमे',
    'benefits.b4p':
      'अल्गोरिद्म अधिकांश उम्मीदवारों को मानव भर्तीकर्ता तक पहुँचने से पहले फ़िल्टर कर देते हैं। एजेंट जानता है कैसे पार करें।',
    'benefits.b5h': 'AI के साथ मॉक इंटरव्यू',
    'benefits.b5p':
      'यथार्थ अभ्यास और उत्तरों की विस्तृत समीक्षा। आप असली इंटरव्यू के लिए तैयार।',
    'benefits.b6h': 'ऑफ़र पर बातचीत',
    'benefits.b6p':
      'बाज़ार डेटा का विश्लेषण और उच्च वेतन का औचित्य — औसतन लगभग +18%।',
    'intg.eyebrow': 'एकीकरण',
    'intg.h2': 'एजेंट वहाँ काम करता है<br>जहाँ <em>आप</em> काम करते हैं',
    'intg.lead':
      'Gmail और अलग ब्राउज़र प्रोफ़ाइल जोड़ें — एजेंट मेल पढ़ता है (पुष्टिकरण और लिंक सहित), नियोक्ता की करियर साइट पर इंसान की तरह आवेदन भेजता है।',
    'intg.email.h': 'ईमेल एकीकरण',
    'intg.email.p':
      'एजेंट पुष्टिकरण मेलों और सत्यापन लिंक के लिए इनबॉक्स का उपयोग करता है — ताकि जब साइट ईमेल से पुष्टि माँगे तो आवेदन न रुके।',
    'intg.browser.chip': 'ब्राउज़र',
    'intg.browser.h': 'आवेदन जमा करने के लिए एजेंट का ब्राउज़र एजेंट के कंप्यूटर पर',
    'intg.browser.p':
      'एजेंट कंपनी के करियर पोर्टल को नियंत्रित ब्राउज़र में खोलता है और फ़ॉर्म के हर चरण, रिज़्यूमे अपलोड और सबमिट को इंसान की तरह पूरा करता है — ज़रूरत हो तो बहाव में पुष्टि भी।',
    'intg.sec.title': 'सुरक्षा',
    'intg.sec.li1':
      'OAuth 2 का उपयोग होता है — Gmail Google के आधिकारिक OAuth 2 प्राधिकरण से जुड़ता है; हम आपका पासवर्ड कभी संग्रहित नहीं करते',
    'intg.sec.li2':
      'सीमित पहुँच — केवल भर्तीकर्ता थ्रेड और आवेदन प्रवाह; बाकी मेल निजी रहता है',
    'intg.sec.li3':
      'ब्राउज़र स्वचालन केवल आपके अनुमोदित साइटों पर; किसी भी समय एक क्लिक में पहुँच रद्द',
    'test.eyebrow': 'कहानियाँ',
    'test.h2': 'वे पहले से<br><em>रिमोट</em> काम कर रहे हैं',
    'test.q1':
      '«मैंने रिज़्यूमे अपलोड किया और अपने बारे में बताया। पाँच सप्ताह बाद — यूएस से पूर्ण रिमोट ऑफ़र। एजेंट ने वह नौकरी ढूँढी जिसके अस्तित्व से मैं अनजान थी।»',
    'test.n1': 'अलीना स्मिर्नोवा',
    'test.r1': 'Product Manager · Stripe, बर्लिन',
    'test.q2':
      '«एजेंट के साथ मॉक इंटरव्यू — अब तक की सबसे अच्छी तैयारी। असली Amazon इंटरव्यू में मैं आत्मविश्वास से भरा था।»',
    'test.n2': 'दिमित्री मोरोज़ोव',
    'test.r2': 'Software Engineer · Amazon, लंदन',
    'test.q3':
      '«विश्वास नहीं था कि AI मुझसे बेहतर रिज़्यूमे लिखेगा। मैं गलत थी। एजेंट ने ऐसा फिर से लिखा कि भर्तीकर्ता पहले लिखने लगे।»',
    'test.n3': 'मारिया कोवाल',
    'test.r3': 'UX Designer · Figma, एम्स्टर्डम',
    'cta.h2': 'आपका वैश्विक<br>रिमोट करियर<br>यहाँ शुरू होता है',
    'cta.p': '10 मिनट में अपने बारे में बताएँ — एजेंट तुरंत दुनिया भर में खोज शुरू करेगा।',
    'cta.btn': 'मुफ़्त शुरू करें',
    'cta.note': 'मुफ़्त परीक्षण अवधि · कार्ड नहीं · कभी भी रद्द',
    'footer.privacy': 'गोपनीयता',
    'footer.terms': 'शर्तें',
    'footer.contact': 'संपर्क',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'नौकरी डेटाबेस स्कैन कर रहा हूँ',
      '3 नए पद मिले',
      'प्रोफ़ाइल मिलान विश्लेषण',
      'रिज़्यूमे अनुकूलित कर रहा हूँ',
      'रिज़्यूमे तैयार',
      'कवर लेटर तैयार',
      'आवेदन भेज रहा हूँ',
      'आवेदन भेजा गया',
      'नए पद खोज रहा हूँ',
      '2 पद मिले',
      'Figma के लिए रिज़्यूमे अनुकूलित कर रहा हूँ',
      'इनबॉक्स पढ़ रहा हूँ',
      'Figma को आवेदन भेज रहा हूँ',
      'स्थिति निगरानी',
      'नया खोज चक्र',
    ]),
  };

  var FA = {
    'meta.title': 'Screenly — عامل هوش مصنوعی برای یافتن کار ریموت جهانی',
    'lang.label': 'زبان',
    'nav.how': 'چگونه کار می‌کند',
    'nav.benefits': 'مزایا',
    'nav.reviews': 'داستان‌ها',
    'nav.cta': 'اجرای عامل',
    'hero.pill': '۱۰۰٪ ریموت · فقط شرکت‌های جهانی · عامل فعال',
    'hero.title': 'فقط دورکاری کامل.<br>فقط <em>شرکت‌های<br>جهانی.</em>',
    'hero.sub':
      'عامل هوش مصنوعی فقط موقعیت‌های ۱۰۰٪ ریموت در شرکت‌های جهانی پیدا می‌کند، رزومه را تنظیم می‌کند، درخواست‌ها را ارسال می‌کند و برای مصاحبه آماده می‌کند — در حالی که شما زندگی می‌کنید.',
    'hero.btn': 'اجرای عامل',
    'feed.header': 'گزارش عامل',
    'feed.nowHtml': '<span style="color:var(--accent);font-weight:500">اکنون</span>',
    'stats.s1': 'فقط موقعیت‌های<br>کاملاً ریموت',
    'stats.s2': 'شرکت‌هایی که در سراسر جهان<br>استخدام می‌کنند',
    'stats.s3': 'پیشنهاد شغلی<br>در ۶–۸ هفته',
    'ticker.label': 'شرکت‌هایی که در سراسر جهان به‌صورت ریموت استخدام می‌کنند',
    'globe.title': 'بدون دفتر. بدون مرز.<br>بدون مصالحه.',
    'globe.p':
      'عامل فقط با موقعیت‌هایی کار می‌کند که کارفرما به‌صورت جهانی استخدام کند و آماده پرداخت به شماست — هر کجا که زندگی کنید.',
    'globe.region.na': 'آمریکای شمالی',
    'globe.region.eu': 'اروپا',
    'globe.region.uk': 'بریتانیا',
    'globe.region.asia': 'آسیا / اقیانوسیه',
    'globe.region.mena': 'آفریقا و خاورمیانه',
    'globe.region.latam': 'آمریکای لاتین',
    'how.eyebrow': 'چگونه عامل کار می‌کند',
    'how.h2': 'فقط شرکت‌های<br><em>جهانی با اولویت ریموت.</em><br>فقط موقعیت‌های واقعی.',
    'how.lead':
      'بدون «شاید ریموت» یا «نیمه‌وقت دفتر». عامل فقط با موقعیت‌های fully remote در سراسر جهان کار می‌کند.',
    'how.s1.tag': 'جستجو',
    'how.s1.h': 'فقط موقعیت‌های ۱۰۰٪ ریموت را اسکن می‌کند',
    'how.s1.p':
      'عامل هزاران پلتفرم جهانی را پایش می‌کند — We Work Remotely، Remote.co، Himalayas، LinkedIn، تابلوهای بسته — و سختگیرانه فیلتر می‌کند: فقط fully remote، بدون وابستگی به دفتر، از هر کشور.',
    'how.s2.tag': 'رزومه',
    'how.s2.h': 'رزومه را بهبود و تنظیم می‌کند',
    'how.s2.p':
      'برای هر موقعیت نسخه جداگانه رزومه و نامه همراه — با کلمات کلیدی، تأکیدها و ساختار مناسب سیستم‌های ATS.',
    'how.s3.tag': 'درخواست‌ها',
    'how.s3.h': 'درخواست‌ها را خودکار ارسال می‌کند',
    'how.s3.p':
      'عامل درخواست می‌فرستد، با استخدام‌کنندگان مکاتبه می‌کند، وضعیت را دنبال می‌کند — وقتی شما سرگرم کارهای خودتان هستید.',
    'how.s4.tag': 'مصاحبه',
    'how.s4.h': 'آماده‌سازی برای مصاحبه',
    'how.s4.p':
      'مصاحبه آزمایشی با بازخورد، بررسی سوالات رایج، و استراتژی مذاکره پیشنهاد — عامل در هر مرحله تا دور نهایی همراه شماست.',
    'match.meta': 'آمریکا · ۱۰۰٪ remote · worldwide',
    'match.badge': '۸۷٪ تطابق',
    'match.salary': '$140,000 – $180,000 / سال',
    'match.tagsLabel': 'تطابق‌های کلیدی',
    'match.tagPm': '۵+ سال PM',
    'match.tagNo': 'Fintech — تقویت',
    'match.step1': 'موقعیت یافت و تأیید شد',
    'match.step2': 'رزومه برای ATS تنظیم شد',
    'match.step3': 'نامه همراه آماده',
    'match.step4': 'در حال ارسال درخواست <span class="typing-dots"><span></span><span></span><span></span></span>',
    'match.step5': 'انتظار پاسخ استخدام‌کننده',
    'benefits.eyebrow': 'چرا عامل بهتر است',
    'benefits.h2': 'کل بازار جهانی<br>کار ریموت —<br><em>در یک عامل</em>',
    'benefits.lead':
      'عامل «کنار خانه» جستجو نمی‌کند. بهترین کار جهان را می‌یابد — هر جا که باشد.',
    'benefits.b1h': '۲۴/۷ فعال',
    'benefits.b1p':
      'نمی‌خوابد، مرخصی ندارد، حواسش پرت نمی‌شود. وقتی شما استراحت می‌کنید — جستجو، تنظیم، ارسال درخواست.',
    'benefits.b2h': 'فقط fully remote — بدون استثنا',
    'benefits.b2p':
      'فیلتر سخت: بدون ترکیبی، بدون «گاهی از دفتر». فقط موقعیت‌هایی که برای همیشه از هر جا ریموت کار کنید.',
    'benefits.b3h': 'شرکت‌ها از ۶۰+ کشور',
    'benefits.b3p':
      'آمریکا، اروپا، آسیا، آمریکای لاتین — عامل کل بازار را می‌بیند. بهترین کار لزوماً در کشور همسایه نیست.',
    'benefits.b4h': 'رزومه‌ای که ATS را رد می‌کند',
    'benefits.b4p':
      'الگوریتم‌ها بیشتر نامزدها را پیش از دیدن استخدام‌کننده واقعی فیلتر می‌کنند. عامل می‌داند چگونه عبور کند.',
    'benefits.b5h': 'مصاحبه آزمایشی با هوش مصنوعی',
    'benefits.b5p':
      'تمرین واقع‌گرایانه و تحلیل دقیق پاسخ‌ها. برای مصاحبه واقعی آماده می‌روید.',
    'benefits.b6h': 'مذاکره پیشنهاد',
    'benefits.b6p':
      'تحلیل داده بازار و کمک به توجیه حقوق بالاتر — به‌طور میانگین حدود +۱۸٪.',
    'intg.eyebrow': 'یکپارچه‌سازی',
    'intg.h2': 'عامل جایی کار می‌کند<br>که <em>شما</em> کار می‌کنید',
    'intg.lead':
      'Gmail و پروفایل مرورگر جداگانه وصل کنید — عامل ایمیل می‌خواند (شامل تأییدها و لینک‌ها)، روی سایت شغلی کارفرما مثل انسان درخواست می‌فرستد.',
    'intg.email.h': 'یکپارچه‌سازی ایمیل',
    'intg.email.p':
      'عامل صندوق ورودی را برای ایمیل‌های تأیید و لینک‌های تأیید استفاده می‌کند — تا وقتی سایت تأیید از ایمیل می‌خواهد، درخواست متوقف نشود.',
    'intg.browser.chip': 'مرورگر',
    'intg.browser.h': 'مرورگر عامل روی رایانهٔ عامل برای ارسال درخواست‌ها',
    'intg.browser.p':
      'عامل پورتال‌های شغلی شرکت را در مرورگر کنترل‌شده باز می‌کند و مراحل فرم، بارگذاری رزومه و ارسال را مثل انسان انجام می‌دهد — در صورت نیاز تأییدهای داخل جریان را هم.',
    'intg.sec.title': 'امنیت',
    'intg.sec.li1':
      'از OAuth 2 استفاده می‌شود — Gmail از طریق مجوز رسمی OAuth 2 گوگل متصل می‌شود؛ رمز عبور ذخیره نمی‌شود',
    'intg.sec.li2':
      'دسترسی محدود — فقط رشته‌های استخدام‌کننده و جریان درخواست؛ بقیهٔ ایمیل خصوصی می‌ماند',
    'intg.sec.li3':
      'خودکارسازی مرورگر فقط در سایت‌هایی که شما مجوز می‌دهید؛ لغو دسترسی با یک کلیک در هر زمان',
    'test.eyebrow': 'داستان‌ها',
    'test.h2': 'آن‌ها از قبل<br><em>ریموت</em> کار می‌کنند',
    'test.q1':
      '«رزومه را آپلود کردم و درباره خودم گفتم. پنج هفته بعد — پیشنهاد از آمریکا، کاملاً ریموت. عامل موقعیتی را پیدا کرد که حتی نمی‌دانستم وجود دارد.»',
    'test.n1': 'آلینا اسمیرنووا',
    'test.r1': 'Product Manager · Stripe، برلین',
    'test.q2':
      '«مصاحبه آزمایشی با عامل — بهترین آمادگی‌ای که امتحان کرده‌ام. در مصاحبه واقعی Amazon مطمئن بودم.»',
    'test.n2': 'دیمیتری موروزوف',
    'test.r2': 'Software Engineer · Amazon، لندن',
    'test.q3':
      '«باور نداشتم هوش مصنوعی بهتر از من رزومه بنویسد. اشتباه کردم. عامل آن‌قدر بازنویسی کرد که استخدام‌کنندگان خودشان اول نوشتند.»',
    'test.n3': 'ماریا کووال',
    'test.r3': 'UX Designer · Figma، آمستردام',
    'cta.h2': 'مسیر شغلی ریموت جهانی شما<br>اینجا شروع می‌شود',
    'cta.p': 'در ۱۰ دقیقه درباره خود بگویید — عامل فوراً جستجو در سراسر جهان را آغاز می‌کند.',
    'cta.btn': 'شروع رایگان',
    'cta.note': 'دوره آزمایشی رایگان · بدون کارت · لغو در هر زمان',
    'footer.privacy': 'حریم خصوصی',
    'footer.terms': 'شرایط',
    'footer.contact': 'تماس',
    'footer.copy': '© {{year}} Screenly',
    feedEvents: feedFromLabels([
      'اسکن پایگاه‌های موقعیت',
      '۳ موقعیت جدید یافت شد',
      'تحلیل تطابق پروفایل',
      'تنظیم رزومه',
      'رزومه آماده',
      'تهیه نامه همراه',
      'ارسال درخواست',
      'درخواست ارسال شد',
      'جستجوی موقعیت‌های جدید',
      '۲ موقعیت یافت شد',
      'تنظیم رزومه برای Figma',
      'خواندن صندوق ورودی',
      'ارسال درخواست به Figma',
      'پایش وضعیت',
      'چرخه جستجوی جدید',
    ]),
  };

  Object.assign(window.SCREENLY_I18N, { en: EN, kk: KK, uz: UZ, id: ID, ur: UR, hi: HI, fa: FA });
})();
