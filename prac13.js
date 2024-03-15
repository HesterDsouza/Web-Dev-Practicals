var http = require('http');
var formidable = require('formidable');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("Connected to MYSQL!");

    var login_tb = "CREATE TABLE IF NOT EXISTS login(user_name VARCHAR(255), password VARCHAR(255))";

    connection.query(login_tb, function(err, result) {
        if (err) throw err;
        console.log("LogIn Table Created!");

        var login_details = [
            ["hester@gmail.com", "hes123"],
            ["kalpesh@gmail.com", "kalpesh99"],
            ["dean@gmail.com", "dsouza2001"],
            ["suraj@gmail.com", "nair_rinzler"]
        ];

        connection.query("INSERT INTO login(user_name, password) VALUES ?", [login_details], function(err, result, fields) {
            if (err) throw err;
            console.log("Data Inserted");

            http.createServer(function(req, res) {
                if (req.url == '/') {
                    res.writeHead(200, {
                        'Content-type': 'text/html'
                    });
                    res.write("<form action='fapp' method='post' enctype='multipart/form-data'>");
                    res.write("<h1>LogIn Form</h1><br>");
                    res.write("User Name: <input type = 'text' name = 't1'><br>");
                    res.write("Password: <input type = 'text' name = 't2'><br>");
                    res.write("<input type = 'submit' value = 'Login'><br>");
                    res.end();
                } else if (req.url == '/fapp') {
                    var form = new formidable.IncomingForm();
                    form.parse(req, function(err, fields, files) {
                        if (err) throw err;  // Handle potential errors
                
                        var un = fields.t1;
                        var pass = fields.t2;
                
                        res.writeHead(200, {'Content-Type': 'text/html'}); // Set proper headers
                
                        res.write("<h1><center>Hello: " + un + " </center></h1><br>");
                
                        connection.query("SELECT * FROM login where user_name=? and password=?", [un, pass], function(err, result, fields) {
                            if (result.length > 0) {
                                res.end("<h1><center>LOGIN SUCCESS</center></h1>");
                            } else {
                                res.end("<h1><center>LOGIN FAILED</center></h1>");
                            }
                        });
                    });
                }
                 else {
                    res.end("Page Not Found");
                }
            }).listen(5501);

        });
    });
});
