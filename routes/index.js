var express = require('express');
var router = express.Router();
var ServerArray = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { songrArray: ServerArray, title: 'Mixing-in-Key' });
});

module.exports = router;
