const security = require('../utils/security')

module.exports = (req, res, next) => {
  try {
    const token = req.headers['x-access-token'];
    req.userId = 'ID' //security.authenticate(token)
    next();
  } catch {
   res.status(401).json({ auth: false, message: 'Failed to authenticate token.' })
  }
}