const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 5501;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/download', (req, res) => {
    const filePath = './public/example.txt'; // Adjust the file path as per your directory structure
    const fileName = 'example.txt'; // Name of the file as it will be downloaded

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('File not found');
            return;
        }

        res.download(filePath, fileName);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});