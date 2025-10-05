"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const uuid_1 = require("uuid");
const basePrice = {
    s: 3000,
    m: 4000,
    l: 5000,
};
const toppings = 700;
class Order {
    address;
    status;
    orderSize;
    toppings;
    id;
    constructor(id, orderSize, toppings, address, status) {
        this.id = (0, uuid_1.v4)();
        this.orderSize = orderSize;
        this.toppings = toppings;
        this.address = address;
        this.status = status;
    }
    //Getters
    getId() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    getStatus() {
        return this.status;
    }
    getOrderSize() {
        return this.orderSize;
    }
    getToppings() {
        return this.toppings;
    }
    // SETTERS
    setToppings(toppings) {
        if (toppings.length > 4 || toppings.length < 0) {
            this.toppings = toppings;
        }
    }
    setOrderSize(orderSize) {
        this.orderSize = orderSize;
    }
    // METHODS
    calculatePrice() {
        return basePrice[this.orderSize] + (this.toppings.length * toppings);
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map