const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb' 
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL server');

    // Create the database
    connection.query('CREATE DATABASE IF NOT EXISTS prac11', (err) => {
        if (err) throw err;
        console.log('Database "prac11" created');

        // Use the database
        connection.query('USE prac11', (err) => {
            if (err) throw err;
            console.log('Using database "prac11"');

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
                
                const selectQuery = 'SELECT * FROM customers';
                connection.query(selectQuery, (err, result, fields) => {
                    if (err) throw err;
                    console.log('All Records:');
                    console.log(result);

                var delete_query = "DELETE FROM customers WHERE name = 'Amy'";

                connection.query(delete_query, function(err, result){
                    if(err) throw err;
                    console.log("Number of records deleted: "+ result.affectedRows);

                    connection.query(selectQuery, function(err, result){
                        if(err) throw err;
                        console.log("Records after deletion:");
                        console.log(result);

                        connection.end(function(err){
                            if(err) throw err;
                            console.log("Connection closed");
                        });
                   });
               });    
            });
        });
    });
});
});