/**
 * Notes:
 * - Event loop is a C program and is part of libuv.
 * - It's a design pattern that orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js.
 * - User written synchronous JS code takes priority over async code that the runtime would like to execute.
 * - Only after the call stack is empty(all user sync code executed), the event loops comes into the picture
 * 
 * - We use process.nextTick() method to queue into the nextTick queue.
 * - We resolve(.then) or reject(.catch) a Promise to queue into the Promise queue.
 * - We use setTimeout() or setInterval() to queue into the Timer queue.
 * - Execute an async method to queue into the I/O queue.
 * - Use setImmediate() to queue into the Check queue.
 * - Attach a listener to the 'close' event of a stream to queue into the Close queue.
 * - nextTick and Promise queues are executed in between each queue and also in between each callback execution in the timer, I/O and check queues.
 */

function testPhases() {
    console.log('Start');

    Promise.resolve().then(() => {
        console.log('Promise resolved');
    });

    process.nextTick(() => {
        console.log('Next tick callback');
    });

    setTimeout(() => {
        console.log('Timeout callback');
    }, 0);

    setImmediate(() => {
        console.log('Immediate callback');
    });

    console.log('End');
}

// testPhases();

/**
 * Notes:
 * - All callbacks in nextTick queue gets executed before Promise queue
 * - Once execution goes into Promise queue,
 * it will finish all callbacks in Promise queue before coming again to check in nextTick queue
 * - use of process.nextTick is discouraged as it can cause the rest of the event loop to starve
 * - If you endlessly call process.nextTick, the control will never make it past the microtask queue
 * - Control will not leave microtask queue until it finishes all callbacks across nextTick and Promise queues(both in order).
 */
function testMicrotaskQueues() {
    process.nextTick(() => console.log('Next Tick 1'));
    process.nextTick(() => {
        console.log('Next Tick 2');
        process.nextTick(() => console.log('Inner Next Tick inside Tick 2'));
    });
    process.nextTick(() => console.log('Next Tick 3'));

    Promise.resolve().then(() => console.log('Promise Resolve 1'));
    Promise.resolve().then(() => {
        console.log('Promise Resolve 2');
        setTimeout(() => console.log('Timer inside 2'), 0);
        process.nextTick(() => {
            console.log('Inner Next Tick inside Promise 2');
            Promise.resolve().then(() => console.log('Inner Promise inside inner process next tick inside Promise 2'));
        });
        Promise.resolve().then(() => console.log('Inner Promise inside Promise 2'));
    });
    Promise.resolve().then(() => console.log('Promise Resolve 3'));
}

// testMicrotaskQueues();

/**
 * Notes:
 * - All timers are executed in the timers phase.
 * - Timer callbacks are only executed after the current stack is cleared and all microtasks are processed.
 * - Callbacks in microtask queues are executed in between the execution of timer callbacks.
 */
function testTimerQueue() {
    setTimeout(() => console.log('Timer 1'), 0);
    setTimeout(() => {
        console.log('Timer 2');
        Promise.resolve().then(() => console.log('Promise inside Timer 2'));
    }, 0);
    setTimeout(() => console.log('Timer 3'), 0);
    Promise.resolve().then(() => console.log('Promise 1'));
    process.nextTick(() => console.log('Next Tick 1'));
}

// testTimerQueue();

/**
 * Notes:
 * - I/O operations are executed in the I/O phase.
 * - I/O callbacks are only executed after all microtask and timer callbacks are processed.
 * - Callbacks in microtask queues are executed in between the execution of I/O callbacks.
 */
const fs = require('node:fs');
function testIOQueue() {
    // Here timeout doesn't guarantee that it will run before I/O callbacks because setTimeout with 0ms delay isn't actually 0ms.
    // setTimeout(() => {
    //     console.log('Timeout callback 1');
    // }, 0);
    fs.readFile(__filename, (err, data) => {
        if (err) throw err;
        console.log('File read complete');
    });
    process.nextTick(() => console.log('Next Tick 1'));
    Promise.resolve().then(() => console.log('Promise 1'));
    process.nextTick(() => console.log('Next Tick 2'));
    setTimeout(() => {
        console.log('Timeout callback 2');
    }, 0);
}

