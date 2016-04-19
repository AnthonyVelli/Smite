var mongoose = require('mongoose');
var Schema = mongoose.Schema;


function returnFLOAT(field){
	field = field.replace('%','');
	return parseFloat(field);
}

function returnDecimalFLOAT(field){
	field = field.replace('%','');
	return parseFloat((field / 100)+1);
}

function spaceBetweenWords(field){
	return field.replace(/([a-z])([A-Z])/, (match, p1, p2) => p1+' '+p2);
}

function prosToArray(field){
	var re = /High|Medium/g;
	var lastIndex = 0;
	var prosArray = [];
	var count = 0;
	while ((match = re.exec(field)) != null) {
    	if (count > 0){
    		prosArray.push(field.substring(lastIndex, match.index-1));
    		lastIndex = match.index;	
    	}
      	count++;
	}
	prosArray.push(field.substring(lastIndex, field.length))
	return prosArray;
}

var godSchema = new Schema({
	God: {type: String, required: true},
	Summary: {type: String},
	Title: {type: String},
	Pantheon: {type: String},
	Type: {type: String, get: spaceBetweenWords},
	Class: {type: String},
	Pros: {type: String, get: prosToArray},
	Difficulty: {type: String},
	Release_date: {type: String},
	Favor: {type: String},
	Gems: {type: String},
	Voicelines: {type: String},
	Voice_actor: {type: String},
	Health: {type: Number},
	Health_Growth_Rate: {type: String, get: returnFLOAT},
	Mana: {type: Number},
	Mana_Growth_Rate: {type: String, get: returnFLOAT},
	Speed: {type: Number},
	Speed_Growth_Rate: {type: String, get: returnFLOAT},
	Range: {type: Number},
	Range_Growth_Rate: {type: String, get: returnFLOAT},
	Attack_Sec: {type: Number},
	Attack_Sec_Growth_Rate: {type: String, get: returnDecimalFLOAT},
	Damage: {type: Number},
	Damage_Growth_Rate: {type: String, get: returnFLOAT},
	Damage_Growth_Rate_2: {type: String},
	Progression: {type: String},
	Physical: {type: Number},
	Physical_Growth_Rate: {type: String, get: returnFLOAT},
	Magical: {type: Number},
	Magical_Growth_Rate: {type: String, get: returnFLOAT},
	HP5: {type: Number},
	HP5_Growth_Rate: {type: String, get: returnFLOAT},
	MP5: {type: Number},
	MP5_Growth_Rate: {type: String, get: returnFLOAT}
},
{
	toObject: {virtuals: true, getters: true},
	toJSON: {virtuals: true, getters: true}
});



godSchema.virtual('Damage_Growth_Rate_Type').get(function(){
	return this.Damage_Growth_Rate_2.split(' of ')[1];
});

godSchema.virtual('Damage_Growth_Rate_Inc').get(function(){
	return returnDecimalFLOAT(this.Damage_Growth_Rate_2.split(' of ')[0]);
});

var godModel = mongoose.model('gods', godSchema);




module.exports = godModel;