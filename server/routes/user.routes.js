module.exports = function(router) {
    var users = require('../controllers/userController');

    router.route('/users')
    	.post(users.create)
    	.get(users.list);

    router.route('/users/:userId')
    	.get(users.read)
    	.put(users.update)
    	.delete(users.delete);

  	router.param('userId', users.userByID);
};