/**
 * Notes:
 * - The file system (fs) module in Node.js provides an API for interacting with the file system.
 * - It allows you to read, write, and manipulate files and directories.
 */

const fs = require('node:fs');

console.log('First');
// Synchronous file read
const data = fs.readFileSync('./file.txt', 'utf-8');
console.log(data);

console.log('Second');

// Asynchronous file read
fs.readFile('./file.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
    console.log('Asynchronous read completed');
});

console.log('Third');

// Example of writing to a file
fs.writeFileSync('./output.txt', 'Hello from output');

fs.writeFile('./output-async.txt', 'Hello from output async', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('Asynchronous write completed');
});

// By default, writeFile will overwrite the file if it exists. If file does not exist, it will create a new file.
// To append to a file, you can use the 'a' flag.
fs.writeFileSync('./output.txt', '\nAppending this text\n', { flag: 'a' });