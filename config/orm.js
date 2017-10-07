
var connection = require('../config/connection.js');

var orm = {
	all: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	create: function (table,column,values,cb) {
		var columnString = column.toString();
		var valuesString = "'"+values +"'";
		var queryString = 'INSERT INTO ' + table + ' (' + columnString + ') ' + 'VALUES(' + "'" + values + "'" + ');'
		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	update: function  (table, column,newValue,condition, cb) {
		var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + newValue + ' WHERE ' + condition + ';'
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},


	delete: function (table, condition, cb) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};


//orm.all('burgers', function(data){console.log(data);})
//orm.all('burgers', function(aaa){console.log(aaa);})
//orm.update('burgers','burger_name','"michelles farts"','id=1', function(data){console.log(data)})
//orm.update('burgers','devoured',5,'id=1', function(data){console.log(data)})
//orm.delete('burgers','id=5',function(data){console.log(data)})



module.exports = orm;
