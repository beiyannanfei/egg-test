/**
 * Created by wyq on 17/9/21.
 */
module.exports = app => {
	class dbUserController extends app.Controller {
		* createUser() {
			const name = this.ctx.request.body.name;
			const pwd = this.ctx.request.body.pwd;
			if (!name || !pwd) {
				this.ctx.status = 400;
				return this.ctx.body = "param incomplete";
			}
			const response = yield this.ctx.service.dbUser._create({name, pwd});
			this.ctx.status = 200;
			return this.ctx.body = response;
		}
	}
	return dbUserController;
};