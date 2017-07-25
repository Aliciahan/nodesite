var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/pages/main-page.html');
});

router.get('/lisa', function(req, res, next) {
  res.sendfile('public/lisa/index.html');
});


module.exports = router;
