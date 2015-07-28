// FOR TESTING
var express = require('express');
var router = express.Router();

var mock = require('../mock');

router.post('/', function(req, res) {
  console.log(mock.bars);
  res.send(JSON.stringify(mock.bars));
});

module.exports = router;