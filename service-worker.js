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
    "revision": "d93ddfbf9f16ac2562b3fa8fb9ea9438"
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
    "revision": "3a373f6cecb55323387c490cdd090046"
  },
  {
    "url": "blog/blog_2_atp/index.html",
    "revision": "b9d89b4027be2cebcf7e4cdef6ae1f75"
  },
  {
    "url": "blog/blog_3 psychometrist psychometrician /index.html",
    "revision": "768efd456b9c7594a7d7a6aaa9d298c7"
  },
  {
    "url": "blog/blog_4 becoming a psychologist/index.html",
    "revision": "b81d02bb230cb6532511ec241174ffdf"
  },
  {
    "url": "blog/blog_5 psychology translation what is at stake copy/index.html",
    "revision": "449ba09a9d340cfc29fb9d85a2d55af7"
  },
  {
    "url": "blog/blog_6_DSM-V_o_DSM-5_siglas/index.html",
    "revision": "bfd29cd549c28b50a1968c253fa8e30a"
  },
  {
    "url": "blog/index.html",
    "revision": "84ffe5e2856fc4a335c4df2f865edeb3"
  },
  {
    "url": "blog/tag/all/index.html",
    "revision": "52e0c074cf10860bb76d814a0e275865"
  },
  {
    "url": "blog/tag/english/index.html",
    "revision": "50c206ce9b42d402edb1b7265f8e391e"
  },
  {
    "url": "blog/tag/localization/index.html",
    "revision": "54706e746b5024306a8854bf8cf69794"
  },
  {
    "url": "blog/tag/ortotipography/index.html",
    "revision": "14cd2463179fc18c6f154d44ee22497f"
  },
  {
    "url": "blog/tag/posts/index.html",
    "revision": "572780b2274da342c27d256e9b65f45f"
  },
  {
    "url": "blog/tag/psychology/index.html",
    "revision": "2487d6c2bb56a527e0a3e24536b0fe90"
  },
  {
    "url": "blog/tag/spanish/index.html",
    "revision": "5163975935ee93e6d4bafc855c95f525"
  },
  {
    "url": "blog/tag/terminology/index.html",
    "revision": "1d7c7d59eb08c408e5699726f38a919e"
  },
  {
    "url": "blog/tag/translation/index.html",
    "revision": "73c36f3ad7d50ec709da35ca1211668a"
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
    "revision": "61c6054f004f3780abd91623512aed9e"
  },
  {
    "url": "blog4-2.jpg",
    "revision": "b0d86db849c7bff30b0c5ed1a422071f"
  },
  {
    "url": "blog4-3.png",
    "revision": "717870ab8bc1c2f1dfab1b01d94c8119"
  },
  {
    "url": "blog4-4.png",
    "revision": "35cc0a9fe179b9d53c2ecf93e6d301a8"
  },
  {
    "url": "blog4-5.jpg",
    "revision": "8b10f1bbe2cc858cfe290fe69c6878e5"
  },
  {
    "url": "blog4.jpg",
    "revision": "6de1ed00cb1d34b998e2a92c63ffa2fa"
  },
  {
    "url": "blog5-1.jpg",
    "revision": "9b536e28f3201a50d059b527a7848110"
  },
  {
    "url": "blog5-2.jpg",
    "revision": "871632907605241ccda3e9219e81b7f9"
  },
  {
    "url": "blog5-3.jpg",
    "revision": "9b8cf35471a0f28b859758bd37bb97e5"
  },
  {
    "url": "blog5-4.jpg",
    "revision": "94e76d342e2eadbb5000a9b1357c7891"
  },
  {
    "url": "blog5.jpg",
    "revision": "c3ff005dd50d634ce310b34b71f4cf8e"
  },
  {
    "url": "blog6-1.jpg",
    "revision": "1c7f12646fcecc64c5683bf57621a4c3"
  },
  {
    "url": "blog6-2.jpg",
    "revision": "17c61923b2b9735efda9b502fe1395c8"
  },
  {
    "url": "blog6-3.jpg",
    "revision": "79cc656e1ee4c09f1efd4d3785534142"
  },
  {
    "url": "blog6.jpg",
    "revision": "2c8c86375a4f01e8a26ace4921c6b2e6"
  },
  {
    "url": "blog7-1.jpg",
    "revision": "fff41778966aa8bbc952556ea66a2faa"
  },
  {
    "url": "blog7-2.jpg",
    "revision": "865a6fe7b5d2d022b12938add9cbdab5"
  },
  {
    "url": "blog7.jpg",
    "revision": "9343e4477c9014814f5045d2068da3a7"
  },
  {
    "url": "blog8-1.jpg",
    "revision": "147275b3684d6fcfbf9cd3c3f3713b76"
  },
  {
    "url": "blog8-2.jpg",
    "revision": "f8f6cf567c9b30801382c557a4435820"
  },
  {
    "url": "blog8.jpg",
    "revision": "1256531c4db04a53d0acf4adcc2ca2e3"
  },
  {
    "url": "blog9-1.jpg",
    "revision": "38593569028b9aad942f583abca0f331"
  },
  {
    "url": "blog9-2.jpg",
    "revision": "645df85eab1ba05c79d705717e9beb81"
  },
  {
    "url": "blog9-3.jpg",
    "revision": "c378cff3ff6dd88f41b07f9d157903f4"
  },
  {
    "url": "blog9.jpg",
    "revision": "738baf574ded96447b641556f05cdce9"
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
    "url": "clientes5.png",
    "revision": "1e59558f951d581be4fa6158a6ba6664"
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
    "url": "googlede2221d7eaa5996d.html",
    "revision": "53842cf552d88bc6316ec9817d49fc35"
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
    "revision": "727a98797fbab9883fdf236265d3e0ac"
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
