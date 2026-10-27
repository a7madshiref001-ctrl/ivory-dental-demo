/* Ivory Dental — shared data, icons, live engine and app shell */
(function () {
  'use strict';

  /* ---------- icons ---------- */
  const TOOTH = 'M7 3c-2.5 0-4 2-4 4.6 0 2.2.8 3.6 1.4 5.4.6 1.9.8 4.2 1.4 6.3.4 1.3 1 2.2 1.9 2.2 1.1 0 1.5-1.2 1.8-2.6.3-1.6.6-3.6 2.5-3.6s2.2 2 2.5 3.6c.3 1.4.7 2.6 1.8 2.6.9 0 1.5-.9 1.9-2.2.6-2.1.8-4.4 1.4-6.3.6-1.8 1.4-3.2 1.4-5.4C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z';
  const T = `<path d="${TOOTH}"/>`;

  const ICONS = {
    tooth: T,
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
    chev: '<path d="M14.5 6l-6 6 6 6"/>',
    back: '<path d="M9.5 6l6 6-6 6"/>',
    arrow: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    out: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
    phone: '<path d="M5.2 4h3.3l1.6 4-2.1 1.4a11 11 0 0 0 6.6 6.6l1.4-2.1 4 1.6v3.3a1.6 1.6 0 0 1-1.7 1.6A16.5 16.5 0 0 1 3.6 5.7 1.6 1.6 0 0 1 5.2 4z"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    star: '<path d="M12 3.8l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z"/>',
    sparkle: '<path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7z"/>',
    shield: '<path d="M12 3l7 3v5.5c0 4.4-3 8-7 9.5-4-1.5-7-5.1-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>',
    user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20c1.3-3.6 4.1-5.5 7.5-5.5s6.2 1.9 7.5 5.5"/>',
    users: '<circle cx="9" cy="9" r="3.3"/><path d="M3 19c1-3 3.3-4.6 6-4.6s5 1.6 6 4.6"/><path d="M15.5 6.2a3.2 3.2 0 0 1 0 6M17.5 14.6c1.8.6 3 2 3.5 4.4"/>',
    door: '<path d="M6 20V4.5h9.5V20M4 20h16"/><path d="M12.5 12.5v.1"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>',
    chat: '<path d="M4 12a8 8 0 1 1 3.4 6.5L4 19.5l1-3.3A8 8 0 0 1 4 12z"/>',
    wallet: '<rect x="3.5" y="6" width="17" height="13" rx="3"/><path d="M3.5 10h17M15.5 14.5h2"/>',
    gift: '<rect x="4" y="9.5" width="16" height="10.5" rx="2"/><path d="M3 9.5h18M12 9.5V20M12 9.5C10.5 5.5 6.5 5 6.5 7.3S10 9.5 12 9.5zm0 0c1.5-4 5.5-4.5 5.5-2.2S14 9.5 12 9.5z"/>',
    file: '<path d="M7 3.5h6.5L18 8v12.5H7z"/><path d="M13 3.5V8h5"/>',
    home: '<path d="M4 10.5L12 4l8 6.5V20h-5v-5.5H9V20H4z"/>',
    heart: '<path d="M12 19.5s-7.5-4.4-7.5-9.7A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8c0 5.3-7.5 9.7-7.5 9.7z"/>',
    brush: '<path d="M3.5 20.5l8.5-8.5"/><path d="M11 13l6.6-6.6a2 2 0 0 1 2.9 2.8L13.9 15.8z"/><path d="M14.6 9.4l1 1M16.6 7.4l1 1M15.6 12.4l1 1M17.6 10.4l1 1"/>',
    snow: '<path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.5 4.5L12 6l2.5-1.5M9.5 19.5L12 18l2.5 1.5"/>',
    noeat: '<path d="M8 3v8M5.5 3v4.5a2.5 2.5 0 0 0 5 0V3M8 11v10M16.5 21V3c-2 1.5-3 4-3 7h3"/><path d="M3.5 3.5l17 17"/>',
    wave: '<path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>',
    play: '<path d="M8 5.5v13l10-6.5z"/>',
    pause: '<path d="M9 5.5v13M15 5.5v13"/>',
    redo: '<path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v4.5h-4.5"/>',
    send: '<path d="M20.5 3.5l-17 7 7 2.5 2.5 7z"/><path d="M10.5 13l4-4"/>',
    grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/>',
    chart: '<path d="M4 20V11M10 20V5M16 20v-6M2.5 20h19"/>',
    tv: '<rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M8.5 20h7M12 16.5V20"/>',
    desk: '<rect x="5" y="4.5" width="14" height="16" rx="2"/><path d="M9 4.5V3h6v1.5M9 10h6M9 14h4"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.6 3.5 5.4 3.5 8.5s-1.1 5.9-3.5 8.5c-2.4-2.6-3.5-5.4-3.5-8.5s1.1-5.9 3.5-8.5z"/>',
    share: '<circle cx="6" cy="12" r="2.5"/><circle cx="17.5" cy="6" r="2.5"/><circle cx="17.5" cy="18" r="2.5"/><path d="M8.2 10.8l7-3.6M8.2 13.2l7 3.6"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>',
    swap: '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
    verified: '<path d="M12 2.8l2.3 1.7 2.8-.2.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.2l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6.9-2.7-.9-2.7L6 7l.9-2.7 2.8.2z"/><path d="M8.8 12.2l2.2 2.2 4.2-4.4"/>',
    's-check': T + '<circle cx="12" cy="8.6" r="2.4"/><path d="M13.8 10.4l1.7 1.7"/>',
    's-clean': T + '<path d="M12 5.6c.3 1.6 1 2.3 2.6 2.6-1.6.3-2.3 1-2.6 2.6-.3-1.6-1-2.3-2.6-2.6 1.6-.3 2.3-1 2.6-2.6z"/>',
    's-fill': T + '<path d="M9.4 8.2c1.3-1.5 3.9-1.5 5.2 0-.4 1.7-1.4 2.6-2.6 2.6s-2.2-.9-2.6-2.6z"/>',
    's-root': T + '<path d="M7.8 12.2l.5 6.4M16.2 12.2l-.5 6.4"/>',
    's-white': T + '<path d="M6.6 8.4c.2-1.7 1.1-2.7 2.5-3M15.2 7.2v2.4M14 8.4h2.4"/>',
    's-brace': T + '<path d="M3.6 9.4h16.8"/><rect x="10" y="7.9" width="4" height="3" rx=".8"/>',
    's-implant': '<path d="M6 3.5h12c0 3.6-2.2 6-6 6s-6-2.4-6-6z"/><path d="M9.3 12h5.4M9.8 14.6h4.4M10.3 17.2h3.4M11 19.8h2"/>',
    's-kids': T + '<path d="M9.6 10.2c1.1 1 3.7 1 4.8 0M9.8 7.3v.3M14.2 7.3v.3"/>',
  };

  function icon(name, cls) {
    return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
  }

  /* clinic logo mark */
  function mark(cls) {
    const inv = (cls || '').includes('inv');
    const bg = inv ? '#fff' : '#0E6E63';
    const fg = inv ? '#0E6E63' : '#fff';
    return `<svg class="logo-mark ${cls || ''}" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="14" style="fill:${bg}"/><path transform="translate(7.2 6.85) scale(1.4)" style="fill:${fg}" d="${TOOTH}"/><path d="M15.8 18.5c.2-2.5 1.7-4.2 4-4.6" style="fill:none;stroke:${bg};stroke-width:1.9;stroke-linecap:round"/></svg>`;
  }

  /* third-party marks (simple-icons paths) */
  const BRANDS = {
    whatsapp: ['#25D366', 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'],
    google: ['#4285F4', 'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'],
    facebook: ['#0866FF', 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z'],
  };
  function brand(name, cls) {
    const c = `brand ${cls || ''}`;
    if (BRANDS[name]) return `<svg class="${c}" viewBox="0 0 24 24" aria-label="${name}"><path fill="${BRANDS[name][0]}" d="${BRANDS[name][1]}"/></svg>`;
    if (name === 'vezeeta') return `<svg class="${c}" viewBox="0 0 24 24" aria-label="Vezeeta"><circle cx="12" cy="12" r="12" fill="#1C73E8"/><path d="M7.4 8l4.6 8.4L16.6 8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    if (name === 'web') return mark(c);
    if (name === 'star') return `<svg class="${c}" viewBox="0 0 24 24"><path fill="#C8963A" d="M12 3.8l2.5 5.1 5.6.8-4 4 .9 5.6-5-2.7-5 2.7.9-5.6-4-4 5.6-.8z"/></svg>`;
    const ic = { pay: 'wallet', referral: 'users', walkin: 'door', arrive: 'user', remind: 'bell' }[name] || 'sparkle';
    return `<svg class="ico ${c}" viewBox="0 0 24 24" style="color:#0E6E63">${ICONS[ic]}</svg>`;
  }

  function hydrate(root) {
    (root || document).querySelectorAll('i[data-i]').forEach((el) => {
      el.outerHTML = icon(el.dataset.i, el.className);
    });
    (root || document).querySelectorAll('[data-mark]').forEach((el) => {
      el.outerHTML = mark((el.dataset.mark || '') + ' ' + el.className);
    });
    (root || document).querySelectorAll('i[data-brand]').forEach((el) => {
      el.outerHTML = brand(el.dataset.brand, el.className);
    });
  }

  /* ---------- time ---------- */
  const pad = (n) => String(n).padStart(2, '0');
  const AR_DAY = new Intl.DateTimeFormat('ar-EG-u-nu-latn', { weekday: 'long' });
  const AR_DATE = new Intl.DateTimeFormat('ar-EG-u-nu-latn', { day: 'numeric', month: 'long' });
  const EN_DAY = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  const dayKey = () => { const d = new Date(); return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; };

  /* the clinic works 12pm–10pm; outside that the demo shows a typical evening */
  function clinicNow() {
    const d = new Date();
    const h = d.getHours() + d.getMinutes() / 60;
    if (h >= 13 && h < 21) return d;
    const v = new Date(d);
    v.setHours(19, 10, 0, 0);
    return v;
  }
  const ampm = (d) => `${d.getHours() % 12 || 12}:${pad(d.getMinutes())}${d.getHours() < 12 ? 'ص' : 'م'}`;
  function dayOffset(n) { const d = new Date(); d.setHours(0, 0, 0, 0); d.setDate(d.getDate() + n); return d; }
  function dayLabel(d) {
    const a = new Date(d); a.setHours(0, 0, 0, 0);
    const b = new Date(); b.setHours(0, 0, 0, 0);
    const diff = Math.round((a - b) / 864e5);
    if (diff === 0) return 'النهارده';
    if (diff === 1) return 'بكرة';
    if (diff === -1) return 'امبارح';
    return AR_DAY.format(d);
  }
  const dateAr = (d) => AR_DATE.format(d);
  const enDate = (d) => EN_DAY.format(d || new Date()).replace(',', '').replace(' ', ' · ');
  function rel(ts) {
    const s = Math.round((Date.now() - ts) / 1000);
    if (s < 45) return 'دلوقتي';
    const m = Math.round(s / 60);
    if (m < 2) return 'من دقيقة';
    if (m === 2) return 'من دقيقتين';
    if (m < 11) return `من ${m} دقايق`;
    if (m < 60) return `من ${m} دقيقة`;
    const h = Math.round(m / 60);
    if (h < 2) return 'من ساعة';
    if (h === 2) return 'من ساعتين';
    return h < 11 ? `من ${h} ساعات` : `من ${h} ساعة`;
  }
  function mins(ts) { return Math.max(1, Math.round((Date.now() - ts) / 60000)); }

  /* ---------- storage (safe) ---------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { /* private mode */ } },
  };
  function onStore(k, cb) { window.addEventListener('storage', (e) => { if (e.key === k || e.key === null) cb(); }); }

  /* ---------- clinic data (swap per client) ---------- */
  const CLINIC = {
    name: 'Ivory Dental',
    ar: 'آيفوري لطب الأسنان',
    doctor: 'د. يوسف حمدي',
    doctorEn: 'Dr. Youssef Hamdy',
    area: 'الحي الأول، بني سويف',
    services: [
      { id: 'check', ar: 'كشف', en: 'Checkup', from: 250, ico: 's-check' },
      { id: 'clean', ar: 'تنضيف', en: 'Cleaning', from: 400, ico: 's-clean' },
      { id: 'fill', ar: 'حشو', en: 'Filling', from: 600, ico: 's-fill' },
      { id: 'root', ar: 'علاج عصب', en: 'Root canal', from: 1800, ico: 's-root' },
      { id: 'white', ar: 'تبييض', en: 'Whitening', from: 2500, ico: 's-white' },
      { id: 'brace', ar: 'تقويم', en: 'Braces', from: 15000, ico: 's-brace' },
      { id: 'implant', ar: 'زراعة', en: 'Implant', from: 12000, ico: 's-implant' },
      { id: 'kids', ar: 'أسنان أطفال', en: 'Kids', from: 200, ico: 's-kids' },
    ],
  };

  const STAFF = {
    noha: { name: 'نهى سامي', role: 'Reception', av: 'assets/img/av-noha.jpg' },
    doctor: { name: 'د. يوسف حمدي', role: 'Owner · Dentist', av: 'assets/img/av-doctor.jpg' },
  };

  /* today's list: times are built around "now" so the demo is always live */
  const DESK_TPL = [
    { off: -150, name: 'محمد علي', svc: 'كشف', st: 'done', av: 9, src: 'facebook' },
    { off: -120, name: 'هالة سمير', svc: 'تنضيف', st: 'done', av: 6, src: 'referral' },
    { off: -90, name: 'عمر خالد', svc: 'حشو', st: 'done', av: 7, src: 'whatsapp' },
    { off: -60, name: 'منى عادل', svc: 'علاج عصب', st: 'chair', av: 5, src: 'web' },
    { off: -30, name: 'كريم فتحي', svc: 'كشف', st: 'waiting', av: 4, src: 'google' },
    { off: 0, name: 'هبة ناصر', svc: 'تبييض', st: 'waiting', av: 8, src: 'facebook' },
    { off: 30, name: 'سارة محمود', svc: 'حشو', st: 'waiting', av: 1, src: 'web', me: true },
    { off: 60, name: 'يوسف طارق', svc: 'تنضيف', st: 'confirmed', src: 'vezeeta' },
    { off: 90, name: 'أحمد رمضان', svc: 'كشف', st: 'noreply', av: 3, src: 'facebook' },
    { off: 120, name: 'نورا إبراهيم', svc: 'تقويم', st: 'confirmed', av: 2, src: 'referral' },
    { off: 150, name: 'مريم عاطف', svc: 'حشو', st: 'noreply', src: 'whatsapp' },
    { off: 180, name: '', svc: '', st: 'free' },
  ];
  function buildDesk() {
    const now = clinicNow();
    const base = new Date(now);
    base.setMinutes(now.getMinutes() < 30 ? 0 : 30, 0, 0);
    let n = 9;
    return DESK_TPL.map((r) => {
      const at = new Date(base.getTime() + r.off * 60000);
      const row = { ...r, at: at.getTime(), t: ampm(at) };
      if (['done', 'chair', 'waiting'].includes(r.st)) row.n = n++;
      if (r.st === 'chair') row.since = Date.now() - 14 * 60000;
      return row;
    });
  }
  const DESK_KEY = 'ivory:desk:v2';
  const desk = {
    get() {
      const s = store.get(DESK_KEY, null);
      if (s && s.day === dayKey() && Array.isArray(s.rows)) return s.rows;
      const rows = buildDesk();
      store.set(DESK_KEY, { day: dayKey(), rows });
      return rows;
    },
    set(rows) { store.set(DESK_KEY, { day: dayKey(), rows, at: Date.now() }); },
    stamp() { const s = store.get(DESK_KEY, null); return (s && s.at) || Date.now() - 40000; },
    reset() { [DESK_KEY, FEED_KEY, 'ivory:bookings'].forEach(store.del); },
    on(cb) { onStore(DESK_KEY, () => cb(desk.get())); },
  };

  function short(name) {
    const p = name.split(' ');
    return p[0] + (p[1] ? ' ' + p[1][0] + '.' : '');
  }
  function queueFrom(rows) {
    const chair = rows.find((r) => r.st === 'chair');
    const waiting = rows.filter((r) => r.st === 'waiting').sort((a, b) => a.n - b.n);
    return {
      now: chair ? chair.n : null,
      nowName: chair ? short(chair.name) : '',
      nowSvc: chair ? chair.svc : '',
      since: chair ? chair.since : null,
      waiting: waiting.map((r) => ({ n: r.n, name: short(r.name), svc: r.svc })),
      free: rows.filter((r) => r.st === 'free').length,
    };
  }

  /* the demo patient, dated around today */
  function patient() {
    const me = desk.get().find((r) => r.me) || { t: '7:30م' };
    const d = (n) => dayOffset(n);
    const plan = d(14);
    return {
      name: 'سارة محمود', first: 'سارة', en: 'Sara', ticket: 15, av: 'assets/img/av-1.jpg', phone: '010 •••• 4821',
      visit: `النهارده · ${me.t}`,
      teeth: { 36: 'done', 46: 'done', 26: 'next', 37: 'next', 11: 'planned' },
      info: {
        36: { ar: 'علاج عصب', when: dateAr(d(-17)) },
        46: { ar: 'حشو', when: dateAr(d(-7)) },
        26: { ar: 'حشو', when: `النهارده · ${me.t}` },
        37: { ar: 'حشو', when: `النهارده · ${me.t}` },
        11: { ar: 'طربوش (كراون)', when: `${AR_DAY.format(plan)} ${dateAr(plan)}` },
      },
      sessions: [
        { ar: 'كشف وأشعة', when: dateAr(d(-24)), st: 'done' },
        { ar: 'علاج عصب · سنة 36', when: dateAr(d(-17)), st: 'done' },
        { ar: 'حشو · سنة 46', when: dateAr(d(-7)), st: 'done' },
        { ar: 'حشو · سنة 26 و37', when: `النهارده · ${me.t}`, st: 'next' },
        { ar: 'طربوش · سنة 11', when: `${AR_DAY.format(plan)} ${dateAr(plan)}`, st: 'planned' },
      ],
      lastVisit: dateAr(d(-7)),
      pay: { total: 6800, paid: 4200 },
    };
  }

  /* ---------- helpers ---------- */
  const fmt = (n) => Number(n).toLocaleString('en-US');
  const money = (n) => `${fmt(n)} ج`;
  const AVC = ['#E8F2EF', '#FAEDE8', '#F1ECE2', '#E8EDF4', '#F2EAF0'];
  function avatar(name, av, cls) {
    if (av) return `<img class="avt ${cls || ''}" src="${typeof av === 'number' ? `assets/img/av-${av}.jpg` : av}" alt="" loading="lazy">`;
    const i = [...(name || '·')].reduce((s, c) => s + c.charCodeAt(0), 0) % AVC.length;
    return `<span class="avt ini ${cls || ''}" style="background:${AVC[i]}">${(name || '·').trim()[0]}</span>`;
  }

  let toastTimer;
  function toast(msg) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
  }

  function sheet(id, open) {
    const s = document.getElementById(id);
    if (!s) return;
    let bg = document.querySelector('.sheet-bg');
    if (!bg) {
      bg = document.createElement('div');
      bg.className = 'sheet-bg';
      bg.addEventListener('click', closeSheets);
      document.body.appendChild(bg);
    }
    const on = open !== false;
    if (on) document.querySelectorAll('.sheet.open').forEach((x) => x.classList.remove('open'));
    s.classList.toggle('open', on);
    bg.classList.toggle('open', on);
    document.documentElement.classList.toggle('lock', on);
  }
  function closeSheets() {
    document.querySelectorAll('.sheet.open').forEach((x) => x.classList.remove('open'));
    const bg = document.querySelector('.sheet-bg');
    if (bg) bg.classList.remove('open');
    document.documentElement.classList.remove('lock');
  }

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeSheets(); closePop(); } });
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) { closeSheets(); return; }
    const o = e.target.closest('[data-sheet]');
    if (o) { e.preventDefault(); sheet(o.dataset.sheet); return; }
    const dead = e.target.closest('[data-dead]');
    if (dead) { e.preventDefault(); toast('Demo: الزرار ده بيتوصل برقم العيادة الحقيقي'); }
    const pop = document.querySelector('.pop.open');
    if (pop && !e.target.closest('.pop') && !e.target.closest('#bell')) closePop();
  });

  /* ---------- motion: reveal + count-up ---------- */
  function countUp(el) {
    const raw = el.dataset.count;
    const to = parseFloat(raw);
    const dec = (raw.split('.')[1] || '').length;
    const suf = el.dataset.suffix || '';
    const from = parseFloat(el.dataset.from || 0);
    const show = (v) => { el.textContent = (dec ? v.toFixed(dec) : fmt(Math.round(v))) + suf; };
    if (document.visibilityState !== 'visible' || matchMedia('(prefers-reduced-motion: reduce)').matches) { show(to); return; }
    const dur = +el.dataset.dur || 1000;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      show(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    setTimeout(() => show(to), dur + 400);
  }
  function countAll(root) { (root || document).querySelectorAll('[data-count]').forEach(countUp); }

  function reveal() {
    document.querySelectorAll('[data-stagger]').forEach((box) => {
      [...box.children].forEach((c, i) => { c.classList.add('rv'); c.style.setProperty('--i', i); });
    });
    const els = document.querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => { e.classList.add('in'); countAll(e); }); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add('in');
        if (en.target.matches('[data-count]')) countUp(en.target);
        countAll(en.target);
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- live activity ---------- */
  const FEED_KEY = 'ivory:feed:v2';
  function seedFeed() {
    const n = Date.now();
    const m = 60000;
    return [
      { ic: 'arrive', t: 'سارة محمود وصلت · رقمها A-15', ts: n - 4 * m },
      { ic: 'pay', t: 'اتدفع 600 ج · عمر خالد · حشو', ts: n - 26 * m },
      { ic: 'whatsapp', t: 'التذكير اتبعت لـ 9 مرضى بتوع بكرة', ts: n - 64 * m },
      { ic: 'google', t: 'تقييم جديد ★★★★★ من هبة ن.', ts: n - 130 * m },
      { ic: 'web', t: 'حجز جديد من الموقع · نورا إبراهيم · تقويم', ts: n - 190 * m },
    ];
  }
  let unread = 0;
  const feed = {
    get() {
      const f = store.get(FEED_KEY, null);
      if (f && f.day === dayKey()) return f.items;
      const items = seedFeed();
      store.set(FEED_KEY, { day: dayKey(), items });
      return items;
    },
    add(item) {
      const items = feed.get();
      items.unshift({ ...item, ts: Date.now() });
      store.set(FEED_KEY, { day: dayKey(), items: items.slice(0, 30) });
      unread += 1;
      paintBell();
      ping(item);
    },
  };
  function paintBell() {
    const b = document.querySelector('#bell .bdg');
    if (!b) return;
    b.hidden = !unread;
    b.textContent = unread;
  }
  let pingTimer;
  function ping(item) {
    let el = document.querySelector('.ping');
    if (!el) {
      el = document.createElement('div');
      el.className = 'ping';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.innerHTML = `<span class="fi">${brand(item.ic)}</span><div><b>${item.t}</b><small>دلوقتي</small></div>`;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout(pingTimer);
    pingTimer = setTimeout(() => el.classList.remove('show'), 5200);
  }
  function live(events) {
    events.forEach((ev) => setTimeout(() => {
      const item = ev.run();
      if (item) feed.add(item);
    }, ev.after));
  }
  function closePop() { const p = document.querySelector('.pop'); if (p) p.classList.remove('open'); }
  function openPop() {
    const p = document.querySelector('.pop');
    if (!p) return;
    const items = feed.get();
    p.innerHTML = `<div class="pop-head"><span class="label">Activity</span><span class="chip sm teal"><span class="live"></span><span class="ltr">Live</span></span></div>` +
      items.slice(0, 9).map((it, i) => `<div class="feed-i ${i < unread ? 'new' : ''}"><span class="fi">${brand(it.ic)}</span><div><b>${it.t}</b><small>${rel(it.ts)}</small></div></div>`).join('');
    p.classList.add('open');
    unread = 0;
    paintBell();
  }

  /* ---------- app shell (staff screens) ---------- */
  const NAV = [
    { id: 'today', href: 'desk.html', ic: 'desk', en: 'Today' },
    { id: 'messages', href: 'journey.html', ic: 'chat', en: 'Messages' },
    { id: 'reports', href: 'doctor.html', ic: 'chart', en: 'Reports' },
  ];
  const EXT = [
    { href: 'site.html', ic: 'globe', en: 'Website' },
    { href: 'app.html', ic: 'tooth', en: 'My Smile' },
    { href: 'screen.html', ic: 'tv', en: 'Waiting screen' },
  ];
  function shell(o) {
    const main = document.querySelector('main');
    const user = STAFF[o.user];
    const links = (cls) => `
      <span class="label side-cap">Clinic</span>
      ${NAV.map((n) => `<a class="${n.id === o.active ? 'on' : ''}" href="${n.href}">${icon(n.ic)}<span class="ltr">${n.en}</span></a>`).join('')}
      <span class="label side-cap">Patients see</span>
      ${EXT.map((n) => `<a href="${n.href}" ${cls ? '' : 'target="_blank" rel="noopener"'}>${icon(n.ic)}<span class="ltr">${n.en}</span>${icon('out', 'ext')}</a>`).join('')}`;
    const wrap = document.createElement('div');
    wrap.className = 'shell';
    wrap.innerHTML = `
      <aside class="side">
        <a class="side-brand" href="index.html">${mark()}<span><b>Ivory</b><small class="label">Dental</small></span></a>
        <nav class="side-nav" aria-label="القايمة">${links()}</nav>
        <div class="side-foot">
          <div class="side-user"><img src="${user.av}" alt=""><div><b>${user.name}</b><small class="ltr">${user.role}</small></div></div>
          <span class="side-demo"><span class="ltr">Demo</span> · بيانات وهمية</span>
        </div>
      </aside>
      <div class="main-col">
        <header class="bar">
          <button class="icon-btn bar-menu" data-sheet="navSheet" aria-label="القايمة">${icon('menu')}</button>
          <a class="bar-brand" href="index.html" aria-label="Ivory Dental">${mark()}</a>
          ${o.search ? `<label class="search">${icon('search', 'sm')}<input id="search" type="search" placeholder="${o.search}" autocomplete="off"></label>` : '<span class="grow"></span>'}
          <span class="sync"><span class="live"></span><span class="ltr">Live</span></span>
          <button class="icon-btn" id="bell" aria-label="الإشعارات">${icon('bell')}<span class="bdg" hidden></span></button>
          <img class="bar-av" src="${user.av}" alt="${user.name}">
        </header>
      </div>`;
    main.parentNode.insertBefore(wrap, main);
    wrap.querySelector('.main-col').appendChild(main);
    main.classList.add('page');

    const navSheet = document.createElement('div');
    navSheet.className = 'sheet';
    navSheet.id = 'navSheet';
    navSheet.innerHTML = `<div class="grip"></div>
      <div class="sheet-head"><span class="side-brand">${mark()}<span><b>Ivory</b><small class="label">Dental</small></span></span><button class="icon-btn sm" data-close aria-label="إغلاق">${icon('x')}</button></div>
      <nav class="side-nav">${links(true)}</nav>
      <div class="side-user" style="margin-top:14px"><img src="${user.av}" alt=""><div><b>${user.name}</b><small class="ltr">${user.role}</small></div></div>`;
    document.body.appendChild(navSheet);

    const pop = document.createElement('div');
    pop.className = 'pop';
    document.body.appendChild(pop);
    document.getElementById('bell').addEventListener('click', () => {
      if (pop.classList.contains('open')) closePop(); else openPop();
    });
  }

  /* ---------- tooth chart (FDI, viewed facing the patient) ---------- */
  const UP = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
  const LO = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];
  const f1 = (v) => Math.round(v * 10) / 10;
  function toothWidth(n) {
    const d = n % 10;
    return d >= 6 ? 30 : d >= 4 ? 22 : d === 3 ? 19 : d === 2 ? 16 : 20;
  }
  function toothDepth(n, w) {
    const d = n % 10;
    return d >= 6 ? w * 0.9 : d >= 4 ? w * 1.02 : d === 3 ? w * 1.12 : w * 0.62;
  }
  function toothShape(n, w) {
    const d = n % 10;
    const h = toothDepth(n, w);
    if (d === 3) return `<ellipse class="shape" rx="${f1(w / 2)}" ry="${f1(h / 2)}"/>`;
    const rx = d >= 6 ? w * 0.32 : d >= 4 ? w * 0.46 : h * 0.45;
    let s = `<rect class="shape" x="${f1(-w / 2)}" y="${f1(-h / 2)}" width="${f1(w)}" height="${f1(h)}" rx="${f1(rx)}"/>`;
    if (d >= 6) s += `<path class="groove" d="M${f1(-w * 0.26)} 0H${f1(w * 0.26)}M0 ${f1(-h * 0.28)}V${f1(h * 0.28)}"/>`;
    else if (d >= 4) s += `<path class="groove" d="M${f1(-w * 0.2)} 0H${f1(w * 0.2)}"/>`;
    return s;
  }
  function arcPoints(cx, cy, rx, ry, dir) {
    const N = 360;
    const pts = [];
    let len = 0;
    for (let i = 0; i <= N; i++) {
      const a = Math.PI - 0.02 - (Math.PI - 0.04) * (i / N);
      const p = { x: cx + rx * Math.cos(a), y: cy + dir * ry * Math.sin(a), l: 0 };
      if (i) len += Math.hypot(p.x - pts[i - 1].x, p.y - pts[i - 1].y);
      p.l = len;
      pts.push(p);
    }
    return { pts, len };
  }
  function along(arc, l) {
    const p = arc.pts;
    let i = 1;
    while (i < p.length - 1 && p[i].l < l) i++;
    const a = p[i - 1];
    const b = p[i];
    const k = (l - a.l) / ((b.l - a.l) || 1);
    return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k, ang: Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI };
  }
  function toothChart(el, opts) {
    const o = opts || {};
    const st = o.status || {};
    const showNums = o.numbers !== false;
    const gap = 3;
    const arches = [
      { ids: UP, arc: arcPoints(160, 190, 128, 150, -1), inward: 90 },
      { ids: LO, arc: arcPoints(160, 214, 128, 150, 1), inward: -90 },
    ];
    let g = '';
    let nums = '';
    let i = 0;
    arches.forEach((A) => {
      const sum = A.ids.reduce((s, n) => s + toothWidth(n), 0);
      const k = (A.arc.len - gap * (A.ids.length - 1)) / sum;
      let l = 0;
      A.ids.forEach((n) => {
        const w = toothWidth(n) * k;
        const p = along(A.arc, l + w / 2);
        l += w + gap;
        const s = st[n] || '';
        const ring = s === 'next' ? `<g class="ring">${toothShape(n, w)}</g>` : '';
        g += `<g class="t ${s}" data-n="${n}" data-q="${Math.floor(n / 10)}" transform="translate(${f1(p.x)} ${f1(p.y)}) rotate(${f1(p.ang)})" style="--d:${i * 18}ms"><g class="ti">${ring}${toothShape(n, w)}</g></g>`;
        if (showNums) {
          const rad = (p.ang + A.inward) * Math.PI / 180;
          const off = toothDepth(n, w) / 2 + 8;
          nums += `<text class="num" x="${f1(p.x + Math.cos(rad) * off)}" y="${f1(p.y + Math.sin(rad) * off)}">${n}</text>`;
        }
        i++;
      });
    });
    const c = o.center
      ? `<text class="c-big" x="160" y="196">${o.center[0]}</text><text class="c-sub" x="160" y="236">${o.center[1]}</text>`
      : '';
    el.innerHTML = `<svg class="arch ${o.cls || ''}" viewBox="0 0 320 384" role="img" aria-label="${o.label || 'خريطة الأسنان'}">${g}${nums}${c}</svg>`;
    const svg = el.querySelector('svg');
    if (o.onPick) {
      svg.addEventListener('click', (e) => {
        const t = e.target.closest('.t');
        if (!t) return;
        svg.querySelectorAll('.t.sel').forEach((x) => x.classList.remove('sel'));
        t.classList.add('sel');
        o.onPick(+t.dataset.n);
      });
    }
    return svg;
  }

  window.IV = {
    TOOTH, ICONS, icon, mark, brand, hydrate, CLINIC, STAFF, store, onStore, desk, queueFrom, patient, short,
    fmt, money, avatar, toast, sheet, closeSheets, reveal, countUp, countAll, toothChart, shell, feed, live,
    clinicNow, ampm, dayOffset, dayLabel, dateAr, enDate, rel, mins,
  };

  hydrate();
  reveal();
})();
