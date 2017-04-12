var express = require('express');
var path = require('path');

    var app = express();

//Request handler
app.get('/', function(req, res){
    res.send("Why Welcome!<br><br>Type localhost:8081/lab_1/lab1.html <br>or<br>localhost:8081/lab_2/lab2.html to view.");
});

//Sets which port the server will be listening from.
app.listen(8081, function(){
    console.log("BOOM! Server is up and running at http://127.0.0.1:8081/ or http://localhost:8081");
});

//Specifies the directory in which the server will host the file. Change the first parameter to the directory on your machine.
app.use(express.static(path.join('C:/Users/Boss Harris/Documents/Semester 8/Multimedia Web Programming', '/Labs')));