exports.render = function(req, res) {

	if (!req.user) {
    	res.render('index', {
	      	title: '主页标题 待定',
    	});
  	} else {
  		if (req.session.lastVisit) {
    		console.log(req.session.lastVisit);
  		}
  		req.session.lastVisit = new Date();

    	res.render('index', {
	      	title: '主页标题 待定',
	      	user: req.user.name
    	});
  	}
};