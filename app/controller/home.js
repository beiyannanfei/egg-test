/**
 * Created by wyq on 17/8/23.
 */
module.exports = app => {
	class HomeController extends app.Controller {
		* index() {
			this.ctx.body = "hello egg.js";
		}
	}
	return HomeController;
};