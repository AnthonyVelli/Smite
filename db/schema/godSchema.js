var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chalk = require('chalk');
var Promise = require('bluebird');

var db = mongoose.connect('mongodb://localhost:27017/smite');

var godSchema = new Schema({
	God: {type: String, required: true},
	Summary: {type: String},
	Title: {type: String},
	Pantheon: {type: String},
	Type: {type: String},
	Class: {type: String},
	Pros: {type: String},
	Difficulty: {type: String},
	Release_date: {type: String},
	Favor: {type: String},
	Gems: {type: String},
	Voicelines: {type: String},
	Voice_actor: {type: String},
	Health: {type: Number},
	Health_Growth_Rate: {type: String},
	Mana: {type: Number},
	Mana_Growth_Rate: {type: String},
	Speed: {type: Number},
	Speed_Growth_Rate: {type: String},
	Range: {type: Number},
	Range_Growth_Rate: {type: String},
	Attack_Sec: {type: Number},
	Attack_Sec_Growth_Rate: {type: String},
	Damage: {type: Number},
	Damage_Growth_Rate: {type: String},
	Damage_Growth_Rate_2: {type: String},
	Progression: {type: String},
	Physical: {type: Number},
	Physical_Growth_Rate: {type: String},
	Magical: {type: Number},
	Magical_Growth_Rate: {type: String},
	HP5: {type: Number},
	HP5_Growth_Rate: {type: String},
	MP5: {type: Number},
	MP5_Growth_Rate: {type: String}
});

var godModel = mongoose.model('gods', godSchema);


db.connection.on('open', function(){
	console.log('db open!');
});

db.connection.on('error', function(err){
	console.log('db err!');
});
console.log('here');

module.exports = godModel;