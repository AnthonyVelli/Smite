'use strict';
import express from 'express';
import api from './api';
import config from './config';
import db from './db';
import {dbURI, port, staticPath} from './variables/dev';


db(dbURI)
.then(db => {
	let app = express();
	config(app, port, staticPath);
	api(app);
})
.catch(err => {
	console.log('ERROR');
	console.error(err);
});


