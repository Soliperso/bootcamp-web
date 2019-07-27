const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"]
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lower: true, 
    validate: [validator.isEmail, ' Please provide a valid email']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'Please enter your password!'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'Passwords are not matched!'
    }
  }
});

const User = mongoose.model('User', userSchema);
 
module.exports = User;