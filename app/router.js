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
	app.get("/db/list", app.controller.dbUser.listUser);    //http://127.0.0.1:7001/db/list   curl http://127.0.0.1:7001/db/list?name=bynf
	app.get("/db/one/:id", app.controller.dbUser.one);      //http://127.0.0.1:7001/db/one/59c377394a9a6fe05aabc6f0
	app.put("/db/one/save/:id", app.controller.dbUser.save);  //curl -X PUT http://127.0.0.1:7001/db/one/save/59c377394a9a6fe05aabc6f0?newname=abcdefg
	app.delete("/db/del/:id", app.controller.dbUser.delUser); //curl -X DELETE http://127.0.0.1:7001/db/del/59c377394a9a6fe05aabc6f0

	app.get("/cache/get", app.controller.redisAbout.index);  //curl http://127.0.0.1:7001/cache/get

	app.get("/conf/get", app.controller.configAbout.getConf); //curl http://127.0.0.1:7001/conf/get

	app.get("/log/test", app.controller.logAbout.log); //curl http://127.0.0.1:7001/log/test

	app.get("/env/get", app.controller.configAbout.getEnv);   //curl http://127.0.0.1:7001/env/get    启动服务器 EGG_SERVER_ENV=prod npm run dev
};