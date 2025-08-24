const { parentPort } = require('node:worker_threads');

console.log('Worker thread started');
let sum = 0;
for (let i = 0; i < 6 * 1e9; i++) {
    sum += i;
}
parentPort.postMessage(sum);