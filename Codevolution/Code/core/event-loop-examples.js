/**
 * Example 1
 */

setTimeout(() => {
    console.log('Timer 1');
    (function () {
        Promise.resolve().then(() => {
            console.log('IIFE Microtask');
        });
        setTimeout(() => {
            console.log('Nested Timer 1');
            Promise.resolve().then(() => {
                console.log('Nested Microtask 1');
            });
        }, 0)
    })();
    Promise.resolve().then(() => {
        console.log('Microtask 1');
    });
}, 0);

setTimeout(() => {
    console.log('Timer 2');
    Promise.resolve().then(() => {
        console.log('Microtask 2');
    });
}, 0);

setTimeout(() => {
    console.log('Timer 3');
    Promise.resolve().then(() => {
        console.log('Microtask 3');
    });
}, 1000);

Promise.resolve().then(() => {
    console.log('Microtask 4');
});

console.log('Main Task');