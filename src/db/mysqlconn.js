var mysql = require("mysql");


var connection=mysql.createConnection({
    host:"localhost",
    database:"sample_db",
    user:"root",
    password:"root"
});


connection.connect(function(err){
    if(err)
    console.log("not connected ",err)
    else
    console.log("connected! ")
});

