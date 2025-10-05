import express from 'express';
import cors from 'cors';


class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.middlewares();
        this.routes();
        
    }
    middlewares(){
        this.app.use(express.json({limit: '150mb'}));
  
        //cors
        this.app.use( cors());
    }
    routes(){
        //this.app.use("/orders",userRoute);
        //this.app.use( "/orders/:id",categoryRoute);
        //this.app.use("/orders/:id/cancel",productRouote)
        //this.app.use("/orders?status",restartRoute);
    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}
export default Server;