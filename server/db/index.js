'use strict';
import Promise from 'bluebird';
import mongoose from 'mongoose';
mongoose.Promise = Promise;

export default function(dbURI) {
	let db = mongoose.connect(dbURI).connection;
	return new Promise(function (resolve, reject) {
	    db.on('open', function () {
	    	resolve(db);
	    });
	    db.on('error', reject);
	});

	
}

