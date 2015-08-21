var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:dir/:file', function(req, res, next) {

  var dir = req.params.dir,
      file = req.params.file;

  res.sendfile('./public/weather.html');

});

module.exports = router;
