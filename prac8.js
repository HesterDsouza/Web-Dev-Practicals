const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');

    // Create the database
    connection.query('CREATE DATABASE IF NOT EXISTS newDb', (err) => {
        if (err) throw err;
        console.log('Database "newDb" created');

        // Use the database
        connection.query('USE newDb', (err) => {
            if (err) throw err;
            console.log('Using database "newDb"');

            // Create the table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    username VARCHAR(255),
                    email VARCHAR(255)
                )
            `;

            connection.query(createTableQuery, (err) => {
                if (err) throw err;
                console.log('Table "users" created');

                // Close the connection
                connection.end((err) => {
                    if (err) throw err;
                    console.log('Connection closed');
                });
            });
        });
    });
});
