const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const login = async (email, password) => {
  if (!email || !password) {
    throw new Error('Some required fields are missing');
  }

  const user = await User.findOne({
    where: { email, password },
  });

  if (!user) {
    throw new Error('Invalid fields');
  }

  const admin = user.email === 'admin';

  const tokenPayload = {
    email: user.email,
    id: user.id,
    admin,
  };

  const token = jwt.sign(tokenPayload, JWT_SECRET);
  return token;
};

module.exports = {
  login,
};
