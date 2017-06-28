/**
 * Created by xicunhan on 28/06/2017.
 */


var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('http://a-real.me:4000');
});


module.exports = router;
