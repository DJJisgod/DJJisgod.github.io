/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/10/hello-world/index.html","385b49bdf4a80b10faa9f739fd7df351"],["/2022/07/10/文章blog-for-test/index.html","3a9df3e4a0e13db7b8fec4c26cc32821"],["/2022/07/15/插入排序/index.html","8df2e9ef3ab7ba5da671bcf7700488aa"],["/2022/07/25/LaTex/index.html","2e63a89a75a01dc45eae20f72557e01e"],["/2022/07/25/二进制数/index.html","5a754b4b47828295cbd082c6d34a9240"],["/2022/07/25/判断素数/index.html","ad6cd09cfcca6cdfe5850f17ff25e65b"],["/2022/08/29/8-29-Chapter1-1-1-homework/index.html","9bbaaa9104d5874d59df8ae2ec1dc166"],["/2022/09/06/欧几里得算法/image-20220906201104797.png","bb28ef7f65696e5d97861a0d120ce4b5"],["/2022/09/06/欧几里得算法/index.html","81ac2ed1bffa00e9a06e988b2d859ae3"],["/2022/09/13/二进制欧几里得算法/index.html","ea3b78f951e7ebeb37a158ff6af07792"],["/2022/09/19/9-19-第二次作业/index.html","ae12e5440a89428cb24102ee144a3b36"],["/2022/09/20/拓展欧几里得算法/index.html","215f8bd0b1ee3ee07b2dbced4fb80a69"],["/2022/09/29/第三次作业/index.html","5cae7f367cc1fdb6dc6630416dd78532"],["/2022/10/18/第四次作业/index.html","e874b026418f6db31e8409509d7528d6"],["/2022/11/08/第五次作业/index.html","e8a2d65d3727ef35681d16c042b33410"],["/2022/11/20/第六次作业/index.html","291e125605229882f050c004e5bf2c4f"],["/2022/11/26/第七次作业/index.html","f5aad54761bea23cafdaf0ec4416d79b"],["/2022/12/17/第八次作业/index.html","a5b57f194050736cf117dceeeac75967"],["/2023/04/15/CRC检验/index.html","516c7df44f2ac4d8aa6e043f5e83a6ca"],["/2023/06/13/缘分天注定/image-20230630015133472.png","4577f697d8f3d3be4da0f50463f85b49"],["/2023/06/13/缘分天注定/index.html","336ba4aeb6478a701383b150878760b6"],["/2023/09/18/AI翻唱使用心得/image-20230919090511916.png","1fc49555cade69edc0100a5c5084fe06"],["/2023/09/18/AI翻唱使用心得/image-20230919090942973.png","6b5b57679c79a2670e60192688c7b3a7"],["/2023/09/18/AI翻唱使用心得/image-20230919091116303.png","99b9d446fafb1950420be0bb7f4a24df"],["/2023/09/18/AI翻唱使用心得/image-20230919091253313.png","c3767e0d5e7cca4bf7f93b1ca5cc05f2"],["/2023/09/18/AI翻唱使用心得/image-20230919094231542.png","f745771a6e9dacfd2ca9141e5e0bf73d"],["/2023/09/18/AI翻唱使用心得/image-20230919094300827.png","e03abd0c75c06fdaef4976457eca114b"],["/2023/09/18/AI翻唱使用心得/image-20230919094847403.png","43906097f53346f9a9da9d0eaa18a25d"],["/2023/09/18/AI翻唱使用心得/image-20230919094912394.png","fd6d3a3b2f52b6590d110918533c2681"],["/2023/09/18/AI翻唱使用心得/image-20230919095015887.png","21e9c21049bd26d645b2d47bad870246"],["/2023/09/18/AI翻唱使用心得/image-20230919095226415.png","aed879baf7c782e705b7baea20e9fdbd"],["/2023/09/18/AI翻唱使用心得/image-20230919095358625.png","d436177ea3890c2b7bb04cc5ef11852e"],["/2023/09/18/AI翻唱使用心得/image-20230919095518888.png","e692dd6410673f0d357b156ce3c960e7"],["/2023/09/18/AI翻唱使用心得/image-20230919095655577.png","5995a097d87d0e3bc03b39fdff6406a6"],["/2023/09/18/AI翻唱使用心得/image-20230919095749413.png","f352883ba4699d814a91e2168a0e45f9"],["/2023/09/18/AI翻唱使用心得/image-20230919102540467.png","71145fe060d2c14df39de855b8ff0d27"],["/2023/09/18/AI翻唱使用心得/image-20230919102654557.png","8b3c05b43021710b07960cffe6c456de"],["/2023/09/18/AI翻唱使用心得/image-20230919102836009.png","fa78df89e3a7880ffb0c9da117dabff3"],["/2023/09/18/AI翻唱使用心得/image-20230919102927514.png","47b545b106482f112308d4e175f5d05c"],["/2023/09/18/AI翻唱使用心得/image-20230919103033830.png","ffefdf8f61fe22208a90809eb5aa398c"],["/2023/09/18/AI翻唱使用心得/image-20230919103310588.png","e2e6b7d1de210d79a6bf7c4667072f9f"],["/2023/09/18/AI翻唱使用心得/image-20230919103353941.png","463c4321d9ac67feef928c8d30d6edfb"],["/2023/09/18/AI翻唱使用心得/image-20230919104109364.png","9996c172f7806b526d6e0e7b9d5c4039"],["/2023/09/18/AI翻唱使用心得/image-20230919104534595.png","694313f589454fc77879278d3ad9542a"],["/2023/09/18/AI翻唱使用心得/image-20230919104952534.png","df8bf06f9f27e30188315b26ebf1fd13"],["/2023/09/18/AI翻唱使用心得/image-20230919105338231.png","e25641e81ff760d46f836b3c705af7ac"],["/2023/09/18/AI翻唱使用心得/image-20230919105517684.png","75c8ea88068c5d0ac1f89a777fc4086d"],["/2023/09/18/AI翻唱使用心得/index.html","b6cfa5f08c896a6af141f6c6e74dff11"],["/2026/10/13/随笔/index.html","34c0b2b001055c53223a9a1164231307"],["/404.html","e406967ca3715cc2a5ea4db5c06c8f1c"],["/Jay-Chou/index.html","0160d066e92d0d4bb560c83c011b868f"],["/about/index.html","57e54cb57309040b19256da482fef60a"],["/archives/2022/07/index.html","b20263935aa1d35fd2f34495e694e504"],["/archives/2022/08/index.html","3806e140b34faf46892ffe523a7eb016"],["/archives/2022/09/index.html","29fa34320fdddfab0ece4653f2b1abff"],["/archives/2022/10/index.html","5376cc2d2eaf65dd7187cc0ab9d0c65a"],["/archives/2022/11/index.html","de81cb0abe4b501df580b66899115b28"],["/archives/2022/12/index.html","6823a55feccda38578ab81904c45a8b3"],["/archives/2022/index.html","b177692b3f142b06445400e257b0f413"],["/archives/2022/page/2/index.html","d6bdf97927bdd4eb96ccc39a18705cfe"],["/archives/2023/04/index.html","1b37fdb32344e5c591d164afbc8fdb75"],["/archives/2023/06/index.html","ca283864de15e36f6fb683e043095894"],["/archives/2023/09/index.html","9d9b37348ceee21968bfb7955d8a9cf1"],["/archives/2023/index.html","f90043fcf161aee63848755657602376"],["/archives/2026/10/index.html","6e4fd5bfd444942c031759be7b6efb4c"],["/archives/2026/index.html","7de0a189c8d70f2e60a25f19354a18d1"],["/archives/index.html","d662a5a1095467c8a4bc1f1316429021"],["/archives/page/2/index.html","722a5852f4d8208becc0dec9f72ea10b"],["/archives/page/3/index.html","102ab56181adb6e9454a7d03833f99fd"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/index.html","e777018f98a264badf6145ff557df9a8"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/highlight-dark.css","be3af4b8abf2074e66acb737867c43dc"],["/css/highlight.css","fdd56de5edd1e833674574fdc74bbfe7"],["/css/main.css","85cb8eb06470f2496aea3a84e08ab6b0"],["/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/music.js","f3f907841755d20e5bfd43aa13898e06"],["/img/Arknights5.jpg","4699744476b4eb6ff67ac8239501ec63"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/haifufu.jpg","c35edd91fad767989645f900285809e4"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/ltz.jpg","e1f766c4d6239107bf4ee062e3e599cb"],["/img/miumiu1.png","8f7407702efe37e2c032cba297cc99cb"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/skadi.jpg","e0d44a343b8a6c537eaef71338a4ed1e"],["/img/weixin.jpg","a597e032ab6860ccf2db279635c02f4b"],["/index.html","9fc1af6b0e07e237be10dcb2f953d62c"],["/js/boot.js","211458bcbad652438aee5e0e8976b86e"],["/js/color-schema.js","fda9ab19205d5873d3710a4cc5bb5ec3"],["/js/events.js","035809ecd3b1aa9612c11c9b0bf71387"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","ad8b55840660267494fd4556b378c68b"],["/js/music.js","b57856d3ed03204965d6089096652a7f"],["/js/plugins.js","85b5700ee52692e268d7ce57a8e3647b"],["/js/utils.js","46155ec85282b5815b2607e8deb1edca"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/links/index.html","01eb7f9bd65b6ef58279f5bc8ba693ce"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9ab5ab2064f770c0a1ca19cf88ec8648"],["/page/3/index.html","d8d36b6a37c1c13b7bb3b944faa38453"],["/sw-register.js","064e0bfac221e9a6526c323afcf717ac"],["/tags/CINTA学习笔记/index.html","14f51afdbcd8e302cc876fa6d6383db9"],["/tags/index.html","acd6aaa77158d7ba612178057dfe8ad7"],["/tags/作业/index.html","a61b69caf73ae088645b086e5c9f1ec8"],["/tags/作业/page/2/index.html","b7a115e3d23dd63984b2810ce9ddd0ff"],["/tags/加密文章tag/index.html","339d8eca575226b91fedf94d860d35c3"],["/tags/学习/index.html","4f5ca3a033d84502437798bd1cb98af1"],["/tags/学习笔记/index.html","c83b2dac11c3a11dd1e21e4f44b08569"],["/tags/影评/index.html","39b621c8e81131395506ff7d332fbc42"],["/tags/随笔/index.html","89268539a11bb20a40fc61ee3dee82be"]];
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
