var express = require('express');
var _ = require ('lodash');
var router = express.Router();
var Gods = require('../../db').Gods;

router.get('/gods', function(req, res, next){
	Gods.find()
	.then(gods => res.send(gods))
	.catch(next);
});

module.exports = router;