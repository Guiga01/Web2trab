/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "f4e252c842ae4fa48658aacf719e37a5"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "84c814d7e54f3959ec0cbfe73de3bf13"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "63795a582a25ee8aa5e5c814d4e62021"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "3166840b6aaefd9cc7281e1be71e1062"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "19174dad00bb7a18f817b9232ecf33af"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "d290ee2f27a9dcf941dc729230d65860"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "a6e10fd87f45a5f7cacb1880ad62e054"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "3cc6da93da51405e910be2c50d2ef4b9"
  },
  {
    "url": "index.html",
    "revision": "5cfd0253d44c49a62780ceaec639db8b"
  },
  {
    "url": "manifest.json",
    "revision": "7383db699dd13e66015b82c84f9ad7e3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
