/**
 * This file shows example of how to extend the EventEmitter class in Node.js.
 * This uses the built-in 'events' module to create a PizzaShop class that emits events
 * when an order is placed. The DrinkMachine class listens for these events and serves
 * drinks accordingly.
 */

const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on('orderPlaced', (instance, size) => {
    console.log(`Order sequence: ${instance.getOrderSequence()}`);
    drinkMachine.serveDrink(size);
});

pizzaShop.placeOrder('Margherita', 'small');
pizzaShop.placeOrder('Pepperoni', 'large');
