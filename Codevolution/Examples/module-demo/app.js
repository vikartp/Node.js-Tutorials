const math = require('./math'); // Include the local module

console.log(math.add(5, 3));      // 8
console.log(math.multiply(4, 6)); // 24
// console.log(math.helper());    // Error: helper is not exported

// Example of a module with private scope
// This is how Node.js handles module scope(with some extra parameters in the function), allowing you to encapsulate functionality.
(function() {
    const PI = 3.14159;

    function calculateArea(radius) {
        return PI * radius * radius;
    }

    console.log(calculateArea(5)); // 78.53975
})();