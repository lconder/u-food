var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Payments = mongoose.model('payment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'U-Food' });
});

router.get('/cocina', function(req, res, next) {
	Payments.find({}, function(err, payment){
	  	console.log(payment);
	  	res.render('kitchen', { title: 'U-Food', payments: payment });
  });
  
});

module.exports = router;
