const BaseStrategy = require('passport-http').BasicStrategy

module.exports = new BaseStrategy(
  (user, pass, cb) => {
    if(user == 'admin' && pass == 'admin'){
      return cb(null, true)
    }

    return cb(null, false)
  }
)