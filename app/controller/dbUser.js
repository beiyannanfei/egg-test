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

		* listUser() {
			const name = this.ctx.query.name;
			let condition = {};
			name ? (condition.name = name) : "";
			const response = yield  this.ctx.service.dbUser._query(condition);
			this.ctx.status = 200;
			return this.ctx.body = response;
		}

		* one() {
			const id = this.ctx.params.id;
			if (!id) {
				this.ctx.status = 400;
				return this.ctx.body = "id not exists";
			}
			let condition = {_id: id};
			try {
				const response = yield this.ctx.service.dbUser._getOne(condition);
				this.ctx.status = 200;
				return this.ctx.body = response;
			} catch (e) {
				this.ctx.status = 400;
				return this.ctx.body = `db err: ${e.message || e}`;
			}
		}

		* save() {
			const id = this.ctx.params.id;
			const newName = this.ctx.query.newname;
			if (!id || !newName) {
				this.ctx.status = 400;
				return this.ctx.body = "param incomplete";
			}
			let condition = {_id: id};
			try {
				let user = yield this.ctx.service.dbUser._getOne(condition);
				user.name = newName;
				let response = yield this.ctx.service.dbUser._save(user);
				this.ctx.status = 200;
				return this.ctx.body = response;
			} catch (e) {
				this.ctx.status = 400;
				return this.ctx.body = `db err: ${e.message || e}`;
			}
		}

		* delUser() {
			const id = this.ctx.params.id;
			if (!id) {
				this.ctx.status = 400;
				return this.ctx.body = "id not exists";
			}
			try {
				let response = yield this.ctx.model.Users.remove({_id: id});    //在controller中直接调用数据库方法
				this.ctx.status = 200;
				return this.ctx.body = response;
			} catch (e) {
				this.ctx.status = 400;
				return this.ctx.body = `db err: ${e.message || e}`;
			}
		}
	}
	return dbUserController;
};