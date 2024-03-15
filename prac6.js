const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const filePath = __dirname + req.url;

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('File not found');
        } else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data);
        }
    });
});

const PORT = 5501;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});