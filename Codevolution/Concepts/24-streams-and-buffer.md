# Streams and Buffers in Node.js

## Streams

### What is a Stream?
A **stream** is a sequence of data being moved from one point to another over time.

### Key Benefits
- **Chunk Processing**: Data is processed in chunks as it arrives
- **Memory Efficient**: No need to wait for entire data to be available
- **Prevents Overload**: Avoids unnecessary data downloads and memory usage

```javascript
// Example: Reading a large file in chunks
const fs = require('fs');

const readStream = fs.createReadStream('largefile.txt');
readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes`);
});
```

## Buffers

### What is a Buffer?
A **buffer** is an intentionally small area maintained by Node.js to process a stream of data.

### Purpose
- Store arriving data when there's already data being processed
- Handle situations with too little data to process
- Acts like a "waiting area" (similar to a roller coaster queue)

### Buffer Analogy
```
Stream Data → [Buffer Queue] → Processing
     🌊            📦              ⚙️
```

## Working with Buffers

### Creating Buffers
```javascript
// Buffer is a global class (no import needed)
const buffer1 = Buffer.from('Hello');
const buffer2 = Buffer.from('World', 'utf8');
const buffer3 = Buffer.alloc(10); // 10 bytes of zeros
```

### Buffer Methods
```javascript
// Create from string
const buf = Buffer.from('Node.js');
console.log(buf); // <Buffer 4e 6f 64 65 2e 6a 73>

// Convert back to string
console.log(buf.toString()); // "Node.js"
console.log(buf.toString('hex')); // "4e6f64652e6a73"

// Buffer properties
console.log(buf.length); // 7 bytes
```

### Binary Data Representation
```javascript
const buffer = Buffer.from('A');
console.log(buffer); // <Buffer 41>
console.log(buffer[0]); // 65 (ASCII code for 'A')
console.log(buffer[0].toString(16)); // "41" (hexadecimal)
console.log(buffer[0].toString(2)); // "1000001" (binary)
```

## Key Characteristics

### ⚠️ Limited Memory
```javascript
const buf = Buffer.alloc(3);
buf.write('Hello'); // Only first 3 bytes: "Hel"
console.log(buf.toString()); // "Hel"
```

### 🔗 Connection to Encoding
```javascript
// Different encodings produce different buffers
const text = 'Café';
console.log(Buffer.from(text, 'utf8')); // <Buffer 43 61 66 c3 a9>
console.log(Buffer.from(text, 'ascii')); // <Buffer 43 61 66 65>
```

## Stream + Buffer Example
```javascript
const fs = require('fs');

const readStream = fs.createReadStream('data.txt');

readStream.on('data', (buffer) => {
    console.log('Buffer received:', buffer);
    console.log('Data:', buffer.toString());
});

readStream.on('end', () => {
    console.log('Stream ended');
});
```

## Summary

| Concept | Purpose | Usage |
|---------|---------|-------|
| **Stream** | Move data over time | Process large data efficiently |
| **Buffer** | Temporary data storage | Handle binary data and chunks |

---

*Streams and buffers work together to enable efficient data processing in Node.js applications.*