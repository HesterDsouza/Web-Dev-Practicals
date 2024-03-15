const http = require('http');
const myModule = require('./prac17_modules'); // Import your custom module

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Get the current date and time using your custom module
        const dateTime = myModule.getDateTime();

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Current date and time: ${dateTime}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
});

const PORT = process.env.PORT || 5501;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
