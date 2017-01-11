var express = require('express');
var engine = require('ejs-locals');
var path = require('path');


var routes = require('./routes/index');

var app = express();

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);


// view engine setup for JADE
// app.set('views', path.join(__dirname, 'views_jade'));
// app.set('view engine', 'jade');

// view engine setup for EJS
app.set('views', path.join(__dirname, 'views_ejs'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(3000, function() {
  console.log('Express server listening on port 3000');
});

module.exports = app;
