'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "67ea27e4dbe35f1c060ea2e4cdd2d3a4",
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
".git/index": "6b31b07bf0dce43fd86a26a65bd5fd1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "51e96b80dc8fa0df4fc2541ae2e229d6",
".git/logs/refs/heads/ChitraVichar": "4a362bd62119a31dbe58d09286e8e092",
".git/logs/refs/remotes/origin/ChitraVichar": "c38250fcd768bffe32c337266affbe40",
".git/objects/02/d0d376e7782f8b8937f454a07a4f69b8ccf5d1": "4b6ab0c1ddd308c4166ff14c2a3f2ee3",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/64d20a0414ac12d6be6c3bf0d9d9bc373be2c8": "883e9960f586f1405181f650c809ba2c",
".git/objects/08/3ee9bd0cccc4a0f6930332e3b52ede63f4f265": "65c355cfcb3c86e48f57812e74625a56",
".git/objects/0a/5b416fc53e5cd6818e4ca651b737837a49b895": "715110107a0b94edcc195b63cb551555",
".git/objects/0b/2d4d7e6adce954a708984bfca671dd2fc7f6ce": "2a0dcb9967635075c33d0bb386f43c66",
".git/objects/0c/52c0adaa3f1e654226ce68158b2868d4d3c352": "f5923c5539a2cd7c00cd8aa9a5c82bdd",
".git/objects/0c/5b8aed44bb0f95c92bd846346ac81404d5fe55": "feab519f0058fa6211ababe7c8b2b2a1",
".git/objects/0f/519fdba0e6f2dd45e9014c26d0e92c78f717d0": "dd2e472d5a3d932a7f342efa6ea5414f",
".git/objects/0f/acc1dd6d52f5bba6d6cd700c246ea7abc85fd4": "8e6b0016abfe77d30760ef87f45386ef",
".git/objects/0f/d0ce8ccb757a9f7e52a623ee55c5b503473262": "1f4dcf910bfd02f6b8ab50ac76512c38",
".git/objects/12/a67ad80b8f0f73521a4b147a84e9696bc7a27e": "1f2fb77ea163f8f1153a269695fdf111",
".git/objects/16/093aa4b0101ab9dceb3bdab9117a7aabb3bfcf": "bf50d1950e71e1f21850f25897ab2eb3",
".git/objects/16/91418c72f7b9cffaed3d1e9fe3f619e3d8df64": "d56bcb75f02df2168cad44baa4c4cec5",
".git/objects/17/097e3312832c75028177d28da10f5a50c49651": "2f5fc641a722faee48bfb3f00cfee7a5",
".git/objects/19/8bab3f4cad6c33c7941991073b35f755707c67": "9c2c41d769a2e8663862dd03c58882dc",
".git/objects/19/cdb4212c3c9378ea30b9cd308e133843cb4d6d": "ffe3f2b3185e8cfb17d3e4511851991c",
".git/objects/1b/3dea77d916b489a5585975a20766d6b4c24bcb": "2f92409e2f83e5ee9762d59637320ed0",
".git/objects/1e/e19cc7162226fa361ed91586d6b040eefac1ef": "c7b28084e5d6a522982ae1c08bcfd162",
".git/objects/22/b2e7d9a58c2bf668f1f945310afbb7d1ebc356": "902ba5cd3cc60e4436ff6f5a69a5429a",
".git/objects/22/cc98acb321491443f90bfa2d8a73b3fd8ecc37": "2edfae2fe7eeff76fb10a002572586b1",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/7a58ee3ee12509a495d77ebba1c0c4f5732fc1": "e94cd63d637820a37c8e8540b9f1456f",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/38fe3d85866538a08a61e0785229f72c49e0f5": "a56681dce0e53fea1b87160325cb9bc7",
".git/objects/31/85906bd753f5fa8ef641a3ba30534d0507c582": "19f5b2f73abbcaaea5882feafa2515c8",
".git/objects/33/4fb9fa3c611d274f8e21786a1d8964243d84a2": "11f65660df12bb3359d78f7f7f21d937",
".git/objects/34/61cd1e49883e05b92287767c8fad773c12adeb": "44dce328e10e97bb3a44c629ac0f0764",
".git/objects/39/35d5c55a11aa430c9bbb8e543c3d81576427bc": "0f825a5ff14c542e514924ff665c606d",
".git/objects/39/992dff9433b8c7eb9087a4d2fe9d5cb638f08d": "ce40316b671fe193719c4de398f8bf64",
".git/objects/3a/a6c2d25969a6ebd416d909dbdd55d37a9768e4": "1bbc1161f30530f74d6f2d9aef11c5b7",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/1a28af9a075aa269309d83f47cb42947ce5b34": "40bc20939de1432568a7f978551efb42",
".git/objects/3d/d28e9800d370ee71cb6dacc0b02ff57dbe910c": "f8bff54e8d7103dff4554fdf65e0d9fb",
".git/objects/3e/426d00035d49d24b4a51564ae1de3a08e139e4": "a098bbfc1526d583d18494e8f527f918",
".git/objects/3e/7145721c5135f4650c616bc553656383842513": "7fa909184eaade023cc8085e28fe285b",
".git/objects/3e/9f18cbbf4b3c7fcd41889c1c080aa1bd53b336": "4eb1ec74b40325a30cb41749f327c9d9",
".git/objects/40/1babac530118c5a91c696c7fe5b656c48eaa86": "3e7a44df71b66c56876ac67121588e86",
".git/objects/40/627a754703473a11bf63ba523e6cf20aca5b92": "904f262cf2191af3f10be79553ceb52e",
".git/objects/40/8a10e3390d0d81e9862157759c29bb2345c4ee": "68475f786686606d1283e6bc0a806bf4",
".git/objects/44/188c9b597f420c6628679c78c093b8c3bf3d67": "e44088c8cae4343800ab89c9f124ed39",
".git/objects/44/f270a2be84feb9798ba75cdbfde3ff03e0c7f8": "7d8c40f0b69c9348b926cc202574c3f9",
".git/objects/46/172a74af677bae8876ebddb4b4263ff5aadd6c": "6667fa7a3548e09e92cb2e3e8e7c74f8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/cdfeac7acbdb73ea5bcfadd3611303437ff114": "58cf3cec2f438d6aa2257d3d13f45e81",
".git/objects/4a/a7faf0625ef0ab2487ee861a11e0c8bfedc1da": "41a4de924577062be99f9a278e91011d",
".git/objects/4c/7d43f5bd629223f86663b827b2b4e2adc503b3": "7f2d162e412d6e588dee822d54cdc6b1",
".git/objects/4f/93c193d4f18cd91dcc034e858aacc3d5fc00f3": "c503ceb90595634c88b0c292550e415a",
".git/objects/50/fa0b56396b4525abb5dea9740d5d962e8d89fd": "bdb7f026c368eacb592e5a4198bb5b0a",
".git/objects/53/749cbcf5775a6260c8aff73e9223ca8ef53899": "3a41532c2ddbaf9575285ef1a40ede12",
".git/objects/54/294cd57c6d565333cac017c3ff6d7f4c57c1a8": "ca2470b6d969772001447758404d296a",
".git/objects/54/d0d712b8dd758304ca58a9aaeeac2839bd4d2f": "272d99574cda7ac23ace6d646d14fa2d",
".git/objects/58/1d1e56d28465eff5c044a552cd0a36304230c5": "4e77993e447be7196a0d42a65f33c3f9",
".git/objects/58/46ee448c23c9ab9f6a6c16124e4a08c9f5a30d": "a0b6e39069ac13384e4b5e745076f6cc",
".git/objects/5a/37b57bffa9f1750fb31431f9334db7e4d72abb": "0db266cba659e5977a5aee651175ed2f",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/6a54550d5bdcca4ae495af0234a0e0cef509a1": "a81816f1f8b6148925ea02ab2146bcf5",
".git/objects/61/e94ef95dfef320c801ad5d7377e490f65493dc": "7c73e637d6f4aef569255b710a14b745",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/1140aa7c1a4570f8fa9d04be48241febc8ee06": "1c00f816c14c7f6b047bfe2f2e40581e",
".git/objects/68/37cdf1c43006357c2a5524c64ddff56cfd9cfa": "832d725c66702fd9adc8a8c993030957",
".git/objects/68/3d9828c369f1cdfb5efb63bbc3c0db8b9cc876": "275712e9d1e57b152328793fecd65f7a",
".git/objects/68/45de3fa9e1853718c0d97b75b8a6c5e24e481f": "5428848904ff8bcd7dce50a69ee9be8d",
".git/objects/68/868e57a4b48aee73581afd74ce34cbe462f381": "fe156d747599af463917e84e505792e8",
".git/objects/6a/0fb7d7d20045bc66060a321957d6f5b0b6bbdb": "96c0632b6de58e5a5f7ab6bba1003dae",
".git/objects/6c/486b6279d5348c9ec216248373292c1fb6b93f": "c3372fff424e6e524d7b748ed3cd549f",
".git/objects/6c/d84bcc60cfd6c30d5de02df53f71278ddf74f0": "1203f13faa1b370a6c85aeb663780a49",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/bced7af66bd64594d7a0a766d3a75032ff332a": "1ef1dc6b624d7572c9086865d2742150",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/a7576f592dc78024da9549c9296ee498c27883": "f6bdcd76628c60792de4860e79f6d8cd",
".git/objects/75/7f8295553f36a176285f07748f01eeea6ca370": "995f22f88b60b466ebb0a37dbe94d3a3",
".git/objects/76/4592749f5ec3c52a9f3512f6c1f7e10c8b4966": "d8186a3b08da630daea88639eedaf89a",
".git/objects/77/25a5c0bff469b9d7b81d452590ea1c39ebbd1e": "ec96600f2b4f8c82d994b5368912b7a4",
".git/objects/77/b2f71cda740cc6b8f13e3d6bc2fc4bb25e00c9": "8dae081a913709bf89e2851116d19d59",
".git/objects/79/8979908cba0d6b8b6223d22538c297f80e2362": "ee2edacf9b328e646dca7eb2a27f5468",
".git/objects/7a/b7a9b14a45c08fb1a7c3363fb465ea442bda27": "7602015115639bdcd8e28a9f910afe68",
".git/objects/7e/7ca3c9380edac8d8e1ab079951896cf687ff3e": "9de41aa678247a76ed9f3fc40105b53f",
".git/objects/80/4f2506cd5860405719a92c58f58305b82ba993": "9e5fa4e5fba7034931da9c0ab66f18fa",
".git/objects/81/01c5b320ff60494185ee5a343e1f5eaae6755d": "969320c32d468bccac0e5761c6197be0",
".git/objects/81/864f93a786f23761775d9099b94303e0ccf838": "dde7e1f049ecd653c808d5815c1594fd",
".git/objects/82/4aa0b683c3881ca80f142ec2c165a52e86df68": "f9aedaef784ab0ecf58a1667d9c41561",
".git/objects/82/b4e48a1f0445bced1f939d5812fcdc67ae53e8": "1d95a8271db5a55b4f0d02fe2548d96f",
".git/objects/83/21c17b50b70eef5615eff6c638769dc32e9a60": "5930f0247c0f0ae4f5d7b90569f93331",
".git/objects/83/979b01620fe47bbf7f71b4d92691012f521b30": "6dbfea84a783c9cf6bd846122f3bd745",
".git/objects/85/efce3c1d4f26fb93ed369e2e33ce22618f5f5e": "57d4ba52e21b8a1175cc5d1461ee0eb7",
".git/objects/88/4068245466807968abab727a91228809c22ebd": "f52adb7ffeaa813b161ce295899c7034",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0c8465e9cfc50c572c0dee65665d02455db7bc": "547bef63b9ef70a980f77305a1212c6a",
".git/objects/89/2b58233c7e69ad877e4bf83a703c26c0d7c7ef": "eeb34c6692fc4c14b43b5662e7b9c1a7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c251601a4f145fb9ad6a54fb0b67766a235e72": "c9a3731a29689186608db7f3dbbb474f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8d/05fe11383e411a8bbc42eb1fc074f43861170a": "e560ebf2cf55ebf70ca2c364ec9870c4",
".git/objects/8e/9fac8e8c8ac631ce7022a61a5c6bceb8a378f0": "b2cba12d4eacb75c327eca9fc9551b65",
".git/objects/8f/c5955457c71ac083ab2438ac3ed37df1086156": "5d240a5833ff3055c0bdce8739973902",
".git/objects/91/68e8cf9e19393f3380f5a622d228d04c935245": "2294cb8bad74ff11dd808c571364f21e",
".git/objects/92/e121a5928eb032405a244ac49536941ea9b344": "dfd776ea607e0b6149d3e1e9d9e2e71c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/a4ad73d232a075e49fbd3083557a3b766f8f0b": "b438ccea0b6c87207d5b30878da3bdb6",
".git/objects/9a/98da8f2dbe6d2ee72c1cdd3c83513f6e47dcd6": "f95fb43ddb6de0661c0b4982d86c9598",
".git/objects/9b/6d2c593331bbc1a7af9158089485eba155b6d2": "b6875279b384933624175f3049acf4d9",
".git/objects/9b/9cc7ccd529791f988f75d79ae1ffe749f78cc1": "ef6286815f17cf7ab1e72dfbb38f3cce",
".git/objects/9b/a6a87ede5e7b809a87027311e43dec4d389315": "799550433a2ff164837b22ce276abf47",
".git/objects/a0/d6327bbd409ae8bd57d129b2eab9e6307c6c88": "d215466d425a49fa439669e27bba5d16",
".git/objects/a1/0b90b4bb4677dd877707e6cdf648ea895f74cd": "d77c0d0865cfd51df22343dae3cf66fc",
".git/objects/a1/7dad2fbdbe3cd5ee76bd6e3b89578a32ee82d2": "1b4442a3ceca965f29771287f8917749",
".git/objects/a3/c2c236ec2de68c6cc858e53ba4103c22b862ba": "bca3e4354ddfd4d1568c759441ee6e6e",
".git/objects/a3/e5c116de396bd61ed417dec36e1c14d9644353": "2899b31b44e2f1abcd86d7c983be08b5",
".git/objects/a4/a4aa66dd00a52611672fb60c8987f0e03d2e90": "0d80bee2b6eefc0b228c05dd8b6405ce",
".git/objects/a5/ddc7983814bc1455e2497fe9bc11e5b1de90ea": "f3b76356300a24a946232d9b0ab8b612",
".git/objects/a6/9bd5bf904fde803c3e832df92af5ca1a1205a4": "c27fd6f6b33c921f92e56e5ade3d996e",
".git/objects/a7/f8232233127b31f05365345cf7e459672dffbb": "552bfa97de51d0cddddc560c43066c7b",
".git/objects/a8/85f9089a7f9115dae664fc911db82d2f356f79": "8c21c794d5f04343583c55c63e179b40",
".git/objects/a9/0f92b51825d7fce4eca43a4cf244abdb94b31a": "0c82185c213d003e0ee7ee72c23b241b",
".git/objects/ab/56fa7ef7452cee8809872e1cfb5f4611d9d558": "f754ccc365fe301429195b55d9bfa19d",
".git/objects/ab/6dab507d56a4cb4764bce8534523cdace8e060": "fa852b219dcc03a8bbfdf73d56de3df8",
".git/objects/ad/0180046b5860d522305328e805a71bc33d6031": "bb347ce533b24aea7c2950f871eb5d18",
".git/objects/ad/053724c16923710775d17d2dbe6c4ea5d7727d": "45dfe98381fde9c73245abda986347a7",
".git/objects/ae/b92c1c175c636681b8b692c8d34db1ab606ddc": "b405b30a16594393c94cbe6ced8a4fb7",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/0e30c32e37a416be15dfced50f4a1576a6b51f": "27568e778fe71d1ffa2cc0f00c16600a",
".git/objects/b4/6b0e1acc4855f7726aad02ab5d849983834a12": "d8b7f2ffbeadab0b521dfc283632a2be",
".git/objects/b5/b392b64c4ee17db252d8fba50d97323d3030f4": "83d514ce8954fc475ce13ae0d0bd9423",
".git/objects/b6/7a45051bdef753d0485b2a45813ec64eebfaf8": "0c18b843c8c96d23ae1e77030d724eb2",
".git/objects/b7/3d947f9acb956013509e6a6db5de74ed00a90a": "4af7649034f0bd3aea9c830bd7f5a98c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/162a79e33ba74afe3373713cd0f109e6ad9291": "a84aeda61e302763935fd9684ae1ffd7",
".git/objects/c0/df23078e5de74a91f2d616e6656d0acba01ac3": "25877ab76490049ded1ce093293c45e1",
".git/objects/c1/c82969a4339f10f047d79d8229e9ffe6596911": "bec49541a12eed9263087a74f65cdbfa",
".git/objects/c3/7035b075ef9000220691e391097596d00e85bf": "b80fd021829a0ac86407b57a71ddc413",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/678ba29c2b231f06be24a94cf98ac349a334da": "5c5bb53e0d0ef06e98a22af01bbbe5ec",
".git/objects/c5/7d1f90ebcfdacd81b4d5f45855d31731880645": "622c755218cd5ef4b14d432a43894ad1",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/13991b15a6d745d3e9e50cc1e07630c7e4731e": "1d2475db32d998d0968f43b1955eb987",
".git/objects/cd/f825520c00059d7a22c700f47734df635c0a42": "3d0a689cd0c61574fe8047533ac4cce1",
".git/objects/ce/2460945e0f098f02a96732a9b8b4ab99a824d0": "23d0195bbf903a44c80f354e2f187f89",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d2/fc3d4082f5eb04f547f897933ce0bedaa3d63e": "1b3deca1a5c81f524ef4da7dd72a7926",
".git/objects/d3/f03e7f34eb344414b463d561045dfdbfbf7de0": "1338770b89004781556d28940f96f158",
".git/objects/d4/23b480d6fb0d6b71552893375cba6f91b35a9b": "df6d8af3cddad1ca296b8e605fa693f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/610a4c557cc63bff3e1bbc57d2f32a73142c05": "cdd0b8a9567394f12a9af268d657d33f",
".git/objects/d5/b3998406c9b66af2928023b8ece76d6e7d343d": "f96b3799c003ae8dde1357bc0b24955b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4015cb1c5d0f2ac53ea779d8f8911db955f704": "128a6e374eda86cf9a7e1572718c1be3",
".git/objects/d7/f722442c8dd5cdc7e3406db116259b1fe18906": "11f37202926b2fe0b1e06980d57c2cab",
".git/objects/da/59e044364101d2f6d9dc8fb5209be27e56bb49": "39eb0155b8187311201ce8a9645d51e3",
".git/objects/da/5d2a8b90c63b6230f18820e34643376da64151": "51eec8e8e89450e9de2b6b59479a4881",
".git/objects/da/e3628ca50f5c2ac5dca407c23b7b07c4a0b42f": "856e7a40d3d07df130b3c8d4e32d504f",
".git/objects/dc/e56fd09de5d394ff88a8bbb5e5b593ba69d25a": "030b707f5ff1e6041c26adda7aa8a81c",
".git/objects/dd/5434a142016e7a51f4a96c89c72023d826cdbf": "da65595782d6933836031c2de0240d6f",
".git/objects/e1/88313d5ce477fbb47651bb1c4776851dfedd86": "540bc688a60a5ea283a52ff56ec22725",
".git/objects/e2/95c66a9db5046c6500d34f89eda52d193bf169": "3108f7aebfa3733a4d7b3ff51d9094e0",
".git/objects/e3/f853bc834dc9cfdc7dd66d5a15bc796832873d": "1b99d401d5e4fcb19f392815a23c3d2b",
".git/objects/e6/bd329d0841543c7c00674e58a298342281ef7d": "f1a02ba18714683ef09971d710d1db3c",
".git/objects/e7/911417dfe22b18aa5e7bd333ee49553f3b2dde": "88903cbb26c398aff0842642f52ec3f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/efb04287225ea2952e65525cc2a7dd853b3fdc": "62c4fbf9224c75312a91f051d4a37205",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/b9cd803d4c551160fbc399354428cb2048b8c1": "72897229d77c64b6f8aa5ed2c1a65881",
".git/objects/ef/e40efeba3544c62ae9d6dedb17773909435bbb": "ec0d7357a8f1600ea81485638f593071",
".git/objects/f0/a1711ceb446256da6916aab77d14fb0278b306": "6b1434c1d0237dfa3aae7b70a38c86cd",
".git/objects/f1/5a013c071a18071384fbd7a8615b343738da96": "7ee34857ee60d2c497cb62338b09754b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3b4e9e1fdce5dfd4f2368ff692948cfb1ef0eb": "5af683ca128bd977e6402d3b06bec1f7",
".git/objects/f2/73ff509c78a36d5d875acd85dd2af6eade24d3": "3cc01eb0aa86c390899e6b05f18fee52",
".git/objects/f7/4215bfcc27e7a74eade56743fcbf1451f75611": "432e1b384a7f57ff1d0108a8ddf802b7",
".git/objects/fb/ec084282177cb0ee6c498c819ca88dc18d2a80": "2a69aad775139bdd008468a78757376c",
".git/objects/fd/0887c2e5f59902f2de300933b8e4aaf93b854c": "721c479348e7ae90652669c4bbb47f07",
".git/objects/fd/4801a55cb58e2082e5ddf11b3fb97772701511": "1a27b57443aff76f6db4cc14c2592955",
".git/objects/fd/5cd929df8e8676778febf494a42d0a274ae2da": "8074cf8f2d49c8eabfc16fc102d34bfb",
".git/objects/fe/33a82698df960e91633e3591d341c6ddbfad25": "3205a18a2bdec5ef7479786a8e3b05dd",
".git/objects/fe/ed06cc4a4717929fe8493839ece9efce59a752": "b3d09efb025090519881a5ba942c9b8a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/ChitraVichar": "dc696d62c44c134b40c712c882f5acd7",
".git/refs/remotes/origin/ChitraVichar": "dc696d62c44c134b40c712c882f5acd7",
"assets/AssetManifest.bin": "80d7c4a7cd121b517ef3b12bb6a007f7",
"assets/AssetManifest.bin.json": "c80436bd073dc69e6f80b6819cc50ada",
"assets/AssetManifest.json": "c074487f3689f23cee3992b714beb166",
"assets/assets/images/LOGO.png": "2fe6c685c6b7bc0075463af2031416ce",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "aa8d9c09adbe20e6ec89e04d64f0eaec",
"assets/NOTICES": "d8cb5ddd8adf99e9141ba577f7301bc7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9d2da82f7c8c825c350686a1fada0134",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ea0ccc2b42f110b781887fcd993c3607",
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
"flutter_bootstrap.js": "c8e37a02f6d7118ad0cc070d39548e36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27df8dc2876c7a9d9b529c6a92b856f6",
"/": "27df8dc2876c7a9d9b529c6a92b856f6",
"main.dart.js": "b3091e75f79487154d416e89f7d92038",
"manifest.json": "90ce436d5ef18ebccf7ce23d2c6f8be4",
"version.json": "b5b9cf8009b2fb0ad0397f8983509e5d",
"_redirects.txt": "ef294f0ab439be31e8bcd3741e5509d1"};
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
