/*
Here is where you create all the 
functions that will do the routing for your app, 
and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');
// var hbs = require('express-handlebars');

module.exports = function(app) {
	app.get('/', function (req, res) {
		res.redirect('/burgers');
	});
	
	app.get('/burgers', function (req, res) {
		burgers.all(function (data) {
			console.log(data)
			var hbsObject = { burgers: data };
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
	});
	
	app.post('/burgers/create', function (req, res) {
		burgers.create('burger_name', [req.body.name], function () {
			res.redirect('/burgers');
		});
	});
	
	app.put('/burgers/update/:id', function (req, res) {
		var condition = 'id = ' + req.params.id;
		burgers.update('devoured',req.body.devoured,condition, function () {
			res.redirect('/burgers');
		});
	});
	
	app.delete('/burgers/delete/:id', function (req, res) {
		var condition = 'id = ' + req.params.id;   //params = object property
		burgers.delete(condition, function () {
			res.redirect('/burgers');
		});
	});
};
