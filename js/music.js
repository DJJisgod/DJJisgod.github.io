<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="\assets\js\Meting.min.js"></script>/* ============================================================
   本地音乐播放器配置（APlayer）
   音频文件放在 source/music/ 目录
   ============================================================ */

const ap = new APlayer({
  container: document.getElementById('player'),
  fixed: true,            // 固定在页面右下角（悬浮）
  mini: false,            // 是否使用迷你模式
  autoplay: false,        // 是否自动播放（浏览器一般会拦截，建议关闭）
  theme: '#2D8CF0',       // 主题色
  loop: 'all',            // 循环：'all' 全部 / 'one' 单曲 / 'none' 不循环
  order: 'list',          // 顺序：'list' 顺序 / 'random' 随机
  preload: 'none',        // 预加载：'none' 不预载（歌曲较多，避免卡顿）
  volume: 0.7,            // 初始音量 0~1
  mutex: true,            // 多个播放器互斥（同时只播一个）
  listFolded: true,       // 播放列表默认折叠
  listMaxHeight: '300px', // 列表最大高度

  audio: [
    { name: 'オレンジ (Orange)',   artist: '7!!',             url: '/music/7-オレンジ-Orange.ogg' },
    { name: '光るなら (若能绽放光芒)', artist: 'Goose house',     url: '/music/Goose-house-光るなら-若能绽放光芒.ogg' },
    { name: '莫斯科没有眼泪',        artist: 'Twins',           url: '/music/Twins-莫斯科没有眼泪.ogg' },
    { name: '死性不改',            artist: "Twins & Boy'z",    url: '/music/Twins-Boyz-死性不改.ogg' },
    { name: '回到过去',            artist: '周杰伦',            url: '/music/周杰伦-回到过去.ogg' },
    { name: '路小雨',             artist: '周杰伦',            url: '/music/周杰伦-路小雨.ogg' },
    { name: '心墙',              artist: '林俊杰',            url: '/music/林俊杰-心墙.ogg' },
    { name: '爱笑的眼睛',          artist: '林俊杰',            url: '/music/林俊杰-爱笑的眼睛.ogg' },
    { name: '生生',              artist: '林俊杰',            url: '/music/林俊杰-生生.ogg' },
    { name: '记得',              artist: '林俊杰',            url: '/music/林俊杰-记得.ogg' },
    { name: '小酒窝',             artist: '林俊杰 & 蔡卓妍',     url: '/music/林俊杰-蔡卓妍-小酒窝.ogg' },
  ],
});
