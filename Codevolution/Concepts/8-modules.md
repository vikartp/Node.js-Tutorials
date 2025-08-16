# Modules in Node.js

## What are Modules?

Modules are **encapsulated and reusable chunks of code** that developers create and share within their applications. They help organize code into separate files and enable better code maintainability and reusability.

## Types of Modules

Node.js supports three types of modules:

### 1. 📁 Local Modules
Custom modules created by developers within their application.

```javascript
// math.js (Local module)
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

```javascript
// app.js (Using the local module)
const math = require('./math');

console.log(math.add(5, 3));      // 8
console.log(math.subtract(5, 3)); // 2
```

### 2. 🔧 Built-in Modules
Core modules that come with Node.js installation.

```javascript
const fs = require('fs');          // File system
const http = require('http');      // HTTP server/client
const path = require('path');      // File path utilities
const os = require('os');          // Operating system utilities

// Example usage
console.log(`Platform: ${os.platform()}`);
console.log(`Free memory: ${os.freemem()} bytes`);
```

### 3. 📦 Third-party Modules
External packages installed via npm (Node Package Manager).

```bash
# Install third-party modules
npm install express
npm install lodash
npm install axios
```

```javascript
const express = require('express');  // Web framework
const _ = require('lodash');         // Utility library
const axios = require('axios');      // HTTP client

// Example usage
const app = express();
const numbers = [1, 2, 3, 4, 5];
console.log(_.sum(numbers)); // 15
```

## Module System

### Exporting
```javascript
// Single export
module.exports = function() { /* ... */ };

// Multiple exports
module.exports = {
    function1,
    function2,
    variable1
};

// Named exports
exports.functionName = function() { /* ... */ };
```

### Importing
```javascript
// Import entire module
const module = require('./moduleName');

// Import with destructuring
const { function1, function2 } = require('./moduleName');

// Import built-in modules
const fs = require('fs');
```

## Benefits

- **🔒 Encapsulation**: Keep code organized and prevent global namespace pollution
- **♻️ Reusability**: Use the same code across different parts of the application
- **🧪 Testability**: Easier to test individual components
- **👥 Collaboration**: Teams can work on different modules independently

---

*Modules are fundamental to Node.js development, enabling developers to build scalable and maintainable applications.*