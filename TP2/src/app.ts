import express from 'express';
import cors from 'cors';
import createOrder from './routes/orderRoutes';

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
        // definir rutas
        this.app.use("/orders", createOrder);
        //this.app.use( "/orders/:id",categoryRoute);
        //this.app.use("/orders/:id/cancel",productRouote)
        //this.app.use("/orders?status",restartRoute);
    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}
export default Server;