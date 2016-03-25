module.exports = function(router) {
    var index = require('../controllers/indexController');

    router.route('/')
    	.get(index.render);

};