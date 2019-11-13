// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mailer = require('mailer');
var initializePassport = require('./passport-config');
var bcrpt = require('bcrypt');
// Open Server
var PORT = process.env.PORT || 8081;
var app = express();
app.use(express.static('public'));
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
var router = require('./controllers/premiereController.js');
app.use('/', router);
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
