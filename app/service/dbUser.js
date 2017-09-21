/**
 * Created by wyq on 17/9/21.
 */
module.exports = app => {
	class User extends app.Service {
		* _create(doc = {name: "test", pwd: "abc123"}) {
			const response = yield this.ctx.model.Users.create(doc);    //Users 为model文件夹下的文件名(首字母要大写)
			return response;
		}

		* _query(condition = {}, field = {}, options = {}) {
			const response = yield this.ctx.model.Users.find(condition, field, options);
			return response;
		}

		* _getOne(condition = {}) {
			const response = yield this.ctx.model.Users.findOne(condition);
			return response;
		}

		* _save(user) {
			const response = yield user.save();
			return response;
		}
	}
	return User;
};