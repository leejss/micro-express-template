"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressConfig = void 0;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const routing_controllers_1 = require("routing-controllers");
const HelloWorld_1 = require("../controllers/HelloWorld");
class ExpressConfig {
    constructor() {
        this.app = express_1.default();
        this.middleware();
        this.setUpControllers();
    }
    middleware() {
        // mount middleware
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({
            extended: false,
        }));
        this.app.use(cookie_parser_1.default());
    }
    setUpControllers() {
        routing_controllers_1.useExpressServer(this.app, {
            controllers: [HelloWorld_1.HelloWorld],
        });
    }
}
exports.ExpressConfig = ExpressConfig;
//# sourceMappingURL=Express.js.map