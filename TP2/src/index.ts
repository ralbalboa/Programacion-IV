import Server from "./app";
//import { Order } from "./models/Order";
import { Order } from "./types/orderTypes";

const server = new Server(3000);
server.start(()=>{
    
    //const orden = new Order("1", "m", ["jamon", "queso"], "Calle Falsa 123", "pending")
    //nsole.log(orden)
    console.log("Escuchando en el puerto 3000");
    
    const nuevaOrden:Order ={
    id: "1",
    orderSize: "m",
    orderStatus: "pending",
    toppings: ["jamon", "queso"],
    address: "Calle Falsa 123"
    }
    console.log();
})
