# How to Run Node.js

There are two primary ways to execute Node.js code, each serving different purposes in development and learning.

## Method 1: REPL (Read-Eval-Print Loop)

### What is REPL?

**REPL** stands for **Read-Eval-Print Loop** and provides an interactive command-line interface for executing Node.js code in real-time.

### How to Access REPL

1. **Open Terminal/Command Prompt**
2. **Type and Execute**:
   ```bash
   node
   ```
3. **You'll see the REPL prompt**:
   ```
   Welcome to Node.js v18.17.0.
   Type ".help" for more information.
   >
   ```

### REPL Features

#### ⚡ Interactive Execution
```javascript
> console.log("Hello, Node.js!")
Hello, Node.js!
undefined

> let name = "Developer"
undefined

> `Welcome, ${name}!`
'Welcome, Developer!'

> 2 + 3 * 4
14
```

#### 🔍 Built-in Commands
```javascript
> .help          // Show all REPL commands
> .exit          // Exit REPL (or Ctrl+C twice)
> .clear         // Clear the current context
> .save file.js  // Save current session to file
> .load file.js  // Load and execute a file
```

#### 📝 Multi-line Code Support
```javascript
> function greet(name) {
... return `Hello, ${name}!`;
... }
undefined

> greet("World")
'Hello, World!'
```

### REPL Use Cases

- **Quick Testing**: Test JavaScript expressions and functions
- **Learning**: Experiment with Node.js APIs and features
- **Debugging**: Inspect variables and test logic
- **Calculation**: Perform quick mathematical operations
- **API Exploration**: Test built-in modules and methods

### REPL Example Session
```javascript
> const fs = require('fs')
undefined

> fs.existsSync('package.json')
true

> Math.random()
0.7834529471

> process.version
'v18.17.0'

> global
<ref *1> Object [global] { ... }
```

## Method 2: JavaScript Files

### Creating and Running JS Files

This method involves writing Node.js code in `.js` files and executing them from the command line.

### Step-by-Step Process

#### 1. **Create a JavaScript File**
```javascript
// hello.js
console.log("Hello from Node.js file!");

const name = "Developer";
const message = `Welcome to Node.js, ${name}!`;
console.log(message);

// Using Node.js built-in modules
const os = require('os');
console.log(`Platform: ${os.platform()}`);
console.log(`Architecture: ${os.arch()}`);
```

#### 2. **Run the File**
```bash
node hello.js
```

#### 3. **Expected Output**
```
Hello from Node.js file!
Welcome to Node.js, Developer!
Platform: win32
Architecture: x64
```

### File Execution Examples

#### 📁 Basic File Structure
```
project/
├── app.js
├── utils.js
└── package.json
```

#### 🔧 Simple Application Example
```javascript
// app.js
const path = require('path');
const { calculateArea } = require('./utils');

console.log('=== Node.js Application ===');
console.log(`Current directory: ${process.cwd()}`);
console.log(`Script path: ${__filename}`);
console.log(`Directory: ${__dirname}`);

// Using custom module
const area = calculateArea(5, 10);
console.log(`Rectangle area: ${area}`);
```

```javascript
// utils.js
function calculateArea(length, width) {
    return length * width;
}

function calculatePerimeter(length, width) {
    return 2 * (length + width);
}

module.exports = {
    calculateArea,
    calculatePerimeter
};
```

#### 🏃‍♂️ Running the Application
```bash
node app.js
```

### Advanced File Execution

#### 📋 Command Line Arguments
```javascript
// args-demo.js
console.log('Command line arguments:');
process.argv.forEach((arg, index) => {
    console.log(`${index}: ${arg}`);
});

// Access custom arguments
const customArgs = process.argv.slice(2);
console.log('Custom arguments:', customArgs);
```

```bash
node args-demo.js hello world 123
```

#### 🌍 Environment Variables
```javascript
// env-demo.js
console.log('Environment Variables:');
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'development'}`);
console.log(`PORT: ${process.env.PORT || 3000}`);

// Set custom environment variable
process.env.CUSTOM_VAR = 'Hello from Node.js';
console.log(`CUSTOM_VAR: ${process.env.CUSTOM_VAR}`);
```

## Comparison: REPL vs JavaScript Files

| Feature | REPL | JavaScript Files |
|---------|------|-----------------|
| **Purpose** | Interactive testing & learning | Application development |
| **Persistence** | Session-based (temporary) | File-based (permanent) |
| **Complexity** | Simple expressions & functions | Complete applications |
| **Debugging** | Immediate feedback | Requires console.log or debugger |
| **Reusability** | Limited | High (can be imported/executed) |
| **Best For** | Experimentation, learning | Production code, projects |

## Best Practices

### 🎯 When to Use REPL
- Learning new Node.js concepts
- Testing small code snippets
- Debugging specific functions
- Exploring API documentation
- Quick calculations or data transformations

### 📝 When to Use JavaScript Files
- Building applications or scripts
- Creating reusable modules
- Working on projects with multiple files
- Implementing complex logic
- Production deployments

## Common Commands Summary

### REPL Commands
```bash
node                    # Start REPL
.help                   # Show help
.exit                   # Exit REPL
Ctrl + C (twice)        # Force exit
```

### File Execution Commands
```bash
node filename.js        # Run JavaScript file
node .                  # Run main file from package.json
node -v                 # Check Node.js version
node --help             # Show Node.js help
```

## Troubleshooting Tips

### ❌ Common Issues
1. **"node is not recognized"**: Node.js not installed or not in PATH
2. **"Cannot find module"**: Missing dependencies or incorrect paths
3. **"SyntaxError"**: Invalid JavaScript syntax
4. **"Permission denied"**: File permissions or execution rights

### ✅ Solutions
```bash
# Check Node.js installation
node --version
npm --version

# Install Node.js (if missing)
# Download from https://nodejs.org

# Check current directory
pwd              # Linux/Mac
cd               # Windows

# List files
ls               # Linux/Mac  
dir              # Windows
```

---

*Both REPL and JavaScript files are essential tools in Node.js development. REPL is perfect for learning and experimentation, while JavaScript files are ideal for building real applications.*