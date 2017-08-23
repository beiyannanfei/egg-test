/**
 * Created by wyq on 17/8/23.
 */
module.exports = app => {
	app.get("/", app.controller.home.index);
};