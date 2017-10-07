var mysql = require('mysql');
var connection;

/* create a connection */
connection = mysql.createConnection({
	host: 'localhost', 
	user: 'root',
    password:'clearyourhead!@#123',
    database: 'burger_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error has occured');
		return;
	}
	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
});

module.exports = connection;