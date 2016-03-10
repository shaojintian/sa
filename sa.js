process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var	mongoose = require('./server/config/mongoose'),
	express = require('./server/config/express');

var db = mongoose();
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