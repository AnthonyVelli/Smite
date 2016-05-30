'use strict'; 

import bodyParser from 'body-parser';
import morgan from 'morgan';
import express from 'express';


export default function(app, port, staticPath) {
	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(express.static(staticPath));

	app.listen(port, () => console.log('Server listening on '+port));
}

