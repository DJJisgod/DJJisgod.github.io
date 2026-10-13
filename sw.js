/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/10/hello-world/index.html","34116979d2b369cb01f7724904987521"],["/2022/07/10/文章blog-for-test/index.html","7ecedbe9e5f3cfacc95d40c41dcf49f5"],["/2022/07/15/插入排序/index.html","f76853fd356eda24c17fa5af727d1128"],["/2022/07/25/LaTex/index.html","635a8fc16be046a25ab6c59a74e79c3b"],["/2022/07/25/二进制数/index.html","6c046fec132ac8a86502ec9bd7940f2b"],["/2022/07/25/判断素数/index.html","3863601ee6ba2838129cb63fa9584be2"],["/2022/08/29/8-29-Chapter1-1-1-homework/index.html","388e6fd3b7d80b1d5268853aec3e737e"],["/2022/09/06/欧几里得算法/image-20220906201104797.png","bb28ef7f65696e5d97861a0d120ce4b5"],["/2022/09/06/欧几里得算法/index.html","9649b3de84a5e794ecdea48e6f6902a2"],["/2022/09/13/二进制欧几里得算法/index.html","22f612b3a3043a8606d795f1b43ff1fc"],["/2022/09/19/9-19-第二次作业/index.html","384ecfcc099d13a14eb7dd38340ca57c"],["/2022/09/20/拓展欧几里得算法/index.html","ff63626cc75ae35531ba133105b932ae"],["/2022/09/29/第三次作业/index.html","f41752b821f50187cb337c5ad10ec667"],["/2022/10/18/第四次作业/index.html","3bec7831bb7b9c3706204a5ee799fece"],["/2022/11/08/第五次作业/index.html","68cd224eea2a71ea977da4af9e9d9ef9"],["/2022/11/20/第六次作业/index.html","09bdff5845497ffa15b74f7b12ce81eb"],["/2022/11/26/第七次作业/index.html","d066b089751f3fa7328e326458632084"],["/2022/12/17/第八次作业/index.html","57da8fe29049a6fc63a403bc6c46f56d"],["/2023/04/15/CRC检验/index.html","3071dfec36ab151088ac6b616affa2ef"],["/2023/06/13/缘分天注定/image-20230630015133472.png","4577f697d8f3d3be4da0f50463f85b49"],["/2023/06/13/缘分天注定/index.html","44f9ac92a5b009fc94557ea76046cb79"],["/2023/09/18/AI翻唱使用心得/image-20230919090511916.png","1fc49555cade69edc0100a5c5084fe06"],["/2023/09/18/AI翻唱使用心得/image-20230919090942973.png","6b5b57679c79a2670e60192688c7b3a7"],["/2023/09/18/AI翻唱使用心得/image-20230919091116303.png","99b9d446fafb1950420be0bb7f4a24df"],["/2023/09/18/AI翻唱使用心得/image-20230919091253313.png","c3767e0d5e7cca4bf7f93b1ca5cc05f2"],["/2023/09/18/AI翻唱使用心得/image-20230919094231542.png","f745771a6e9dacfd2ca9141e5e0bf73d"],["/2023/09/18/AI翻唱使用心得/image-20230919094300827.png","e03abd0c75c06fdaef4976457eca114b"],["/2023/09/18/AI翻唱使用心得/image-20230919094847403.png","43906097f53346f9a9da9d0eaa18a25d"],["/2023/09/18/AI翻唱使用心得/image-20230919094912394.png","fd6d3a3b2f52b6590d110918533c2681"],["/2023/09/18/AI翻唱使用心得/image-20230919095015887.png","21e9c21049bd26d645b2d47bad870246"],["/2023/09/18/AI翻唱使用心得/image-20230919095226415.png","aed879baf7c782e705b7baea20e9fdbd"],["/2023/09/18/AI翻唱使用心得/image-20230919095358625.png","d436177ea3890c2b7bb04cc5ef11852e"],["/2023/09/18/AI翻唱使用心得/image-20230919095518888.png","e692dd6410673f0d357b156ce3c960e7"],["/2023/09/18/AI翻唱使用心得/image-20230919095655577.png","5995a097d87d0e3bc03b39fdff6406a6"],["/2023/09/18/AI翻唱使用心得/image-20230919095749413.png","f352883ba4699d814a91e2168a0e45f9"],["/2023/09/18/AI翻唱使用心得/image-20230919102540467.png","71145fe060d2c14df39de855b8ff0d27"],["/2023/09/18/AI翻唱使用心得/image-20230919102654557.png","8b3c05b43021710b07960cffe6c456de"],["/2023/09/18/AI翻唱使用心得/image-20230919102836009.png","fa78df89e3a7880ffb0c9da117dabff3"],["/2023/09/18/AI翻唱使用心得/image-20230919102927514.png","47b545b106482f112308d4e175f5d05c"],["/2023/09/18/AI翻唱使用心得/image-20230919103033830.png","ffefdf8f61fe22208a90809eb5aa398c"],["/2023/09/18/AI翻唱使用心得/image-20230919103310588.png","e2e6b7d1de210d79a6bf7c4667072f9f"],["/2023/09/18/AI翻唱使用心得/image-20230919103353941.png","463c4321d9ac67feef928c8d30d6edfb"],["/2023/09/18/AI翻唱使用心得/image-20230919104109364.png","9996c172f7806b526d6e0e7b9d5c4039"],["/2023/09/18/AI翻唱使用心得/image-20230919104534595.png","694313f589454fc77879278d3ad9542a"],["/2023/09/18/AI翻唱使用心得/image-20230919104952534.png","df8bf06f9f27e30188315b26ebf1fd13"],["/2023/09/18/AI翻唱使用心得/image-20230919105338231.png","e25641e81ff760d46f836b3c705af7ac"],["/2023/09/18/AI翻唱使用心得/image-20230919105517684.png","75c8ea88068c5d0ac1f89a777fc4086d"],["/2023/09/18/AI翻唱使用心得/index.html","4dd98b78baaac6383c57222e41066171"],["/2026/10/13/随笔/index.html","3f5e5379f94d6775a7a9f55387ae8e99"],["/404.html","aa5c6006e5f1b1468b107ee52847668b"],["/Jay-Chou/index.html","72055e877bf04405215329e152800aa0"],["/about/index.html","95e6c24c5aa2df5f0eb21e80ef6ebd99"],["/archives/2022/07/index.html","db7aa5c851e0e0e9eecb84c0bdb34d69"],["/archives/2022/08/index.html","a899d1b0de946b5b6a6d9da65e682177"],["/archives/2022/09/index.html","05843549735120e72bc51601d411097c"],["/archives/2022/10/index.html","cad8ddc04cef2266540f52a388a73e01"],["/archives/2022/11/index.html","56f27a29456cd8fee33f52e7f06c02aa"],["/archives/2022/12/index.html","7dd4f9cd7a17496a62140ae55effde8e"],["/archives/2022/index.html","ff8a88fea973edb886b4593be279a35a"],["/archives/2022/page/2/index.html","9e9449c70d358f92d5aa051019de44d7"],["/archives/2023/04/index.html","1999fc2d5ebef01e929297664d653d5d"],["/archives/2023/06/index.html","c7ac16eba10e6da5c4bba7ac66ceb92d"],["/archives/2023/09/index.html","8762cbc11ca166ba61c3083f6baf1fa2"],["/archives/2023/index.html","f853c93cd65f0304c3b33dcb0e159e28"],["/archives/2026/10/index.html","49e854ed4711b1fbd375d2119947814f"],["/archives/2026/index.html","85f1205ab3976f4ff865f9e4a94ad6eb"],["/archives/index.html","41d6c2e596ac014de850e0640cfa01fc"],["/archives/page/2/index.html","f7c22b86534e4c40709cd30c69882d8c"],["/archives/page/3/index.html","38d63f23c41e43c2dc40af3253125e5d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","417f680593c188bba416fb4df9ac3776"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","85cb8eb06470f2496aea3a84e08ab6b0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f3f907841755d20e5bfd43aa13898e06"],["/img/1.jpg","472bf19a2c1420afa3031136b684c246"],["/img/2.jpg","2a50f3d22001ba98a12f368af7fea504"],["/img/3.png","eae58f0fa2d7e581d9e893c370c8ae8c"],["/img/4.jpg","0e8a3850b6eca954ed830dcb0fe2bec0"],["/img/Arknights5.jpg","4699744476b4eb6ff67ac8239501ec63"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/haifufu.jpg","c35edd91fad767989645f900285809e4"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/ltz.jpg","e1f766c4d6239107bf4ee062e3e599cb"],["/img/miumiu1.png","8f7407702efe37e2c032cba297cc99cb"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/skadi.jpg","e0d44a343b8a6c537eaef71338a4ed1e"],["/img/weixin.jpg","a597e032ab6860ccf2db279635c02f4b"],["/index.html","3a1e8a74a2b2f708f927083751bcc1ba"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/music.js","b57856d3ed03204965d6089096652a7f"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","f16d67d28557c9eff2331b833a1f4e49"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","a8e549aa02d1db73abb3fce433ffdd27"],["/page/3/index.html","7e1a2583be041829839dbe100c661540"],["/sw-register.js","7d42594457a355829b1b863f55346e98"],["/tags/CINTA学习笔记/index.html","a062a6a8515aaf02e4154d40bf6c0e57"],["/tags/index.html","66f6641ff26864600a04eb05e4a96cfb"],["/tags/作业/index.html","e7dbcbec6e2716d2e102e08b55885098"],["/tags/作业/page/2/index.html","4aebd562ec73c0092e2459660fae719a"],["/tags/加密文章tag/index.html","d29889f172cbb832e6442c9c63edccd7"],["/tags/学习/index.html","38bcf23bed221d5e0811ead5191c58e5"],["/tags/学习笔记/index.html","9a8b35015e391d74ff5b9547765d3683"],["/tags/影评/index.html","de2db1eb225dd46c0197e304759e93fb"],["/tags/随笔/index.html","e8c9159a0401afaa8861aa8d8ba1de9c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
