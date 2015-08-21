var express = require('express');
var router = express.Router();
/* GET users listing. */




router.get('/', function(req, res, next) {


  res.sendfile('./public/weather.html');
  $.notify("asdf");
});

module.exports = router;
