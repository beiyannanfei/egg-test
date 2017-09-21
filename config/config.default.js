/**
 * Created by wyq on 17/8/23.
 */
exports.keys = "abc123";  //此处改为你自己的 Cookie 安全字符串

// 添加 view 配置
exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks',
	},
};

exports.news = {
	pageSize: 5,
	serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.mongoose = {
	url: 'mongodb://127.0.0.1/egg-testdb',
	options: {}
};

exports.security = {    //关闭csrf安全防范(关闭后post delete put请求可以不携带csrf-token)
	csrf: {
		enable: false
	}
};
