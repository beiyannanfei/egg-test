/**
 * Created by wyq on 17/9/26.
 * 获取配置信息
 */
module.exports = app => {
	return class configController extends app.Controller {
		* getConf() {
			let configInfo = app.config.keys;
			let configDetail = this.config.redis;
			console.log("============== configInfo: %j, configDetail: %j", configInfo, configDetail);
			this.ctx.status = 200;
			this.ctx.body = {configInfo, configDetail};
		}

		* getEnv() {      //获取环境变量
			let env = app.config.env;
			this.logger.info("env is %s", env);
			this.ctx.status = 200;
			this.ctx.body = {env};
		}
	}
};