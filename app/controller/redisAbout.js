/**
 * Created by wyq on 17/9/25.
 */
module.exports = app => {
	return class cacheTest extends app.Controller {
		* index() {
			let setRes = yield this.app.redis.set("foo", "bar");
			console.log("===== setRes: %j", setRes);
			let response = yield this.app.redis.get("foo");
			this.ctx.status = 200;
			return this.ctx.body = response;
		}
	}
};