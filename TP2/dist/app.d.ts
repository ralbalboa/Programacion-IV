import express from 'express';
declare class Server {
    app: express.Application;
    port: number;
    constructor(port: number);
    middlewares(): void;
    routes(): void;
    start(callback: () => void): void;
}
export default Server;
//# sourceMappingURL=app.d.ts.map