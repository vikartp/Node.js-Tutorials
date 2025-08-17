/**
 * Notes:
 * - This file demonstrates the use of Node.js built-in 'events' module.
 * - It includes two examples: a simple event emitter and a pizza order event emitter.
 * - The first example shows how to create an event emitter, register an event listener, and emit an event.
 * - The second example simulates a pizza order system with multiple listeners for the same event.
 */
const EventEmitter = require('node:events');

/**
 * Example 1
 */
const myEmitter = new EventEmitter();   

myEmitter.on('event', () => {
  console.log('An event occurred!');
});

console.log('Before emitting the event 1');

myEmitter.emit('event');


/**
 * Example 2
 */

const pizzaOrderEvent = new EventEmitter();

// Listener 1
pizzaOrderEvent.on('orderPlaced', (pizzaType, size) => {
  console.log(`Pizza order received: ${pizzaType}, Size: ${size}`);
});

console.log('Before emitting the pizza order event');

pizzaOrderEvent.emit('orderPlaced', 'Margherita', 'large');
pizzaOrderEvent.emit('orderPlaced', 'Pepperoni', 'medium');

// Listener 2
pizzaOrderEvent.on('orderPlaced', () => {
  console.log(`another orderPlaced listener here`);
});

pizzaOrderEvent.emit('orderPlaced', 'Veggie', 'medium');
