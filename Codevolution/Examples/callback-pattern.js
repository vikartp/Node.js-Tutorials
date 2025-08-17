/**
 * Callback Functions: A callback function is a function that is passed as an argument to 
 * another function and is executed after the completion of that function or when that function executes it.
 * This pattern is commonly used in Node.js for handling asynchronous operations.
 * 
 * Higher Order Functions: A higher-order function is a function that either takes one or more functions as
 * arguments or returns a function as its result. In Node.js, many built-in functions and methods are higher-order functions,
 * allowing you to pass in callback functions to handle asynchronous operations.
 * 
 * A function is a first class object in JavaScript, meaning it can be passed as an argument to other functions,
 * returned from other functions, and assigned to variables.
 */


function greet(name) {
  console.log(`Hello, ${name}!`);
}

// This function acts as a higher-order function that takes a callback
function greetUser(callback, name) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    callback(name);
  }, 1000); // Wait for 1 second before calling the callback
}

greetUser(greet, 'Alice'); // Pass the greet function as a callback
greetUser(greet, 'Modiji'); // Pass the greet function as a callback


/**
 * Synchronous callbacks: These are executed immediately within the function that receives them.
 * Example: The function that we pass in map, filter, or forEach methods.
 * Asynchronous callbacks: These are executed after some time, often in response to an event or
 * when a certain condition is met.
 */