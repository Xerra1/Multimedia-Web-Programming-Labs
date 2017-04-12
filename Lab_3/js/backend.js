const express = require('express');
const path = require('path');
const { Client } = require('pg')
//const pg = require('pg');

const app = express();                          //Loads the express constructor

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


const client = new Client({                                //Instantiate a client with an object filled with its configuration.
    user: 'postgres',
    password: 'bossharris',
    database: 'Cosmetic-Inventory',
    //host: 'localhost',                                   //Client read the parameters of unspecified fields automatically from the environment variables used by postgres
    //port: 5432
});

client.connect(function(err){                    //Connect client to database, throws error if fail to.
    if (err)
        throw err;
});


const query = client.query("SELECT * FROM product", function(err, result) {
    console.log(result.rows[0]);                                                //Result is the returned object. Rows is the whole row of a table. prod_name is a column from the table.
});