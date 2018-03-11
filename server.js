var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
Task = require('./api/models/ListModel'),
bodyparser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vshine');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

var routes = require('./api/routes/ListRoutes');
routes(app);

app.listen(port);

console.log('Servidor iniciado en el puerto: ' + port);