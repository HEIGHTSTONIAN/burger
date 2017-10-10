var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");
var ehbs = require("express-handlebars");

var port = 3022;

var app = express();
//using other functions for the server
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
//app.engine("express-handlebars", ehbs);
//is a function that server static files, serves the css
//in the static function, path to serve up our public folder
app.use(express.static(path.join(__dirname, "/public")));

require("./controllers/burgers_controllers.js")(app);

var hbs = ehbs.create({
    //defaultLayout: 'your-layout-name',
    //helpers: require("path-to-your-helpers-if-any"),
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(3022, function(){
	console.log("port "+port+" is running, Server works.");
});