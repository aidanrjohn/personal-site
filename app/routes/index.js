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
		});
		
	app.route('/api/app/users')
		.get(function (req,res) {
			var users = db.collection('users');
			users.find({}).toArray((err, results) => {
				if(err) throw err;
				res.send(results);
			});
		});
		
	app.route('/api/app/users')
		.post(function (req, res) {
			var users = db.collection('users');	
			console.log(req.body);
			users.insert(req.body, (err, results) => {
				if(err)throw err;
				res.send(results);
			});
		});
		
	app.route('/api/app/questions')
		.get(function(req, res) {
			var questions = db.collection('questions');
			questions.find({}).toArray((err, results) => {
				if(err) throw err;
				res.send(results);
			});
		});
		
	app.route('/api/app/question')
		.post(function(req, res) {
			var questions = db.collection('questions');
			questions.insert(req.body, (err, results) => {
				if (err) throw err;
				res.send(results);
			});
		});

};
