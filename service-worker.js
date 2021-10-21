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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1096a78d8d498c6474d8d34aa2eafadc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ef75892f.css",
    "revision": "7876b44c11ed6c2ad2e6e29f3ad4edf5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56a3aef4.js",
    "revision": "5057569dc9815077ee7d2239c288f873"
  },
  {
    "url": "assets/js/11.7227b195.js",
    "revision": "7da992d204bda4cc463737d90c32fab0"
  },
  {
    "url": "assets/js/12.60f57a9d.js",
    "revision": "82ae2832a81ab95ad8a57eaee51dbbac"
  },
  {
    "url": "assets/js/13.c07a606f.js",
    "revision": "66acaad5a75aadc7c40d2732d6b34b55"
  },
  {
    "url": "assets/js/14.42db9671.js",
    "revision": "4310b95ff07aa30cdc6b9b0997122ace"
  },
  {
    "url": "assets/js/15.122bdfcc.js",
    "revision": "8320b971768c63eece147c1d32b14160"
  },
  {
    "url": "assets/js/16.512b5e68.js",
    "revision": "cb815eaa1a52766fb2e919aba232b867"
  },
  {
    "url": "assets/js/17.c27b6b4a.js",
    "revision": "6c64fea6833e8946e99ffb31d5336e97"
  },
  {
    "url": "assets/js/18.c88433ed.js",
    "revision": "fc1dacae0609bd02505b77969d42fd10"
  },
  {
    "url": "assets/js/19.cb094c66.js",
    "revision": "8bb64abe9f57eeeb2244a2db0cfe6a6a"
  },
  {
    "url": "assets/js/2.3670e748.js",
    "revision": "d2f5f24249ac8ddd7ff685d95196f4b8"
  },
  {
    "url": "assets/js/20.72e5dc35.js",
    "revision": "04db094d759cffffe5f1ed68f89c145a"
  },
  {
    "url": "assets/js/21.ac7eebf8.js",
    "revision": "f4c8043582ffc2df1fb5db68b6b24087"
  },
  {
    "url": "assets/js/22.f6f0f906.js",
    "revision": "2b5b295626b9a43b1cc357e9753927c7"
  },
  {
    "url": "assets/js/23.f91c3a40.js",
    "revision": "8cc7dbdb0af045da2fb6e4f3a635bb96"
  },
  {
    "url": "assets/js/24.95d3941b.js",
    "revision": "3752e16c6356883363e38fa9ae7b399f"
  },
  {
    "url": "assets/js/26.87ff770b.js",
    "revision": "78f4e8b74647795453feb067e07475f5"
  },
  {
    "url": "assets/js/3.7b42dac5.js",
    "revision": "17124352913d5e75858d752c264f9b4f"
  },
  {
    "url": "assets/js/4.3a8d9edb.js",
    "revision": "90773e0bf4d6aedee55e1e07f94825f3"
  },
  {
    "url": "assets/js/5.8b0efd2b.js",
    "revision": "c9beef560d0921ec782fc523cb380eac"
  },
  {
    "url": "assets/js/6.055a0b3d.js",
    "revision": "5e5467b3af90ec210553eab11b8fc7bd"
  },
  {
    "url": "assets/js/7.57a1783a.js",
    "revision": "807175ca362faa84ab665cb6dc637cea"
  },
  {
    "url": "assets/js/8.e700beb6.js",
    "revision": "66bf12cafa81a9fa5719be210656ce33"
  },
  {
    "url": "assets/js/9.cce8dc66.js",
    "revision": "216a81c2270a5b232cdc9ed63a7ba71c"
  },
  {
    "url": "assets/js/app.17d818e8.js",
    "revision": "2f2737dcaaf95ddbfef217df50694a8a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "506967dfa3ee31f78efd819e1a020d16"
  },
  {
    "url": "design/index.html",
    "revision": "a023a27012d7b3c1b8c360a0ea16fd5b"
  },
  {
    "url": "index.html",
    "revision": "4b3e065acaa319042707c80f65e1a23a"
  },
  {
    "url": "intro/index.html",
    "revision": "5f9dcb37fc59a4d3abaeece98b3f95e0"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "e44e3730b8bf037e3de667429613e3d4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bd788af75810ebeec1c7eb8df5acbb0f"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b4cbdbf0019bbfea324bad8d09279981"
  },
  {
    "url": "software/index.html",
    "revision": "334c7ed0c78d0cd32f2ae7df172588f3"
  },
  {
    "url": "test/index.html",
    "revision": "706b2c4ffb2ba902729f1a80339ccf28"
  },
  {
    "url": "use cases/index.html",
    "revision": "0107a39588f925a186d04c1b60195878"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
