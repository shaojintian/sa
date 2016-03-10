var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true,
    match: /.+\@.+\..+/
  },
  username: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  password: {
    type: String,
    validate: [
      function(password) {
        return password.length >= 8;
      },
      'Password should be longer'
    ]
  },
  role: {
    type: String,
    enum: ['Admin', 'Owner', 'User']
  },
});

mongoose.model('User', UserSchema);