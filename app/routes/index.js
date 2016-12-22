'use strict';

var path = process.cwd();

module.exports = function (app, db) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/api/map')
		.get(function (req, res) {
			var map = db.collection('site');
			map.find({}).toArray((err, results) => {
				if(err) throw err;
				res.send(results);
			});
		})

};
