# ES Modules in Node.js

## What are ES Modules?

ES Modules (ECMAScript Modules) use **`export`** and **`import`** keywords instead of CommonJS `module.exports` and `require()`.

## Setup

Add to `package.json`:
```json
{
  "type": "module"
}
```

Or use `.mjs` file extension.

## Export Patterns

### Named Exports
```javascript
// math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;
```

### Default Export
```javascript
// calculator.js
function Calculator() {
    // constructor logic
}

export default Calculator;
```

### Mixed Exports
```javascript
// utils.js
export function helper() {
    return "Helper function";
}

function main() {
    return "Main function";
}

export default main;
```

## Import Patterns

### Named Imports
```javascript
// app.js
import { add, subtract, PI } from './math.js';

console.log(add(5, 3));    // 8
console.log(PI);           // 3.14159
```

### Default Import
```javascript
import Calculator from './calculator.js';

const calc = new Calculator();
```

### Mixed Imports
```javascript
import main, { helper } from './utils.js';

console.log(main());    // "Main function"
console.log(helper());  // "Helper function"
```

### Import All
```javascript
import * as math from './math.js';

console.log(math.add(5, 3));  // 8
console.log(math.PI);         // 3.14159
```

### Destructuring with Renaming
```javascript
import { add as sum, subtract as diff } from './math.js';

console.log(sum(5, 3));   // 8
console.log(diff(5, 3));  // 2
```

## CommonJS vs ES Modules

| Feature | CommonJS | ES Modules |
|---------|----------|------------|
| **Export** | `module.exports` | `export` |
| **Import** | `require()` | `import` |
| **Loading** | Synchronous | Asynchronous |
| **Tree Shaking** | No | Yes |

---

*ES Modules provide modern, standardized syntax for modular JavaScript development.*