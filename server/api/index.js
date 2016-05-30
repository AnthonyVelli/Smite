'use strict';
import godsRouter from './gods';
import itemsRouter from './items';

export default (app => {
	app.use('/api/gods', godsRouter);
	app.use('/api/items', itemsRouter);
	app.get('/', (req, res) => {
		res.sendFile(__dirname+'/front/index.html');
	});

	app.use((error, req, res, next) => {
		res.status(500).send('in error route '+error);
	});

	app.use((req, res, next) => {
		res.sendStatus(500);
	});
});
