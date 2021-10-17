const moment = require('moment');

moment.locale("zh-cn");

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  '@vuepress/back-to-top': true,
  // '@vuepress/google-analytics': {
  //   'ga': secretKeyConf.ga
  // },
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    sidebarDepth: 2,
    collapseList: [
      "/frontend/javascript/",
      "/frontend/css/",
      "/algorithms/data-structures",
	  "/algorithms/algorithm"
    ]
  }
};