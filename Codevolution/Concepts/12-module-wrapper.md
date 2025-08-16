# Module Wrapper

## What is Module Wrapper?

Node.js wraps every module with an **IIFE (Immediately Invoked Function Expression)** before execution.

## The Wrapper Function

```javascript
(function(exports, require, module, __filename, __dirname) {
    // Your module code here
})();
```

## Five Parameters Available

1. **`exports`** - Reference to module.exports
2. **`require`** - Function to import modules
3. **`module`** - Reference to current module
4. **`__filename`** - Absolute path of current file
5. **`__dirname`** - Absolute path of current directory

## Example

```javascript
// Your code: math.js
console.log(__filename);  // Full file path
console.log(__dirname);   // Directory path

const add = (a, b) => a + b;
module.exports = { add };
```

## Purpose

- ✅ Creates **module scope**
- ✅ Provides **built-in variables**
- ✅ Enables **encapsulation**
- ✅ Prevents **global pollution**

---

*Every Node.js module automatically gets these 5 parameters for free!*