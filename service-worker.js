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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be82268cadd06e47a6f4f557c80eb87c"
  },
  {
    "url": "about/index.html",
    "revision": "90e1d0663581ec2e80bae14c6b93c7d0"
  },
  {
    "url": "asocial_meme.jpg",
    "revision": "b21333fdce052dea86c22039c690b344"
  },
  {
    "url": "banner.jpg",
    "revision": "878cc66785fe8f30547e61474b93e70f"
  },
  {
    "url": "bibliography.jpg",
    "revision": "9a8074f1a0a595f003165403bf27774a"
  },
  {
    "url": "blog/50_diferencias/index.html",
    "revision": "777abf52d9bb1847f8350a00f0f33177"
  },
  {
    "url": "blog/blog_2_atp/index.html",
    "revision": "6fc6e653abfd72b244d512d97744f880"
  },
  {
    "url": "blog/blog_3 psychometrist psychometrician /index.html",
    "revision": "ac80f385a97ae471f467f6e85825f882"
  },
  {
    "url": "blog/blog_4 becoming a psychologist/index.html",
    "revision": "b353a9dfdaf43f77e2e64bc8702968f0"
  },
  {
    "url": "blog/index.html",
    "revision": "a47f47de9016689c7c9171d5fbb0a7f9"
  },
  {
    "url": "blog/tag/all/index.html",
    "revision": "6be62191f4e9adc9ccccbd1c4788513d"
  },
  {
    "url": "blog/tag/english/index.html",
    "revision": "b080aba75303e407366b6b6e15a15e74"
  },
  {
    "url": "blog/tag/localization/index.html",
    "revision": "54706e746b5024306a8854bf8cf69794"
  },
  {
    "url": "blog/tag/posts/index.html",
    "revision": "6567884f9e993a256480d766d3b876b7"
  },
  {
    "url": "blog/tag/psychology/index.html",
    "revision": "c5a5d5f555d6ee6347920a6ee5f5e2fa"
  },
  {
    "url": "blog/tag/spanish/index.html",
    "revision": "8da59cfe0dcbed4c8aa8f3f43430477c"
  },
  {
    "url": "blog/tag/terminology/index.html",
    "revision": "1d7c7d59eb08c408e5699726f38a919e"
  },
  {
    "url": "blog/tag/where-the-clients-are/index.html",
    "revision": "931ee9646f65a3df4da0dce6c4090a73"
  },
  {
    "url": "blog1.jpg",
    "revision": "6871894ef357d889d41a138f787bfe5c"
  },
  {
    "url": "blog2-1.jpg",
    "revision": "665a76297a4815a66a2f12f7885d5976"
  },
  {
    "url": "blog2.jpg",
    "revision": "259d5564eedf9f99ae7f18a3a7dafacb"
  },
  {
    "url": "blog3-1.png",
    "revision": "1766a1a80b1941670f922cc23d49b8f1"
  },
  {
    "url": "blog3-2.png",
    "revision": "3d71ee36070d9adbacef946a9ff8e71d"
  },
  {
    "url": "blog3-3.jpg",
    "revision": "d51a8274243bd3af1b4e290e49b6f247"
  },
  {
    "url": "blog3-4.jpg",
    "revision": "52f2bbfde1792834d813a176203921ea"
  },
  {
    "url": "blog3.jpg",
    "revision": "685f309193e0053cc5641a1b004bc118"
  },
  {
    "url": "blog4-1.png",
    "revision": "7bfa24f53eb193a4284c187f0cb41e90"
  },
  {
    "url": "blog4-2.jpg",
    "revision": "b0d86db849c7bff30b0c5ed1a422071f"
  },
  {
    "url": "blog4-3.png",
    "revision": "e7d34811debe0b98474d5cf4a516fbab"
  },
  {
    "url": "blog4-4.png",
    "revision": "5b3f151566438a37a3cdf002587ce355"
  },
  {
    "url": "blog4-5.jpg",
    "revision": "dcd44cbe8fdb8bcb8c239de3c12ab833"
  },
  {
    "url": "blog4.jpg",
    "revision": "6de1ed00cb1d34b998e2a92c63ffa2fa"
  },
  {
    "url": "brain-solid.svg",
    "revision": "2306eeaa636ef6f08772fc2cf309afde"
  },
  {
    "url": "clientes1.png",
    "revision": "40cf2eff2d287acf1841ec1eabb74222"
  },
  {
    "url": "clientes2.png",
    "revision": "59f8b4c00b0a2e6bbd963b522756f024"
  },
  {
    "url": "clientes3.png",
    "revision": "78e629a0470b1ae94dba66f2cfa2b18f"
  },
  {
    "url": "clientes4.png",
    "revision": "e3e8d3d8a797c66c0274e18c2830ddd6"
  },
  {
    "url": "clipboard-check-solid.svg",
    "revision": "8bd82ec87d856b6c59ceaa9f323e7a43"
  },
  {
    "url": "contact/index.html",
    "revision": "8b25634452f9123f90a419aa39176fc7"
  },
  {
    "url": "contacto.jpg",
    "revision": "7c0b39246eb25d4c39622e3e79cb5113"
  },
  {
    "url": "favicon.png",
    "revision": "b896a297074c8f9e7f395f42993fb7a4"
  },
  {
    "url": "globe-europe-solid.svg",
    "revision": "4d1e04dcd762d9a8b705c21787fcf406"
  },
  {
    "url": "graduation-cap-solid.svg",
    "revision": "782718b2440c68b2a629c3bbab258842"
  },
  {
    "url": "heartbeat-solid.svg",
    "revision": "b3818d6e367bf722d1cc5a0dff5daa4a"
  },
  {
    "url": "herramientas.jpg",
    "revision": "afd7ab03d8bc5fd32cfc313e1600a438"
  },
  {
    "url": "home.jpg",
    "revision": "f58415f654db2a7ae327e0e3312af626"
  },
  {
    "url": "icon-192x192.png",
    "revision": "315ca4ed1d4f223720d260ff0233b14c"
  },
  {
    "url": "icon-256x256.png",
    "revision": "a284fde6d3101510bcd90e97d879bbfd"
  },
  {
    "url": "icon-384x384.png",
    "revision": "fe7dc134381980901f3fd80a94b8f2f0"
  },
  {
    "url": "icon-512x512.png",
    "revision": "107c571ffad9c75ebf633e31a1089d0d"
  },
  {
    "url": "index.html",
    "revision": "35d9e3a9a4d710057ef9b7aa2a9fd9d2"
  },
  {
    "url": "language-solid.svg",
    "revision": "7de3015eb74e2689c3df836b45db1b74"
  },
  {
    "url": "legal/index.html",
    "revision": "67874456ae9ce5789ba33d27996d7a41"
  },
  {
    "url": "linkedin.svg",
    "revision": "b8e3edff010ed5b6ebb76d637e42285c"
  },
  {
    "url": "logo-memoq.png",
    "revision": "026107d6945edbe46040c7f9acd476ec"
  },
  {
    "url": "logo-trados.png",
    "revision": "eda6bb935079c4c1f53148bc2f9d3c19"
  },
  {
    "url": "logo1.png",
    "revision": "8fb64e80fe371483b12c872123341ced"
  },
  {
    "url": "perfil1.jpg",
    "revision": "d83272123faaf782375027a8211e2330"
  },
  {
    "url": "perfil2.jpg",
    "revision": "6835bdaf645e59f44f54715c4204079f"
  },
  {
    "url": "privacy/index.html",
    "revision": "ac64572e9350c06b6321f99f039dba5f"
  },
  {
    "url": "proz.svg",
    "revision": "1fcd3060b594d1fd4aea3673c7449ae9"
  },
  {
    "url": "solutions/index.html",
    "revision": "30b781ebfb564347f45ae915fe93d4f2"
  },
  {
    "url": "solutionsadaptation.png",
    "revision": "3e028e4ab22c8af39dee11bed05f48ae"
  },
  {
    "url": "solutionsrevision.jpg",
    "revision": "a607a586d3e77a2e15371e8541192234"
  },
  {
    "url": "solutionstranslation.jpg",
    "revision": "64c8821f86807f4c41f2d67f49a3d340"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');