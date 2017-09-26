/**
 * Created by wyq on 17/9/26.
 * 日志相关
 */
module.exports = app => {
	return class logController extends app.Controller {
		* log() {
			app.logger.debug("=========== app debug");
			app.logger.info("=========== app info");
			app.logger.warn("=========== app warn");
			app.logger.error("=========== app error");

			app.coreLogger.debug("=============== coreLogger.debug");
			app.coreLogger.info("=============== coreLogger.info");
			app.coreLogger.warn("=============== coreLogger.warn");
			app.coreLogger.error("=============== coreLogger.error");

			this.logger.debug("=============== this.logger.debug");
			this.logger.info("=============== this.logger.info");
			this.logger.warn("=============== this.logger.warn");
			this.logger.error("=============== this.logger.error");
			return this.ctx.body = "success";
		}
	}
};


