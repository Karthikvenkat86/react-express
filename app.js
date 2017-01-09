var express = require('express');
var routes = require('./routes');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', routes.defaultURL);

// app.get('/one', routes.sendOne);

// app.get('/two', routes.sendTwo);

app.listen(3000);


