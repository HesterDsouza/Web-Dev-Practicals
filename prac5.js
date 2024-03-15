const express = require('express');
const fs = require('fs');
const app = express();
const port = 5501;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
 res.sendFile(__dirname + '/prac5.html');
});

app.post('/append', (req, res) => {
 const firstFile = req.body.firstFile;
 const secondFile = req.body.secondFile;

 fs.readFile(firstFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while reading the file.');
    }

    fs.appendFile(secondFile, data, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('An error occurred while appending the file.');
      }

      res.send('The contents of the first file have been appended to the second file.');
    });
 });
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});