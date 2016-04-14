var express = require('express');
var God = require('./db');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var router = require('./server/api');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('./node_modules'));
app.use(express.static('./front'));


app.use('/api', router);

app.get('/*', function(req, res) {
	res.sendFile(__dirname+'/front/index.html');
});

app.use(function(req, res, next){
	res.sendStatus(500);
});

app.use(function(error, req, res, next){
	res.status(500).send('in error route '+error);
});

var port = 3030;

app.listen(port, function(){
	console.log('Server listening on '+port);
});

module.exports = app;