const jwt = require('jsonwebtoken');
const config = require('../config/key');

module.exports = async (req, res, next) => {
  //get token from header
  const token = req.header('x-auth-token');

  //check if not token
  if (!token) res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
