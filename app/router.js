/**
 * Created by wyq on 17/8/23.
 */
module.exports = app => {
	app.get("/", app.controller.home.index);
	app.get("/my", app.controller.home.hgj);
	app.get('/news', app.controller.news.list);

	app.get("/v1/1", app.controller.v1.fetch);  //curl http://127.0.0.1:7001/v1/1?id=a2
	app.get("/v1/2", app.controller.v1.body_test);  //http://127.0.0.1:7001/v1/2?id=a1

	//curl -b "csrfToken=1fqOohg_XaHHRXaYBmEtIPPL" -H "Accept: application/json" http://localhost:7001/db/new?_csrf=1fqOohg_XaHHRXaYBmEtIPPL -d "name=wyq&pwd=112233"
	//curl http://localhost:7001/db/new?_csrf=1fqOohg_XaHHRXaYBmEtIPPL -d "name=wyq&pwd=112233" (当关闭csrf或egg-security插件时可以使用简略发生方式)
	app.post("/db/new", app.controller.dbUser.createUser);
};