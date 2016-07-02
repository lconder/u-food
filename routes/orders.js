var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Orders = mongoose.model('order');
var moment = require('moment');
var moment_timezone = require('moment-timezone');
var request = require('request');



router.get('/', function(req, res, next) {
  Orders.find({status: 1}, function(err, orders){
	  	console.log(orders);
	  	res.json(orders);
  });
});

router.delete('/remove/:id', function(req, res, next){
	Orders.remove({
		_id : req.params.id
	}, function(err, order){
		if(err)
			res.send(err);

		Orders.find({status: 1}, function(err, orders){
			if(err)
				res.send(err);
			res.json(orders);
		});
	});
});

router.post('/', function(req, res, next){
	console.log("create a new Order");
	Orders.create({
		name : req.body.name,
		description : req.body.description,
		price : req.body.price,
		status:1		
	}, function(err, order){

		if(err)
			res.send(err);

		res.io.emit("socketToMe", {data: order});
		res.send({});
	});
});

module.exports = router;
