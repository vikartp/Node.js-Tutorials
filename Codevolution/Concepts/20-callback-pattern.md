# Callback Pattern in Node.js

## Functions as First-Class Objects

In JavaScript, functions are **first-class objects** - they can be:
- Passed as arguments to other functions
- Returned as values from functions
- Assigned to variables

```javascript
// Function as variable
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Function as argument
function processUser(name, callback) {
    return callback(name);
}

console.log(processUser("Alice", greet)); // "Hello, Alice!"
```

## Callback & Higher-Order Functions

### Definitions
- **Callback Function**: A function passed as an argument to another function
- **Higher-Order Function**: A function that accepts a callback function

```javascript
// Higher-order function
function calculate(a, b, operation) {
    return operation(a, b);
}

// Callback functions
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(5, 3, add));      // 8
console.log(calculate(5, 3, multiply)); // 15
```

## Types of Callbacks

### 1. Synchronous Callbacks
Execute immediately and block the code execution.

```javascript
// Array methods use synchronous callbacks
const numbers = [1, 2, 3, 4, 5];

// map callback executes synchronously
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter callback executes synchronously
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

### 2. Asynchronous Callbacks
Delay execution until a particular time or event occurs.

```javascript
// setTimeout - delays execution
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds (after 2 seconds)
```

## Node.js Asynchronous Examples

### File System Operations
```javascript
const fs = require('fs');

// Asynchronous file reading
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('This runs immediately');
```

### HTTP Requests
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    // This callback runs when a request is received
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from server!');
});

server.listen(3000, () => {
    // This callback runs when server starts listening
    console.log('Server running on port 3000');
});
```

## Error-First Callback Convention

Node.js follows the **error-first callback pattern**:

```javascript
// Standard Node.js callback signature
function nodeStyleCallback(err, result) {
    if (err) {
        // Handle error
        console.error('Error occurred:', err);
        return;
    }
    // Process result
    console.log('Success:', result);
}

// Example usage
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Failed to read file:', err);
        return;
    }
    console.log('File contents:', data);
});
```

## Key Benefits

- ✅ **Non-blocking**: Asynchronous callbacks don't block execution
- ✅ **Event-driven**: Perfect for handling events and I/O operations
- ✅ **Flexibility**: Different behaviors can be passed as callbacks
- ✅ **Reusability**: Same function can work with different callbacks

---

*Callbacks are fundamental to Node.js asynchronous programming, enabling non-blocking I/O operations.*