var mysql = require('mysql');

var con = mysql.createConnection({
	host: < "18.144.164.244" >,
	user: < "Adesh Pagar" >,
	database: < "ci cd pipiline" >
});

module.exports = con;
