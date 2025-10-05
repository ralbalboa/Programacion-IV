"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Server {
    app;
    port;
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json({ limit: '150mb' }));
        //cors
        this.app.use((0, cors_1.default)());
    }
    routes() {
        //this.app.use("/orders",userRoute);
        //this.app.use( "/orders/:id",categoryRoute);
        //this.app.use("/orders/:id/cancel",productRouote)
        //this.app.use("/orders?status",restartRoute);
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
//# sourceMappingURL=app.js.map