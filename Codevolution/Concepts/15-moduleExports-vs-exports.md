# module.exports vs exports

## The Key Difference

- **`exports`** is just a **reference** to `module.exports`
- **`module.exports`** is what actually gets returned when you `require()` a module

## The Problem with exports

```javascript
// ❌ WRONG - Breaks the reference
exports = {
    name: "John",
    age: 30
};
// This doesn't work! exports now points to a new object
```

```javascript
// ✅ CORRECT - Modifies the original object
exports.name = "John";
exports.age = 30;
// This works because we're modifying the object exports points to module.exports
```

## Safe Approach: Always Use module.exports

```javascript
// ✅ RECOMMENDED - Always works
module.exports = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, I'm ${this.name}`;
    }
};
```

## Visual Explanation

```javascript
// Initially: exports → module.exports → {}
exports.foo = 'bar';        // ✅ Works
module.exports.baz = 'qux'; // ✅ Works

// Breaking the reference:
exports = { new: 'object' }; // ❌ exports now points elsewhere
// module.exports still points to original object
```

## Best Practice

> **Always use `module.exports`** to avoid confusion and ensure your exports work correctly.

---

*`exports` is just a shorthand that can break - stick with `module.exports` for reliability.*