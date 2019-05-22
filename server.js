// Dependencies //
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Variables //

// Set Heroku Port or 4000 //
var PORT = process.env.PORT || 4000;
var app = express();

// MiddleWare //
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Handlebars  //
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require("./controllers/sandwich_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT)
});