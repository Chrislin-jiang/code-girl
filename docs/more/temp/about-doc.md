
如果你对运行项目和构建项目的命令行觉得很烦，你也可以像我这么做：
"scripts": {
    "dev": "vuepress dev docs", // 本地运行项目 npm run dev
    "build": "vuepress build docs", // 构建项目 nom run build
    "d": "bash deploy.sh" // 部署项目 npm run d
  },

作者：OBKoro1
链接：https://juejin.cn/post/6844903673672237069
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


原来是这样的
"scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },