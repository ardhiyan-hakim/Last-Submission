const serviceWorkerOption = {
  assets: [
    '/bundle.js',
    '/manifest.json',
    '/icons/icon-128x128.png',
    '/icons/icon-144x144.png',
    '/icons/icon-152x152.png',
    '/icons/icon-192x192.png',
    '/icons/icon-384x384.png',
    '/icons/icon-512x512.png',
    '/icons/icon-72x72.png',
    '/icons/icon-96x96.png',
    '/images/heros/hero-image_4.jpg',
    '/index.html',
  ],
};

!(function (e) { const t = {}; function n(r) { if (t[r]) return t[r].exports; const o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports; }n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }); }, n.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, n.t = function (e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const r = Object.create(null); if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const o in e)n.d(r, o, ((t) => e[t]).bind(null, o)); return r; }, n.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return n.d(t, 'a', t), t; }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n.p = '', n(n.s = 0); }([function (e, t) { self.addEventListener('install', ((e) => { console.log('Installing Service Worker ...'); })), self.addEventListener('activate', ((e) => { console.log('Activating Service Worker ...'); })), self.addEventListener('fetch', ((e) => { console.log(e.request), e.respondWith(fetch(e.request)); })); }]));
