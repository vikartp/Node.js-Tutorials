// Example: Reading a large file in chunks
const fs = require('fs');

const readStream = fs.createReadStream('./iife.js');
readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes`);
    console.log(chunk.toString());
});

readStream.on('end', () => {
    console.log('Stream ended');
});