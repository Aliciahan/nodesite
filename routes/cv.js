/**
 * Created by xicunhan on 11/10/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/pages/cv-main.html');
});
router.get('/force', function(req,res,next){
  res.sendfile('public/pages/force.html');
});

module.exports = router;
