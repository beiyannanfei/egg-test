/**
 * Created by wyq on 17/9/21.
 */
module.exports = app => {
	class User extends app.Service {
		* _create(doc = {name: "test", pwd: "abc123"}) {
			const response = yield this.ctx.model.Users.create(doc);    //Users 为model文件夹下的文件名(首字母要大写)
			return response;
		}
	}

	return User;
};