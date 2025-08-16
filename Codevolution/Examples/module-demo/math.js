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
console.log(helper()); // This will log the private function output
// Export functions using CommonJS
module.exports = {
    add,
    multiply
};