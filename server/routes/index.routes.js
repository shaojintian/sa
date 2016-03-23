module.exports = function(router) {
    var index = require('../controllers/indexController');

    router.get('/',function(req,res){
    	res.render('index',{
		    title: '主页标题',
		    userFullName: req.user ? req.user.fullName : ''
		});
  	});
};