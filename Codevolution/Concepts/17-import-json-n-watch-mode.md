# Importing JSON & Watch Mode - Revision Notes

## Importing JSON Files

### Method 1: Using require() (CommonJS)
```javascript
// data.json
{
  "name": "John",
  "age": 30,
  "skills": ["JavaScript", "Node.js"]
}

// app.js
const data = require('./data.json');
console.log(data.name); // "John"
console.log(data.age);  // 30
```

### Method 2: Using import (ES Modules)
```javascript
// With assertion (Node.js 17.5+)
import data from './data.json' assert { type: 'json' };

// Alternative for older versions
import { readFileSync } from 'fs';
const data = JSON.parse(readFileSync('./data.json', 'utf8'));
```

### Key Points
- ✅ JSON files are **automatically parsed** into JavaScript objects
- ✅ **Read-only** - modifications don't affect the original file
- ✅ **Cached** like regular modules

## Watch Mode

### What is Watch Mode?
Automatically **restarts** your Node.js application when file changes are detected.

### Using Watch Mode
```bash
# Node.js 18.11+ (built-in)
node --watch app.js

# Node.js 19+ (stable)
node --watch-path=./src app.js

# Watch specific files/directories
node --watch-path=./src --watch-path=./config app.js
```

### Legacy Method (nodemon)
```bash
# Install globally
npm install -g nodemon

# Use nodemon
nodemon app.js

# With specific file extensions
nodemon --ext js,json app.js
```

### Example Usage
```javascript
// app.js
const config = require('./config.json');

console.log('Server starting...');
console.log(`Port: ${config.port}`);
console.log(`Environment: ${config.env}`);

// Make changes to this file and watch it restart automatically!
```

### Watch Mode Benefits
- 🔄 **Auto-restart** on file changes
- ⚡ **Faster development** workflow
- 👀 **Real-time feedback** during coding
- 🎯 **Selective watching** of specific paths

## Quick Commands Reference

```bash
# Import JSON + Watch Mode
node --watch app.js              # Basic watch mode
node --watch-path=./src app.js   # Watch specific directory
nodemon app.js                   # Using nodemon (if installed)

# File structure example
project/
├── app.js
├── config.json
├── package.json
└── src/
    └── utils.js
```

## Common Patterns

### Configuration Files
```javascript
// config.json
{
  "database": {
    "host": "localhost",
    "port": 5432
  },
  "server": {
    "port": 3000
  }
}

// app.js
const config = require('./config.json');
console.log(`Server running on port ${config.server.port}`);
```

### Data Loading
```javascript
// users.json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]

// app.js
const users = require('./users.json');
users.forEach(user => console.log(user.name));
```

---

**Quick Tips:**
- JSON import is perfect for **config files** and **static data**
- Watch mode is essential for **development** workflow
- Use `--watch` for modern Node.js or `nodemon` for older versions