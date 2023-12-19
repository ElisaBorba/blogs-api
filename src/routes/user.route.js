const route = require('express').Router();
const { validateEmail, validateName, validatePassword } = require('../middlewares/validateUser');

const { userController } = require('../controllers');

route.post('/', validateName, validatePassword, validateEmail, userController.addUser);
  
module.exports = route;
