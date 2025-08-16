# Module Caching in Node.js

## What is Module Caching?

Node.js **caches modules** after the first time they are loaded. Subsequent `require()` calls return the **same cached instance** instead of re-executing the module.

## How it Works

```javascript
// math.js
console.log("Math module loaded!");

let count = 0;

function increment() {
    return ++count;
}

module.exports = { increment };
```

```javascript
// app.js
const math1 = require('./math'); // Logs: "Math module loaded!"
const math2 = require('./math'); // No log - cached!

console.log(math1.increment()); // 1
console.log(math2.increment()); // 2 (same instance!)
console.log(math1 === math2);   // true - same object
```

## Key Points

- 📦 **First require**: Module is loaded and executed
- 🔄 **Subsequent requires**: Cached version is returned
- 🎯 **Same reference**: All imports point to the same object
- ⚡ **Performance**: Faster loading after first import

## Cache Location

Modules are cached in `require.cache`:

```javascript
console.log(require.cache); // Shows all cached modules

// Clear cache (rarely needed)
delete require.cache[require.resolve('./math')];
```

## Benefits

- ✅ **Performance improvement**
- ✅ **Memory efficiency** 
- ✅ **Consistent state** across imports
- ✅ **Singleton behavior** for modules

---

*Module caching ensures efficient memory usage and consistent behavior across your application.*