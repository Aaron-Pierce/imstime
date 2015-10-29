/**
 * Created by Aaron on 10/29/2015.
 */
var express = require('express');
var router = express.Router();
/* GET users listing. */




router.get('/', function(req, res, next) {


    res.sendfile('./public/teleprompter.html');
});

module.exports = router;

