const route = require('express').Router();

const { validateEmail, validateName, validatePassword } = require('../middlewares/validateUser');
const auth = require('../middlewares/auth');

const { userController } = require('../controllers');

route.post('/', validateName, validatePassword, validateEmail, userController.addUser);

route.get('/', auth, userController.getAllUsers);
  
module.exports = route;
