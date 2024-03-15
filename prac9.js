const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');

    // Create the database
    connection.query('CREATE DATABASE IF NOT EXISTS prac9', (err) => {
        if (err) throw err;
        console.log('Database "prac9" created');

        // Use the database
        connection.query('USE prac9', (err) => {
            if (err) throw err;
            console.log('Using database "prac9"');

            // Create the table
            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS customers (
                    name VARCHAR(255),
                    address VARCHAR(255)
                )
            `;

            connection.query(createTableQuery, (err) => {
                if (err) throw err;
                console.log('Table "customers" created');

                var records = [
                    ['Arun', 'Pune'],
                    ['Jack','Mumbai'],
                    ['Priya','Nashik'],
                    ['Amy','Pune']
                ];
                
                if(err) throw err;
                connection.query("INSERT INTO customers(name, address) VALUES?",[records],function(err,result,fields){
                    if(err) throw err;
                    console.log(result); 
                });
                
                if(err) throw err;
                connection.query("SELECT * FROM customers",function(err,result,fields){
                    if(err) throw err;
                    console.log(result); 
                });

                // Close the connection
                connection.end((err) => {
                    if (err) throw err;
                    console.log('Connection closed');
                });
            });
        });
    });
});






