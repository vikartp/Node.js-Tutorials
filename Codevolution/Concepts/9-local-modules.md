# Local Modules in Node.js

## What are Local Modules?

Local modules are custom modules created by developers within their own application. They allow you to organize code into separate files and reuse functionality across your project.

## Creating Local Modules

### Step 1: Create a Module File
```javascript
// math.js
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Private function (not exported)
function helper() {
    return "This stays private";
}

// Export functions using CommonJS
module.exports = {
    add,
    multiply
};
```

### Step 2: Use the Module
```javascript
// app.js
const math = require('./math'); // Include the local module

console.log(math.add(5, 3));      // 8
console.log(math.multiply(4, 6)); // 24
// console.log(math.helper());    // Error: helper is not exported
```

## CommonJS Module Format

Node.js uses the **CommonJS** module format:

- **Export**: `module.exports = { ... }`
- **Import**: `const module = require('./path')`

## Key Benefits

- **🔒 Privacy**: Only expose necessary functionality, keep internal logic private
- **📁 Organization**: Separate concerns into different files
- **♻️ Reusability**: Use the same module in multiple files
- **🧪 Maintainability**: Easier to test and debug individual components

## Example Structure
```
project/
├── app.js
├── math.js
├── utils/
│   ├── string-utils.js
│   └── date-utils.js
```

---

*Local modules are the foundation of modular Node.js applications, enabling clean code organization and functionality sharing.*