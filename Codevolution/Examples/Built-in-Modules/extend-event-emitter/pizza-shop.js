const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderSequence = 0;
    }

    placeOrder(pizzaType, size) {
        this.orderSequence++;
        console.log(`Order placed: ${pizzaType}, Size: ${size}`);
        this.emit('orderPlaced', this, size);
    }

    getOrderSequence() {
        return this.orderSequence;
    }

}

module.exports = PizzaShop;
