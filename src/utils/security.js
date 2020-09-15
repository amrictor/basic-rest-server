'use strict';
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('./constants/config');

module.exports = {
  sha512 : (password, salt) => {
      var hash = crypto.createHmac('sha512', salt);
      hash.update(password);
      var value = hash.digest('hex');
      return value;
  },
  generateSalt: (length=50) => {
      return crypto.randomBytes(Math.ceil(length/2))
          .toString('hex')
          .slice(0, length);
  },
  generateToken: (id) => {
    return jwt.sign({ id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });
  },
  authenticate: (token) => {
    try {
      const decoded = jwt.verify(token, config.secret)
      return decoded.id;
    }
    catch (err) {
      throw new Error({status: 401, auth: false, message: 'Failed to authenticate token.'})
    }
  }
};