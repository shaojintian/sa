process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./server/config/express');
	//mongoose = require('./server/config/mongoose'),

var app = express();
//var passport = passport();

var port = 80;

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});