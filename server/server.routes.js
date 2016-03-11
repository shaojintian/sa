var express = require('express');
var passport = require('passport');

module.exports = function() {
  	var router = express.Router();
 
  	require('./routes/index.routes.js')(router);
	require('./routes/user.routes.js')(router);
   
  	return router;
};