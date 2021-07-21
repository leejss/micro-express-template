"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const logger_1 = require("../common/logger");
const Express_1 = require("./Express");
class Application {
    constructor() {
        this.express = new Express_1.ExpressConfig();
        const port = 5000;
        this.server = this.express.app.listen(port, () => {
            logger_1.logger.info(`Server Started! Express: http://localhost:${port}`);
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map