/**
 * Created by wyq on 17/9/21.
 * 新建collection
 */
module.exports = app => {
	const mongoose = app.mongoose;
	const UserSchmea = new mongoose.Schema({
		name: {type: String},
		pwd: {type: String}
	});
	UserSchmea.index({name: 1}, {name: 'nameIndex', background: true});

	if (!UserSchmea.options.toJSON) {
		UserSchmea.options.toJSON = {};
	}

	UserSchmea.options.toJSON.transform = (doc, ret) => {
		ret.id = ret._id;
		delete ret.__v;
	};

	return mongoose.model("user-test", UserSchmea);   //创建的表名称为user-tests
};



