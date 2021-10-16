const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
	base: '/code-girl/',
	title: "如风之枫",
	description: '路阻且长，行则将至',
	head: headConf,
	plugins: pluginConf,
	// theme: 'default-prefers-color-scheme',
	themeConfig: {
		lastUpdated: '上次更新',
		repo: 'Chrislin-jiang/code-girl',
		editLinks: true,
		editLinkText: '编辑文档！',
		docsDir: 'docs',
		nav: navConf,
		smoothScroll: true,
		// defaultTheme: 'light',
		/* algolia: {
		  appId: 'M698VCXCJN',
		  apiKey: '8b552055fb68ffc808bfbd3f98a1dbe2',
		  indexName: 'shanyuhai_documents',
		  algoliaOptions: {
		    hitsPerPage: 10,
		    facetFilters: ""
		  }
		} */
	},
	// postcss: {
	// 	plugins: [
	// 		require('css-prefers-color-scheme/postcss'),
	// 		require('autoprefixer')
	// 	]
	// },
	// 为代码块添加行号
	markdown: {
		lineNumbers: true
	}
}
