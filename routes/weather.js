var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


  res.sendfile('./public/weather.html');
  res.status(500).json({ error: 'message' })
});

module.exports = router;
