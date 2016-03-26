var User = require('mongoose').model('User'),
  passport = require('passport');

var getErrorMessage = function(err) {
  var message = '';

  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Email already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } else {
    for (var errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }

  return message;
};

exports.renderSignin = function(req, res, next) {
  if (!req.user) {
    res.render('signin', {
      title: '登录',
      messages: req.flash('error') || req.flash('info')
    });
  } else {
    return res.redirect('/');
  }
};
exports.renderSignup = function(req, res, next) {
  if (!req.user) {
    res.render('signup_role', {
      title: '免费注册',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
};
exports.renderSignupStudent = function(req, res, next) {
  if (!req.user) {
    res.render('signup_form', {
      title: '学生免费注册',
      role:'Student',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
};
exports.renderSignupAgent = function(req, res, next) {
  if (!req.user) {
    res.render('signup_form', {
      title: '免费注册',
      role:'Agent',
      messages: req.flash('error')
    });
  } else {
    return res.redirect('/');
  }
}

exports.signup = function(req, res, next) {
  if (!req.user) {
    var user = new User(req.body);
    console.log(req.body);
    console.log("signing up now !!!");

    var message = null;

    user.provider = 'local';

    user.save(function(err) {
      console.log(user);
      if (err) {
        var message = getErrorMessage(err);
        console.log(message);
        req.flash('error', message);
        return res.redirect('/signup/student');//******"student for ets"
      }
      req.login(user, function(err) {
        if (err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  }
};

exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};