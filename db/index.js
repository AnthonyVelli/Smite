var mongoose = require('mongoose');
var godModel = require('./schema/godSchema');
var itemModel = require('./schema/itemSchema');

var db = mongoose.connect('mongodb://localhost/smite');

db.connection.on('open', function(){
	console.log('db open!');
});

db.connection.on('error', function(err){
	console.log('db err!');
});



module.exports = {
	Gods: godModel,
	Items: itemModel,
};
