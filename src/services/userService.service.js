const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const addUser = async (displayName, email, password, image) => {
  const findEmail = await User.findOne({ where: { email } });
  console.log('BLAAAAAAAAAAA', findEmail);

  if (findEmail) {
    throw new Error('User already registered');
  }

  const user = await User.create({
    displayName,
    email,
    password,
    image,
  });

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
  addUser,
};
