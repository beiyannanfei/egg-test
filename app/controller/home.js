/**
 * Created by wyq on 17/8/23.
 */
module.exports = app => {
	class HomeController extends app.Controller {
		* index() {
			this.ctx.body = "hello egg.js";
		}

		* hgj() {
			return this.ctx.body = "hello my first egg url";
		}
	}
	return HomeController;
};