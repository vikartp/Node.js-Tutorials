# HTTP Module in Node.js

## Understanding the Web

### Client-Server Model
The web operates on a simple **client-server model**:

```
Client (Browser) ──── Request ────> Server
                 <─── Response ──── 
```

1. **Client**: Types URL in browser
2. **Server**: Sends back web page data
3. **Communication**: Requires a standard format

## What is HTTP?

**HTTP (Hypertext Transfer Protocol)** is a protocol that defines the format for clients and servers to communicate.

### How HTTP Works
```
1. Client sends HTTP Request
2. Server responds with HTTP Response
```

### Basic HTTP Request/Response
```
Request:  GET /index.html HTTP/1.1
          Host: example.com

Response: HTTP/1.1 200 OK
          Content-Type: text/html
          <html>...</html>
```

## Node.js HTTP Module

Node.js provides a built-in **HTTP module** to create web servers that can handle large volumes of requests.

### Creating a Basic Server
```javascript
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js server!');
});

// Start listening
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

### Handling Different Routes
```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    if (pathname === '/') {
        res.end('<h1>Home Page</h1>');
    } else if (pathname === '/about') {
        res.end('<h1>About Page</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000);
```

## Key Benefits

- ✅ **Built-in**: No external dependencies needed
- ✅ **Scalable**: Handles large volumes of requests
- ✅ **Flexible**: Full control over request/response
- ✅ **Asynchronous**: Non-blocking I/O operations

## Common HTTP Methods

| Method | Purpose | Example |
|--------|---------|---------|
| **GET** | Retrieve data | `GET /users` |
| **POST** | Send data | `POST /users` |
| **PUT** | Update data | `PUT /users/1` |
| **DELETE** | Remove data | `DELETE /users/1` |

---

*The HTTP module is the foundation for building web servers and APIs in Node.js.*