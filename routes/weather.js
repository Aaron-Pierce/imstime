var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/weather', function(req, res, next) {
  res.render('weather', { title: 'Express' });
});

module.exports = router;