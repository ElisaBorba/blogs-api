const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = extractToken(bearerToken);
  
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
  
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};