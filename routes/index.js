var express = require('express');
var router = express.Router();
var ServerArray = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { songArray: ServerArray, title: 'Mixing-in-Key' });
});

router.get('/data', function(req, res, next) {
    res.json(ServerArray);
});

module.exports = router;
