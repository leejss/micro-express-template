"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
exports.logger = winston_1.default.createLogger();
const env = "development";
if (env === "development") {
    exports.logger.add(new winston_1.default.transports.Console({
        level: "verbose",
        handleExceptions: true,
    }));
}
process.on("unhandledRejection", (reason, p) => {
    exports.logger.warn("system level exceptions at, Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
});
//# sourceMappingURL=logger.js.map