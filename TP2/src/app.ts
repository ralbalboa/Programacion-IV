import express from 'express';
import cors from 'cors';
import orderRoutes from './routes/orderRoutes';

// Función que crea la app Express SIN levantar el servidor
export function makeApp() {
    const app = express();

    // Middlewares
    app.use(express.json({limit: '150mb'}));
    app.use(cors());

    // Rutas
    app.use("/orders", orderRoutes);

    return app;
}

// Clase Server para producción
class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = makeApp(); // Usa makeApp()
    }

    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}

export default Server;