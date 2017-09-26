/**
 * Created by wyq on 17/9/20.
 */
module.exports = app => {
	class v1Controller extends app.Controller { //在 Context 对象上，可以通过 ctx.app 访问到 Application 对象
		*fetch() {
			this.ctx.body = `${this.ctx.query.id} value is ${app.cache[this.ctx.query.id]}`;
		}

		*body_test() {
			this.ctx.body = `${this.ctx.query.id} value is ${app.cache[this.ctx.query.id]}`;
			this.ctx.status = 400;
		}
	}
	return v1Controller;
};