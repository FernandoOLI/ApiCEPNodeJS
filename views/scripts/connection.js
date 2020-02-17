var mysql = require('mysql');

let arquivos = require('../file.json');
let HOST = new Buffer.from(arquivos.host, "base64").toString("ascii");
let USER = new Buffer.from(arquivos.user, "base64").toString("ascii");
let PASSWORD = new Buffer.from(arquivos.password, "base64").toString("ascii");
let DATABASE = new Buffer.from(arquivos.database, "base64").toString("ascii");
let PORT = new Buffer.from(arquivos.port, "base64").toString("ascii");

var con = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: PORT
});

con.connect(function (err) {
    if (err) {
        console.log(err.message);
        console.log(err.name);
        console.log(err.sqlMessage);
        console.log(err.sqlState);
        console.log(err.sqlStateMarker);
    }
    else {
        console.log("Connected!");
    }
});

module.exports = con;