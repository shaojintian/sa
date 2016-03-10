var express = require('express');
var passport = require('passport');

module.exports = function() {
  var router = express.Router();
  var index = require('./controllers/indexController');

  router.get('/',function(req,res){
    res.render('index');
  });

  return router;
};