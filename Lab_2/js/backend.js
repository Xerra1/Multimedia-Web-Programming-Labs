var express = require('express');
var path = require('path');

    var app = express();

app.get('/', function(req, res){
    res.send("What do you want..?");
});

app.listen(8081, function(){
    console.log("BOOM! Server is up and running at http://127.0.0.1:8081/ or http://localhost:8081");
});

app.use(express.static(path.join('C:/Users/Boss Harris/Documents/Semester 8/Multimedia Web Programming', '/Labs')));

//Zoomed in directory : app.use(express.static(path.join('C:/Users/Admin/Desktop/Labs', '/Lab 2')));

//Here is an alternate way of specifying the path. 
//app.use(express.static(path.join('C:\\Users\\Boss Harris\\Documents\\Semester 8\\Multimedia Web Programming', '\\Lab 1')));
