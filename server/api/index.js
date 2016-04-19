var express = require('express');
var _ = require ('lodash');
var router = express.Router();
var Gods = require('../../db').Gods;
var Items = require('../../db').Items;

router.get('/gods', function(req, res, next){
	Gods.find().select('God Class Pros Type Health Health_Growth_Rate Mana Mana_Growth_Rate Speed Speed_Growth_Rate Range Range_Growth_Rate Attack_Sec Attack_Sec_Growth_Rate Damage Damage_Growth_Rate Damage_Growth_Rate_2 Damage_Growth_Rate_Type Damage_Growth_Rate_Inc Progression Physical Physical_Growth_Rate Magical Magical_Growth_Rate HP5 HP5_Growth_Rate MP5 MP5_Growth_Rate')
	.then(gods => res.send(gods))
	.catch(next);
});

router.get('/items', function(req, res, next){
	Items.find()
	.then(items => res.send(items))
	.catch(next);
});

module.exports = router;