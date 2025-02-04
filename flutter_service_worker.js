'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ce43cc50ac981cfba881560b09fb46fe",
".git/config": "91790544edc0cc3564ba906bd7f6add0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "7cbbfe0f89167f227b913a1af9a14864",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8b83f5e954bd9b9b19a54bf3e80af29e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3835686a6d8e5724bebd04e754b7f454",
".git/logs/refs/heads/ChitraVichar": "6d723fda79ac2f1a043a28d0aa112447",
".git/logs/refs/remotes/origin/ChitraVichar": "0c7269a9ac2d8d5d5c346d58be69d1cc",
".git/objects/02/d0d376e7782f8b8937f454a07a4f69b8ccf5d1": "4b6ab0c1ddd308c4166ff14c2a3f2ee3",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/64d20a0414ac12d6be6c3bf0d9d9bc373be2c8": "883e9960f586f1405181f650c809ba2c",
".git/objects/08/3ee9bd0cccc4a0f6930332e3b52ede63f4f265": "65c355cfcb3c86e48f57812e74625a56",
".git/objects/0f/acc1dd6d52f5bba6d6cd700c246ea7abc85fd4": "8e6b0016abfe77d30760ef87f45386ef",
".git/objects/16/093aa4b0101ab9dceb3bdab9117a7aabb3bfcf": "bf50d1950e71e1f21850f25897ab2eb3",
".git/objects/17/097e3312832c75028177d28da10f5a50c49651": "2f5fc641a722faee48bfb3f00cfee7a5",
".git/objects/19/8bab3f4cad6c33c7941991073b35f755707c67": "9c2c41d769a2e8663862dd03c58882dc",
".git/objects/19/cdb4212c3c9378ea30b9cd308e133843cb4d6d": "ffe3f2b3185e8cfb17d3e4511851991c",
".git/objects/22/b2e7d9a58c2bf668f1f945310afbb7d1ebc356": "902ba5cd3cc60e4436ff6f5a69a5429a",
".git/objects/22/cc98acb321491443f90bfa2d8a73b3fd8ecc37": "2edfae2fe7eeff76fb10a002572586b1",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/31/85906bd753f5fa8ef641a3ba30534d0507c582": "19f5b2f73abbcaaea5882feafa2515c8",
".git/objects/33/4fb9fa3c611d274f8e21786a1d8964243d84a2": "11f65660df12bb3359d78f7f7f21d937",
".git/objects/39/35d5c55a11aa430c9bbb8e543c3d81576427bc": "0f825a5ff14c542e514924ff665c606d",
".git/objects/39/992dff9433b8c7eb9087a4d2fe9d5cb638f08d": "ce40316b671fe193719c4de398f8bf64",
".git/objects/3a/a6c2d25969a6ebd416d909dbdd55d37a9768e4": "1bbc1161f30530f74d6f2d9aef11c5b7",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/1a28af9a075aa269309d83f47cb42947ce5b34": "40bc20939de1432568a7f978551efb42",
".git/objects/3d/d28e9800d370ee71cb6dacc0b02ff57dbe910c": "f8bff54e8d7103dff4554fdf65e0d9fb",
".git/objects/3e/7145721c5135f4650c616bc553656383842513": "7fa909184eaade023cc8085e28fe285b",
".git/objects/3e/9f18cbbf4b3c7fcd41889c1c080aa1bd53b336": "4eb1ec74b40325a30cb41749f327c9d9",
".git/objects/40/627a754703473a11bf63ba523e6cf20aca5b92": "904f262cf2191af3f10be79553ceb52e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/cdfeac7acbdb73ea5bcfadd3611303437ff114": "58cf3cec2f438d6aa2257d3d13f45e81",
".git/objects/4c/7d43f5bd629223f86663b827b2b4e2adc503b3": "7f2d162e412d6e588dee822d54cdc6b1",
".git/objects/54/d0d712b8dd758304ca58a9aaeeac2839bd4d2f": "272d99574cda7ac23ace6d646d14fa2d",
".git/objects/58/46ee448c23c9ab9f6a6c16124e4a08c9f5a30d": "a0b6e39069ac13384e4b5e745076f6cc",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/6a54550d5bdcca4ae495af0234a0e0cef509a1": "a81816f1f8b6148925ea02ab2146bcf5",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/1140aa7c1a4570f8fa9d04be48241febc8ee06": "1c00f816c14c7f6b047bfe2f2e40581e",
".git/objects/68/37cdf1c43006357c2a5524c64ddff56cfd9cfa": "832d725c66702fd9adc8a8c993030957",
".git/objects/68/45de3fa9e1853718c0d97b75b8a6c5e24e481f": "5428848904ff8bcd7dce50a69ee9be8d",
".git/objects/68/868e57a4b48aee73581afd74ce34cbe462f381": "fe156d747599af463917e84e505792e8",
".git/objects/6c/d84bcc60cfd6c30d5de02df53f71278ddf74f0": "1203f13faa1b370a6c85aeb663780a49",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/a7576f592dc78024da9549c9296ee498c27883": "f6bdcd76628c60792de4860e79f6d8cd",
".git/objects/76/4592749f5ec3c52a9f3512f6c1f7e10c8b4966": "d8186a3b08da630daea88639eedaf89a",
".git/objects/7e/7ca3c9380edac8d8e1ab079951896cf687ff3e": "9de41aa678247a76ed9f3fc40105b53f",
".git/objects/81/01c5b320ff60494185ee5a343e1f5eaae6755d": "969320c32d468bccac0e5761c6197be0",
".git/objects/82/4aa0b683c3881ca80f142ec2c165a52e86df68": "f9aedaef784ab0ecf58a1667d9c41561",
".git/objects/83/21c17b50b70eef5615eff6c638769dc32e9a60": "5930f0247c0f0ae4f5d7b90569f93331",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0c8465e9cfc50c572c0dee65665d02455db7bc": "547bef63b9ef70a980f77305a1212c6a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c251601a4f145fb9ad6a54fb0b67766a235e72": "c9a3731a29689186608db7f3dbbb474f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/05fe11383e411a8bbc42eb1fc074f43861170a": "e560ebf2cf55ebf70ca2c364ec9870c4",
".git/objects/8e/9fac8e8c8ac631ce7022a61a5c6bceb8a378f0": "b2cba12d4eacb75c327eca9fc9551b65",
".git/objects/91/68e8cf9e19393f3380f5a622d228d04c935245": "2294cb8bad74ff11dd808c571364f21e",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/a4ad73d232a075e49fbd3083557a3b766f8f0b": "b438ccea0b6c87207d5b30878da3bdb6",
".git/objects/9a/98da8f2dbe6d2ee72c1cdd3c83513f6e47dcd6": "f95fb43ddb6de0661c0b4982d86c9598",
".git/objects/9b/6d2c593331bbc1a7af9158089485eba155b6d2": "b6875279b384933624175f3049acf4d9",
".git/objects/9b/a6a87ede5e7b809a87027311e43dec4d389315": "799550433a2ff164837b22ce276abf47",
".git/objects/a1/0b90b4bb4677dd877707e6cdf648ea895f74cd": "d77c0d0865cfd51df22343dae3cf66fc",
".git/objects/a1/7dad2fbdbe3cd5ee76bd6e3b89578a32ee82d2": "1b4442a3ceca965f29771287f8917749",
".git/objects/a5/ddc7983814bc1455e2497fe9bc11e5b1de90ea": "f3b76356300a24a946232d9b0ab8b612",
".git/objects/a6/9bd5bf904fde803c3e832df92af5ca1a1205a4": "c27fd6f6b33c921f92e56e5ade3d996e",
".git/objects/a7/f8232233127b31f05365345cf7e459672dffbb": "552bfa97de51d0cddddc560c43066c7b",
".git/objects/a8/85f9089a7f9115dae664fc911db82d2f356f79": "8c21c794d5f04343583c55c63e179b40",
".git/objects/a9/0f92b51825d7fce4eca43a4cf244abdb94b31a": "0c82185c213d003e0ee7ee72c23b241b",
".git/objects/ab/6dab507d56a4cb4764bce8534523cdace8e060": "fa852b219dcc03a8bbfdf73d56de3df8",
".git/objects/ae/b92c1c175c636681b8b692c8d34db1ab606ddc": "b405b30a16594393c94cbe6ced8a4fb7",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/0e30c32e37a416be15dfced50f4a1576a6b51f": "27568e778fe71d1ffa2cc0f00c16600a",
".git/objects/b4/6b0e1acc4855f7726aad02ab5d849983834a12": "d8b7f2ffbeadab0b521dfc283632a2be",
".git/objects/b5/b392b64c4ee17db252d8fba50d97323d3030f4": "83d514ce8954fc475ce13ae0d0bd9423",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/df23078e5de74a91f2d616e6656d0acba01ac3": "25877ab76490049ded1ce093293c45e1",
".git/objects/c1/c82969a4339f10f047d79d8229e9ffe6596911": "bec49541a12eed9263087a74f65cdbfa",
".git/objects/c3/7035b075ef9000220691e391097596d00e85bf": "b80fd021829a0ac86407b57a71ddc413",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/7d1f90ebcfdacd81b4d5f45855d31731880645": "622c755218cd5ef4b14d432a43894ad1",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/13991b15a6d745d3e9e50cc1e07630c7e4731e": "1d2475db32d998d0968f43b1955eb987",
".git/objects/cd/f825520c00059d7a22c700f47734df635c0a42": "3d0a689cd0c61574fe8047533ac4cce1",
".git/objects/ce/2460945e0f098f02a96732a9b8b4ab99a824d0": "23d0195bbf903a44c80f354e2f187f89",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d3/f03e7f34eb344414b463d561045dfdbfbf7de0": "1338770b89004781556d28940f96f158",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/610a4c557cc63bff3e1bbc57d2f32a73142c05": "cdd0b8a9567394f12a9af268d657d33f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4015cb1c5d0f2ac53ea779d8f8911db955f704": "128a6e374eda86cf9a7e1572718c1be3",
".git/objects/da/e3628ca50f5c2ac5dca407c23b7b07c4a0b42f": "856e7a40d3d07df130b3c8d4e32d504f",
".git/objects/dc/e56fd09de5d394ff88a8bbb5e5b593ba69d25a": "030b707f5ff1e6041c26adda7aa8a81c",
".git/objects/dd/5434a142016e7a51f4a96c89c72023d826cdbf": "da65595782d6933836031c2de0240d6f",
".git/objects/e1/88313d5ce477fbb47651bb1c4776851dfedd86": "540bc688a60a5ea283a52ff56ec22725",
".git/objects/e7/911417dfe22b18aa5e7bd333ee49553f3b2dde": "88903cbb26c398aff0842642f52ec3f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/b9cd803d4c551160fbc399354428cb2048b8c1": "72897229d77c64b6f8aa5ed2c1a65881",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3b4e9e1fdce5dfd4f2368ff692948cfb1ef0eb": "5af683ca128bd977e6402d3b06bec1f7",
".git/objects/f7/4215bfcc27e7a74eade56743fcbf1451f75611": "432e1b384a7f57ff1d0108a8ddf802b7",
".git/objects/fb/ec084282177cb0ee6c498c819ca88dc18d2a80": "2a69aad775139bdd008468a78757376c",
".git/objects/fd/4801a55cb58e2082e5ddf11b3fb97772701511": "1a27b57443aff76f6db4cc14c2592955",
".git/objects/fe/33a82698df960e91633e3591d341c6ddbfad25": "3205a18a2bdec5ef7479786a8e3b05dd",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/ChitraVichar": "abb106cbcd76e51327ad2bf4f7dea926",
".git/refs/remotes/origin/ChitraVichar": "abb106cbcd76e51327ad2bf4f7dea926",
"assets/AssetManifest.bin": "c307df5faf794c12255831382df484e7",
"assets/AssetManifest.bin.json": "d7212789c8ecfee451e057e1a29680ac",
"assets/AssetManifest.json": "b2bb9d02644f13e9fa910ac978869a87",
"assets/assets/images/ladki.jpg": "780400e13169eee3b8fa6fdd8c1e6e94",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "031427b0dc2eef0471810621773361de",
"assets/NOTICES": "ff1e2ec65cfab37954f25ce5fc1bbe9d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9d2da82f7c8c825c350686a1fada0134",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f517f3adb1a44dc9ff82056548cd0b18",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2b1368e3476de47e520000f1d4ea46b2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27df8dc2876c7a9d9b529c6a92b856f6",
"/": "27df8dc2876c7a9d9b529c6a92b856f6",
"main.dart.js": "b77b8a78053f00b1bd9f58bd65b7cfce",
"manifest.json": "90ce436d5ef18ebccf7ce23d2c6f8be4",
"version.json": "b5b9cf8009b2fb0ad0397f8983509e5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