// testIOQueue();

/**
 * Notes:
 * - setImmediate callbacks are executed in the check phase.
 * - I/O events are polled and callback functions are added to the I/O queue only after the I/O is complete.
 * - When event loop reaches the I/O phase for first time, the I/O queue is empty(event loop needs to poll for I/O events).
 * - So the event loop moves to the next phase which is check phase and executes all setImmediate callbacks and those polled callbacks are executed in next iteration.
 * - Callbacks in microtask queues are executed in between the execution of I/O callbacks.
 * - Check queue callbacks are executed after Microtask, Timer and I/O queues callbacks.
 * - Microtask queues callbacks are executed after I/O callbacks and before Check queue callbacks.
 * - Microtask queues callbacks are executed in between check queue callbacks.
 */
function testCheckQueue() {
    setImmediate(() => console.log('Immediate callback 1'));
    fs.readFile(__filename, (err, data) => {
        if (err) throw err;
        console.log('File read complete');
        setImmediate(() => console.log('Immediate callback inside I/O'));
        Promise.resolve().then(() => console.log('Promise inside I/O'));
        process.nextTick(() => console.log('Next Tick inside I/O'));
    });
    setImmediate(() => {
        console.log('Immediate callback 2');
        Promise.resolve().then(() => console.log('Promise inside Immediate callback 2'));
        process.nextTick(() => console.log('Next Tick inside Immediate callback 2'));
    });
    setImmediate(() => console.log('Immediate callback 3'));
    process.nextTick(() => console.log('Next Tick 1'));
    Promise.resolve().then(() => console.log('Promise 1'));
    setTimeout(() => console.log('Timeout callback 1'), 0);

    for (let i = 0; i < 1e6; i++) { } // Simulate some sync blocking work
}

// testCheckQueue();

/**
 * - When running setTimeout with 0ms delay and setImmediate method,
 * the order of execution is not guaranteed.
 * - Reason: The '0ms' is not actually 0ms due to the way the event loop works.
 * - Once we add a synchronous blocking operation,
 * then setTimeout will be executed before setImmediate with guarantee.
 */
function testCheckQueueEdgeCase() {
    setTimeout(() => {
        console.log('Timeout callback 1');
    }, 0);
    setImmediate(() => {
        console.log('Immediate callback 1');
    });

    // Experiment the behavior with toggling the blocking operation
    for (let i = 0; i < 1e6; i++) { } // Simulate some sync blocking work
}

// testCheckQueueEdgeCase();

/**
 * - Close queue callbacks are executed after all other queues callbacks in a given iteration of the event loop.
 */
function testCloseQueue() {
    const readableStream = fs.createReadStream(__filename);
    readableStream.close();
    readableStream.on('close', () => {
        console.log('Stream closed');
        setImmediate(() => console.log('Immediate callback inside close event'));
        Promise.resolve().then(() => console.log('Promise inside close event'));
        process.nextTick(() => console.log('Next Tick inside close event'));
    });

    setImmediate(() => console.log('Immediate callback 1'));
    setTimeout(() => console.log('Timeout callback 1'), 0);
    Promise.reject().catch(() => console.log('Promise 1'));
    process.nextTick(() => console.log('Next Tick 1'));
}

// testCloseQueue();

function testIOCallbacks() {
    fs.readFile(__filename, (err, data) => {
        if (err) throw err;
        console.log('File read complete1');
        process.nextTick(() => console.log('Inner Next Tick 1'));
        Promise.resolve().then(() => console.log('Inner Promise 1'));
    });
    fs.readFile(__filename, (err, data) => {
        if (err) throw err;
        console.log('File read complete2');
        process.nextTick(() => console.log('InnerNext Tick 2'));
        Promise.resolve().then(() => console.log('Inner Promise 2'));
    });
    setTimeout(() => {
        console.log('Timeout callback 1');
    }, 0);
    Promise.resolve().then(() => console.log('Promise 1'));
    process.nextTick(() => console.log('Next Tick 1'));
}
testIOCallbacks();
