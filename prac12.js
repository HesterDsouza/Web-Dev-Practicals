const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, this is a simple web server!\n');
});

const PORT = 5501;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});