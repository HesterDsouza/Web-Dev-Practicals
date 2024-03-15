const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('prac14.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/courses') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h2>Courses:</h2><ul><li><a href = "https://www.w3schools.com/html/">HTML</a></li><li><a href = "https://www.w3schools.com/css/">CSS</a></li><li><a href = "https://www.w3schools.com/js/">JS</a></li><li><a href = "https://www.w3schools.com/nodejs/">NodeJS</a></li></ul>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('Page not found');
    }
});

const PORT = 5501;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
