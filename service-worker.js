importScripts("workbox-v4.3.1/workbox-sw.js"),workbox.setConfig({modulePathPrefix:"workbox-v4.3.1"}),workbox.core.setCacheNameDetails({prefix:"eleventy-plugin-pwa"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),self.__precacheManifest=[{url:"404.html",revision:"7d14f9e16fea3222d5a4f2bac2ae7a94"},{url:"about/index.html",revision:"49399e5600291e3735219ffaf3a7fbd5"},{url:"blog/index.html",revision:"8367d558717505304f1c575a4ba1fdd5"},{url:"blog/karol_chevere/index.html",revision:"4361f35ad7333e9e5fbfa5e68bee90e4"},{url:"blog/native-elements/index.html",revision:"c3098929496eaf2b8190294bcb4823fb"},{url:"blog/post-with-embeds-and-images/index.html",revision:"2229c0315ce6081b4b054d9d3774a45c"},{url:"blog/simple-blog-post/index.html",revision:"815a9e2b47bac7a451190e352bbcf185"},{url:"blog/tag/all/index.html",revision:"d895b5d6ece3891fb1dd6e7d419604b0"},{url:"blog/tag/chevere/index.html",revision:"1546b1f250f6509bfb6ecd9087d65fe5"},{url:"blog/tag/code/index.html",revision:"75cde5539754f9cc9696a709798e46a9"},{url:"blog/tag/content/index.html",revision:"919b8533f2400a872478240806aa8284"},{url:"blog/tag/css/index.html",revision:"d206f0915d990f003c2b706290c84d4a"},{url:"blog/tag/embeds/index.html",revision:"2e14763ef0c59a7c8d01c66b3e9fbcea"},{url:"blog/tag/html/index.html",revision:"05ac344ab4bafb82ca673a863d171089"},{url:"blog/tag/images/index.html",revision:"7382ffd7f142af09381831e5a7ca1a73"},{url:"blog/tag/karol/index.html",revision:"f4e3d499c537dc01288184fea759c967"},{url:"blog/tag/native-elements/index.html",revision:"59686dd566f5d79c4613cba1d94722e8"},{url:"blog/tag/posts/index.html",revision:"b589cca03e55551e680631be8cf14c01"},{url:"blog/tag/sample-content/index.html",revision:"0f98c40052ba1486261c44fac35b6409"},{url:"contact/index.html",revision:"7e3399f1ad997b00dafea1e8a33d4aaf"},{url:"cover.jpg",revision:"7f551e3c3140de0bbc18a9f88fd80298"},{url:"favicon.png",revision:"b896a297074c8f9e7f395f42993fb7a4"},{url:"icon-192x192_2.png",revision:"315ca4ed1d4f223720d260ff0233b14c"},{url:"icon-256x256.png",revision:"a284fde6d3101510bcd90e97d879bbfd"},{url:"icon-384x384.png",revision:"fe7dc134381980901f3fd80a94b8f2f0"},{url:"icon-512x512.png",revision:"107c571ffad9c75ebf633e31a1089d0d"},{url:"index.html",revision:"295629e9d62404ecce1e3c6d83ce663b"},{url:"logo1.png",revision:"8fb64e80fe371483b12c872123341ced"},{url:"solutions/index.html",revision:"d7c3ffec8abc4bbc0609743a0c6c2d0c"}].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new workbox.strategies.StaleWhileRevalidate,"GET"),workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new workbox.strategies.StaleWhileRevalidate,"GET");
