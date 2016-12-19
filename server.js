'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb').MongoClient;

var app = express();

mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {

	if (err) {
		throw new Error('Database failed to connect!');
	} else {
		console.log('MongoDB successfully connected on port 27017.');
	}

	app.use('/scripts', express.static(process.cwd() + '/app/scripts'));
	app.use('/public', express.static(process.cwd() + '/public'));

	routes(app, db);

	var port = 8080;
	app.listen(port, function () {
		console.log('Node.js listening on port ' + port + '...');
	});

});

