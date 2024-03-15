const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="/upload" method="post" enctype="multipart/form-data">');
        res.write('<h1>File Upload Form</h1>');
        res.write('<input type="file" name="fileToUpload"><br><br>');
        res.write('<input type="submit" value="Upload File">');
        res.write('</form>');
        return res.end();
    } else if (req.url === '/upload' && req.method === 'POST') {
        // Here you can handle the file upload logic
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('File uploaded successfully!');
        return res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('Page not found');
        return res.end();
    }
});

const PORT = 5501;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});