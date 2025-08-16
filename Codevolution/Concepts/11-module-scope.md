# Module Scope in Node.js

## What is Module Scope?

Module scope in Node.js ensures that each module has its own **private scope**, preventing variable and function name conflicts between different modules.

## How Node.js Achieves Module Scope

Node.js wraps each loaded module with an **Immediately Invoked Function Expression (IIFE)** that creates private scoping.

### Behind the Scenes
When you create a module file, Node.js automatically wraps it:

```javascript
// Your module: math.js
const PI = 3.14159;

function calculateArea(radius) {
    return PI * radius * radius;
}

module.exports = { calculateArea };
```

```javascript
// How Node.js actually executes it (simplified)
(function(exports, require, module, __filename, __dirname) {
    const PI = 3.14159;

    function calculateArea(radius) {
        return PI * radius * radius;
    }

    module.exports = { calculateArea };
})();
```

## Benefits of Module Scope

### 🔒 Variable Isolation
```javascript
// file1.js
const name = "Alice";
console.log(name); // Alice

// file2.js  
const name = "Bob";
console.log(name); // Bob - No conflict!
```

### ♻️ Function Name Reusability
```javascript
// mathUtils.js
function calculate(a, b) {
    return a + b;
}

// stringUtils.js
function calculate(str) {
    return str.length;
}

// No naming conflicts between modules!
```

### 🛡️ Private Variables
```javascript
// counter.js
let count = 0; // Private to this module

function increment() {
    count++;
    return count;
}

function getCount() {
    return count;
}

module.exports = { increment, getCount };
// 'count' variable remains private
```

## Key Takeaway

> **Module scope through IIFE pattern enables proper encapsulation and reusability** - each module gets its own isolated environment, preventing naming conflicts and maintaining clean code organization.

---

*Module scope is fundamental to Node.js architecture, ensuring modules can coexist without interfering with each other.*