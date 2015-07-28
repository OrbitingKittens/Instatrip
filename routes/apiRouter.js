var express = require('express');
var instagram = require('../api/instagram');
var router = express.Router();

// FOR TESTING
var mock = require('../mock');

// GET photo data based on POSTed map coordinates
router.post('/', function(req, res) {

  // FOR TESTING
  console.log(mock.bars);
  res.send(JSON.stringify(mock.bars));

  // var coords = req.body.coords;
  // var responder = function(data){
  //   res.send(JSON.stringify(data));
  // };
  // instagram.obtainInstaData(coords, responder);
});

module.exports = router;
