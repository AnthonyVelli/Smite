var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	class: {type: String},
	image: {type: String},
	name: {type: String},
	cost: {type: String},
	description: {type: String},
	startsFrom: {type: String},
	properties: {type: Array}
}, 
{toJSON: {getters: true}, toObject: {getters: true}});

// function returnNumber(){
// 	this.properties.forEach(prop => {
// 		typeof prop[Object.keys(prop)] == 'string' && prop[Object.keys(prop)[0]] = prop[Object.keys(prop)]
// }

module.exports = mongoose.model('items', itemSchema);