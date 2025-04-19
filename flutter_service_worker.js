'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "024806f2fa97902441809b55769a3504",
".git/config": "318b2b01c181c68753cf9c0fa58fd286",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "297c9477517346b268ab610f14e25db2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "980235dbbfca087811b35b86121cc1df",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19e7c4ff2afff1ffcbfa2f71f6ea06a7",
".git/logs/refs/heads/ChitraVichar": "a5ca0d9b0ee5e12910b8168041ae8973",
".git/logs/refs/heads/main": "a13067086b4b00ac90c7fec79aaa5a64",
".git/logs/refs/remotes/origin/main": "06c23894efed4f69318fbfe64ae6cf4d",
".git/objects/00/1c01cb372e23f187345f512b79823bbcf8d112": "ff4ba4607cf6acae69afee763ce6b3fc",
".git/objects/01/44cc6a5e8c02915ff2ea3325cddc3241746f30": "d5b5c11fbccc5f3d07670af7afad5f8d",
".git/objects/02/32c35bd06b5fb4cf3d522a81b32c53333cdb64": "1a33cc4698f84fc0004874b54e2b8961",
".git/objects/03/206425c3e1939fc0ac5e28f7df760643ad9d75": "a0dd905089ea60a743ba7af3a5c1d8fc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/646c4211d5cfe17b32fa052b2969955bff6965": "194df5b369c36151c478ae67c7887d37",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/df11b4cc27c58ba83c5c0a3524bd0a2b5a5987": "d43c8b1acdf4eca1fb5e667358d5aef5",
".git/objects/0b/2d4d7e6adce954a708984bfca671dd2fc7f6ce": "2a0dcb9967635075c33d0bb386f43c66",
".git/objects/0c/5b8aed44bb0f95c92bd846346ac81404d5fe55": "feab519f0058fa6211ababe7c8b2b2a1",
".git/objects/11/be50584ffeafe5008e731ec473d5dd6097c34d": "6c7eb843c483b47a4a834c89373e4e75",
".git/objects/19/8bab3f4cad6c33c7941991073b35f755707c67": "9c2c41d769a2e8663862dd03c58882dc",
".git/objects/19/c7f6c3039a1cc4214f0751738db4bc8d30ed82": "56cbd888b5258f1055822576f459a0cd",
".git/objects/20/f18537b9e66cbf491161b7590d2b20d1d99511": "f2cfac5a1593e657a78f4772eb256b75",
".git/objects/22/9ee5147e1191247da8b4b2eb595d4b50ca800d": "723302afa9b4b8de180a53f6f6d363c0",
".git/objects/23/20d14963046afb4be9a1646a057d31fbf0cb0b": "9e69c9796ac156b32fff6c17f2485a1e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/39af1620ad97a6ba054011877e4c9e87d91fb3": "5d46e7ed6b8322a1ac82a39fc0edcd84",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3e/9f18cbbf4b3c7fcd41889c1c080aa1bd53b336": "4eb1ec74b40325a30cb41749f327c9d9",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/02433bdd05c1532b2663af590ccffa5d833296": "b7ef6a17c3af2440df7b03ce73478fda",
".git/objects/48/8aab947b81699cc79ff9b34615bce9235d5c64": "7a8f0252c6f9b415dd395b478755ffcf",
".git/objects/4f/2378003599786a8d21aad85cb568cbc3b33809": "562fd13a54210df3dc4dbe839a140099",
".git/objects/4f/882030b9a1d35e4441b6e51233312521652f58": "55fed6972cce3e7631e2a2ec541c742b",
".git/objects/57/601418924c82fbbbdaea7cb1baa1cad79cac10": "029b70e593008180690693de40777b1b",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/6b/df5e26f382dd149e918cd3f7815dd018c269bc": "cb0342c83886ec7f2d48dfdb4593720f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/72/798e05957e902f7f187891eb0c51ec6f17b168": "107a0326d2b63b3f44303332c801ab25",
".git/objects/73/10c2522e06b1ba1314a89cececcfbfd35e6e87": "043f2f6f765018b096553fb6128d6cf6",
".git/objects/7c/ff5a2883c18f9239e158b3058e3d0ae11f586f": "2bbc461ba2db02b14054f4f322679159",
".git/objects/7e/88b8629d2026043de63e2cfbd731ce27c6b716": "86e1b3913eb1813e6c2242277a211ab3",
".git/objects/80/5366ee6411eff661b959ab22e24a0248e15357": "5f7f0886598a90dff30ef7a7a017f23b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/716732498af45279f910195a10829e943a7440": "8b589ef640703173195b6d89730530a8",
".git/objects/86/8e6c559ea8b55e51c817b183df2ed4db7a43ac": "db2b8c75a9441b948c9473a2512d213a",
".git/objects/87/7fb4b98812d7818ba53c484e731ac7a71949cd": "54309ed1da929fbbefe6e758dda52c62",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/2b58233c7e69ad877e4bf83a703c26c0d7c7ef": "eeb34c6692fc4c14b43b5662e7b9c1a7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/fba0e26761431e7e6ae787208a220ec0372f78": "19e06f26a3583c18f24cc74695b31a05",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/f7437a9a36a363e54cd3966f6250fc677625e8": "fe37c8c97199acf642cff2ad4ba0836c",
".git/objects/9a/3e3b35a2b3ef2a9698275c39ab97c1dc60ebad": "4e0d70a0390e282cd41fc5f8cad377af",
".git/objects/9a/eb6b5e6a28b0d302654f95ef99e03870b71c75": "39f00663647d5005e4db6d1550ad0e5a",
".git/objects/9c/58309278bc6f946084a8cc87133b87add008ac": "6d8f545158871a2b9d21dedf546c1ea8",
".git/objects/9d/4f184ec5befc6b4567e3a8d1761ba6743dcc58": "8fa21aef59b0e1ccf517769432e28d19",
".git/objects/9e/6beedfd3279a9185ba409c7b57a208048ca16a": "ed580d7b9165376647ef8b0df7bfb465",
".git/objects/a0/4ea349304623ac64632a61f8539cb811ef99de": "00a807bc64f8bac16cdb16c22033f374",
".git/objects/a1/7dad2fbdbe3cd5ee76bd6e3b89578a32ee82d2": "1b4442a3ceca965f29771287f8917749",
".git/objects/a4/9a861d32bfa14dd294eca31e423198885f396c": "4942fe84f8d01b5b146c35d86c3fa206",
".git/objects/a8/180c6663674cf7bab7c24b83d2dd96b7dec697": "f64f88c5463fe49cfe67b9de86a613a1",
".git/objects/ac/521fda4536cd992dd293404143f290f32aa2ed": "797fa7e9ae87c72aa5cc646b2535cb11",
".git/objects/ac/975f3a307403797a047d9393254331744ab743": "2909cb0720e4e67757bb69f776773a17",
".git/objects/ad/5cf5887c5bd3d3123c0a3316a19528e6801c60": "1b4d8e71e4c00f1d47bf9efdbcb8a98f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/bcbd94ad2bd663b6449e21f6b842e17a416686": "292021052be494797712e3457b071171",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/ec28f72ebe10429756e9f53134088325771c76": "538594ad79770aee3d024a78efe5c170",
".git/objects/bd/1cc79bf7de75973272e3142286714d4daf9253": "ab124f2544c05438c22cecbd136d2b31",
".git/objects/c0/df23078e5de74a91f2d616e6656d0acba01ac3": "25877ab76490049ded1ce093293c45e1",
".git/objects/c4/944e7ef28c4885c8e56649b75c5d27215b533a": "b36c3700afb26907d8e1ea002e0a1e02",
".git/objects/c5/a49561111075bc7f4f9ce501eac79fa55722da": "91044f8d3656d31ad93f81120385b4bf",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/d5191620fe4356b551133b44ed7984a57feaa0": "2159f47f261fc0b54500590ba6a894ca",
".git/objects/ca/b147a14b2d3aada40e58dfedbc205c44a4f500": "7a48938445adb2b0f154963e232b60f2",
".git/objects/cb/4db0cadc1f5a9b9d5238d505048481cf0a095a": "a8fb559ca5d314ce0e7f0683ee97633a",
".git/objects/cd/8cf58db2d0a6ad98e5f10d6ccbca6147a22826": "b87a2a7d351107ee509c839ecece4275",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/ce/fd3860fbc23e39be85c68da160b0bdac5fe9db": "08d3812584c6ce0c83dc17e49668daf3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/610a4c557cc63bff3e1bbc57d2f32a73142c05": "cdd0b8a9567394f12a9af268d657d33f",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2651af5b8ccd5f20449ce3419b956ee23081b9": "b7845609378ba036c6beec304d1ccd30",
".git/objects/da/59e044364101d2f6d9dc8fb5209be27e56bb49": "39eb0155b8187311201ce8a9645d51e3",
".git/objects/da/c8b7e54adc4b65c53074795b8bdb0cbfa5f963": "59834daf81db4e543f14121d675d4133",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e0/ad299d095387e53711ab601cb47c15eb4a5206": "ec13140d286c27ff8958bbf26e4d7bd4",
".git/objects/e2/46f4abc725a95e83556428d01d629cab64e5c1": "a29064941c48ede707edd8dbb7200120",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/fbe9706dd5f9d922196b1a0b99860d056cc9ce": "96f79bfa2f57ee5412a0ef314aed96bd",
".git/objects/f0/7f3c4afc58aabf9100b1d7e34126b8596a033d": "a23859f2ebb7fba64060c087053a1565",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/41cb72a3f0820b8bdca6d430834365d360fa21": "03a81416b344ba0eaa8056e698b9acbe",
".git/objects/fc/e4f9a78449ec30ecd3d2539797e831fdc57e22": "8d378c03aba6a056530967994ae4c2f6",
".git/objects/fe/ed06cc4a4717929fe8493839ece9efce59a752": "b3d09efb025090519881a5ba942c9b8a",
".git/objects/pack/pack-a100a571bfcf5cecfa107712e9438c029cb418a0.idx": "fad82c6c07dc93dc043d2fa88ef6a2b0",
".git/objects/pack/pack-a100a571bfcf5cecfa107712e9438c029cb418a0.pack": "c4892f92817c4f3582ab295d2c3448d8",
".git/objects/pack/pack-a100a571bfcf5cecfa107712e9438c029cb418a0.rev": "4d203be29644a53a39e5d5320b8c9aea",
".git/ORIG_HEAD": "bcc68d860ecd9c00a699579fb8ab2773",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/REBASE_HEAD": "5cbdfcc6148e908dc519a59a8c9b5640",
".git/refs/heads/ChitraVichar": "5cbdfcc6148e908dc519a59a8c9b5640",
".git/refs/heads/main": "bcc68d860ecd9c00a699579fb8ab2773",
".git/refs/remotes/origin/main": "bcc68d860ecd9c00a699579fb8ab2773",
"assets/AssetManifest.bin": "a80c41def28fd5ea0a6863fb798f6609",
"assets/AssetManifest.bin.json": "45d6ff9d3d2731484ca6d229f019d1bc",
"assets/AssetManifest.json": "2343a1f29e2f16d853a986c554033b1e",
"assets/assets/images/b1.jpg": "ec59bee54f4c53a9bac6d80e23ba71ea",
"assets/assets/images/LOGO.png": "ae2fa8a7b0a5b2ee1ea675b5a06f8be3",
"assets/assets/otp.html": "b383d4742cb7e5929b4cd337c1b09f82",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dfdd1a449236a39a205c9b19f776a063",
"assets/NOTICES": "11cb1f37f63928c74f795c7084a61f67",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9d2da82f7c8c825c350686a1fada0134",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "512ce67bbbf37171d961a7f5720ea795",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"fast2sms_verify.txt": "44ba6d98eeae984d828f2e80e7acd6c3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "a12439368476fd514c9a61a748e0b8ed",
"google67c0b669591df2e3.html": "57f71e16841c44e62bc21bc73fb417b0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b084d8f075fd878e62ad35c84613fcee",
"/": "b084d8f075fd878e62ad35c84613fcee",
"logo.png": "b1d371501510a9f3cc2720236b12d25e",
"main.dart.js": "e31bffe97ea203dae38c2a516b4b76f8",
"manifest.json": "90ce436d5ef18ebccf7ce23d2c6f8be4",
"otp.html": "b383d4742cb7e5929b4cd337c1b09f82",
"render.yaml": "bb8e91a987247b189ca4388cc23fbf8b",
"vercel.json": "279d14993feeafe8adb39fad6b235ff6",
"version.json": "b5b9cf8009b2fb0ad0397f8983509e5d",
"_redirects": "6a02faf7ea2a9584134ffe15779a0e44"};
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
