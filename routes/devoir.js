/**
 * Created by xicunhan on 11/10/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('public/pages/devoir-main.html');
});

router.get('/devoir-m2-transinfo', function(req,res,next){
  res.sendfile('public/pages/devoir-m2-transinfo1.html');
});

router.get('/tp-lzw', function(req,res,next){
  res.sendfile('public/pages/devoir-tp-lzw.html');
});

router.get('/projet-annuel-recordjs', function(req,res,next){
  res.sendfile('public/pages/projet-annuel-recordjs.html');
});
module.exports = router;
