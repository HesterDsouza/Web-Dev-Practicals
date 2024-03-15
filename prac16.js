const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Read the HTML file
        fs.readFile('prac16.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page Not Found');
    }
});

const PORT = process.env.PORT || 5501;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
