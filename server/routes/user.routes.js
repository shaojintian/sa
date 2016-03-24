var users = require('../controllers/userController');
var passport = require('passport');
module.exports = function(router) {

    router.route('/signup')
    	.get(users.renderSignup)
     	.post(users.signup);

    router.route('/signup/student')
    	.get(users.renderSignupStudent);

    router.route('/signin')
     	.get(users.renderSignin)
     	.post(passport.authenticate('local', {
       		successRedirect: '/',
       		failureRedirect: '/signin',
       		failureFlash: true
     	}));

  	router.get('/signout', users.signout);
};