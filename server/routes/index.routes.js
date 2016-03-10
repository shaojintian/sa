module.exports = function(router) {
    var index = require('../controllers/indexController');

    router.get('/',function(req,res){
    	res.render('index',{
		    title: 'Hello World',
		    userFullName: req.user ? req.user.fullName : ''
		});
  	});
};