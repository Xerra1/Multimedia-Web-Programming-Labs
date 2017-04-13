const express = require('express');
const path = require('path');
const { Client } = require('pg')
const xmlWriter = require('xml-writer');
const fs = require('fs');
//const pg = require('pg');

const app = express();                          //Loads the express constructor

//Request handler
app.get('/', function(req, res){
    res.send("Why Welcome!<br><br>Type localhost:8081/lab_2/lab2.html <br>or<br>localhost:8081/lab_3/lab3.html to view.");
});

app.listen(8081, function(){                                                                                            //Sets which port the server will be listening from.
    console.log("BOOM! Server is up and running at http://127.0.0.1:8081/ or http://localhost:8081");
    pullData();
});

//Specifies the directory in which the server will host the file. Change the first parameter to the directory on your machine.
app.use(express.static(path.join('C:/Users/Boss Harris/Documents/Semester 8/Multimedia Web Programming', '/Labs')));

function pullData(){
        const client = new Client({                                                  //Instantiate a client with an object filled with its configuration.
            user: 'postgres',
            password: 'bossharris',
            database: 'Cosmetic-Inventory',
            //host: 'localhost',                                                    //Client read the parameters of unspecified fields automatically from the environment variables used by postgres
            //port: 5432
        });

        client.connect(function(err){                                                //Connect client to database, throws error if fail to.
            if (err)
                throw err;
        });
                                                   
        const writeStream = fs.createWriteStream('Inventory.xml');
       
        writeStream.on('close', function(){
            //console.log(fs.readFileSync('Inventory.xml', 'UTF-8'));
            console.log("Data from database has been parsed into XML. I think..")
        });

        xw = new xmlWriter(true, function(string, encoding){                              //Insantiate xml-writer object. True enables indentation
			writeStream.write(string, encoding);
	});

       xw.startDocument('1.0', 'UTF-8').startElement('root');                             //XML Document Design begin here

        const query = client.query("SELECT * FROM product", function(err, result) {

            //console.log(result.rows[0]);                                                //Result is the returned object. Rows is the whole row of a table. prod_name is a column from the table.
            let rowNum = result.rowCount;                                                 //Get the number of rows the database returned, and run it in a for loop according to database
            for(let i = 0; i < rowNum; i++){

                dataObj = {                                                                //Tranfers each row to an object to pass to parseToXML function
                            "name" : result.rows[i].prod_name,
                            "desc" : result.rows[i].prod_desc,
                            "price" : result.rows[i].prod_price,
                            "img" : result.rows[i].prod_image
                        }; 
                parseToXML(dataObj);
            
            }
            xw.endElement();                                                                //End the root element tag
            writeStream.end();                                                              //End the write stream
        });
       

};

function parseToXML(data){                                                      //data is the object which contain the query return from postgres
        xw.startElement('product')
          .writeElement('name', data.name)
          .writeElement('desc', data.desc)
          .writeElement('price', data.price)
          .writeElement('img', data.img)
          .endElement();
};

