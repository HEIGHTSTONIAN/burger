var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection=mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8087",
    database: "burgers_db"
  });
}



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

let createTodos = `create table if not exists burgers(
	id int primary key auto_increment,
	title varchar(255)not null,
	completed tinyint(1) not null default 0
)`;

connection.query(createTodos, function(err, results, fields) {
	if (err) {
	console.log(err.message);
	}
});



module.exports = connection;