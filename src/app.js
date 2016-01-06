var handlebars = require('hbsfy/runtime');
var handlebars_layouts = require('handlebars-layouts');

var express = require('express');
var app = express();

// Register Handlebars Layouts helper
handlebars.registerHelper(handlebars_layouts(handlebars));
handlebars.registerPartial('base', require('./templates/base.hbs'));

// Register middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.cookieParser());

// Custom Parse endpoint
app.get('/', function (req, res) {
  res.send(require('./templates/hello.hbs')());
});

// Attach the Express app to Cloud Code.
app.listen();
