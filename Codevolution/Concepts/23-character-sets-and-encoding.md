# Character Sets and Encoding

## Understanding Binary Data

Computers store and represent **all data in binary format** - a collection of zeros and ones (0s and 1s).

```
Examples of binary data:
01001000  → H
01100101  → e
01101100  → l
01101100  → l
01101111  → o
```

To work with any data, computers must **convert it into its binary representation**.

## Character Sets

### What is a Character Set?

A **character set** is a predefined list of characters where each character is represented by a unique number.

### Common Character Sets

#### ASCII (American Standard Code for Information Interchange)
```
Character → Character Code
'A'       → 65
'B'       → 66
'a'       → 97
'0'       → 48
' '       → 32 (space)
```

#### Unicode
```
Character → Character Code (Unicode)
'A'       → U+0041 (65)
'€'       → U+20AC (8364)
'😀'       → U+1F600 (128512)
'中'       → U+4E2D (20013)
```

### Key Concept
Computers convert **characters to numbers** (character codes) before working with them.

## Character Encoding

### What is Character Encoding?

Character encoding **dictates how to represent a number** (from a character set) **as binary data**, including how many bits to use for each character.

### Popular Encoding Systems

#### UTF-8 (8-bit Unicode Transformation Format)
- **Variable-length encoding** (1-4 bytes per character)
- **Backward compatible** with ASCII
- **Most widely used** on the web

```
Character → Unicode → UTF-8 Binary
'A'       → 65      → 01000001 (1 byte)
'€'       → 8364    → 11100010 10000010 10101100 (3 bytes)
```

#### UTF-16
- **Variable-length encoding** (2 or 4 bytes per character)
- Used by Windows and Java internally

#### ASCII
- **Fixed-length encoding** (1 byte per character)
- Limited to 128 characters

## How It All Works Together

### Step-by-Step Process

1. **Character**: `"Hello"`
2. **Character Set (Unicode)**: 
   ```
   H → 72
   e → 101
   l → 108
   l → 108
   o → 111
   ```
3. **Character Encoding (UTF-8)**:
   ```
   72  → 01001000
   101 → 01100101
   108 → 01101100
   108 → 01101100
   111 → 01101111
   ```
4. **Binary Storage**: `0100100001100101011011000110110001101111`

## Practical Examples in Node.js

### Working with Buffers
```javascript
// Create buffer from string with specific encoding
const buffer = Buffer.from("Hello", "utf8");
console.log(buffer); // <Buffer 48 65 6c 6c 6f>

// Convert buffer back to string
const text = buffer.toString("utf8");
console.log(text); // "Hello"

// View as individual bytes
for (let byte of buffer) {
    console.log(byte.toString(2).padStart(8, '0')); // Binary representation
}
```

### Different Encodings
```javascript
const text = "Hello 世界";

// UTF-8 encoding
const utf8Buffer = Buffer.from(text, "utf8");
console.log("UTF-8:", utf8Buffer.length, "bytes");

// UTF-16 encoding
const utf16Buffer = Buffer.from(text, "utf16le");
console.log("UTF-16:", utf16Buffer.length, "bytes");

// ASCII encoding (will lose non-ASCII characters)
const asciiBuffer = Buffer.from(text, "ascii");
console.log("ASCII:", asciiBuffer.toString("ascii"));
```

## Why This Matters

### 🔍 Understanding Data Storage
- Text files are stored as binary data using character encoding
- Different encodings can result in different file sizes
- Wrong encoding can cause **mojibake** (garbled text)

### 🌐 Web Development
- HTTP headers specify character encoding: `Content-Type: text/html; charset=UTF-8`
- Database columns have character set and collation settings
- APIs need consistent encoding for proper data exchange

### 📁 File Operations
```javascript
const fs = require('fs');

// Read file with specific encoding
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data); // Properly decoded text
});

// Without encoding, you get raw buffer
fs.readFile('data.txt', (err, buffer) => {
    if (err) throw err;
    console.log(buffer); // <Buffer ...>
    console.log(buffer.toString('utf8')); // Convert to text
});
```

## Common Encoding Issues

### Problem: Wrong Encoding
```javascript
// Text encoded as UTF-8 but read as ASCII
const utf8Text = "Café";
const buffer = Buffer.from(utf8Text, "utf8");
const wrongDecoding = buffer.toString("ascii");
console.log(wrongDecoding); // "CafÃ©" (garbled)
```

### Solution: Correct Encoding
```javascript
// Always specify the correct encoding
const correctDecoding = buffer.toString("utf8");
console.log(correctDecoding); // "Café" (correct)
```

## Key Takeaways

> 🔑 **Essential Understanding**:
> 1. **Character Set**: Maps characters to numbers
> 2. **Character Encoding**: Maps numbers to binary data
> 3. **Proper Encoding**: Essential for storing and working with text data

### Best Practices
- ✅ Always use **UTF-8** for modern applications
- ✅ Specify encoding explicitly when reading/writing files
- ✅ Be consistent with encoding across your application
- ✅ Validate and handle encoding errors gracefully

---

*Understanding character sets and encoding is fundamental for handling text data correctly in any programming environment.*