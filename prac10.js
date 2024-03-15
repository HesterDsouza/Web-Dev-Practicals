const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
    connection.query('CREATE DATABASE IF NOT EXISTS prac10', function(err){
        if(err) throw err;
        console.log("Database Created!");

        connection.query('USE prac10',function(err){
            if (err) throw err;
            console.log("Using database: prac10");

            var students = ("CREATE TABLE IF NOT EXISTS students(roll_no INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), marks INT)");
            connection.query(students, function(err, result){
                if(err) throw err;
                console.log("Table Created!");
            });

            var student_records = [
                [1, 'Arun', 50],
                [2, 'Jack', 55],
                [3, 'Priya', 58],
                [4, 'Amy', 60]
            ];

            connection.query("INSERT INTO students(roll_no, name, marks) VALUES?",[student_records],function(err,result,fields){
                if(err) throw err;
                console.log(result); 
            });

            connection.query("SELECT * FROM students",function(err,result,fields){
                if(err) throw err;
                console.log(result); 
            });
        });
    });
});