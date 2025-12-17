const mysql = require('mysql2');


const myConnectionString = "mysql://netuser:netpass@localhost:3306/opis_db";
const connection = mysql.createPool(myConnectionString);

module.exports = connection;