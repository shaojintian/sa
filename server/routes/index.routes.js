module.exports = function(router) {
    var index = require('../controllers/indexController');

    router.get('/',function(req,res){
    	res.render('index');
  	});
};