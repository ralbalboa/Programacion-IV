"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server = new app_1.default(3000);
server.start(() => {
    //const orden = new Order("1", "m", ["jamon", "queso"], "Calle Falsa 123", "pending")
    //nsole.log(orden)
    console.log("Escuchando en el puerto 3000");
    const nuevaOrden = {
        id: "1",
        orderSize: "m",
        orderStatus: "pending",
        toppings: ["jamon", "queso"],
        address: "Calle Falsa 123"
    };
    console.log(typeof (nuevaOrden));
});
//# sourceMappingURL=index.js.map