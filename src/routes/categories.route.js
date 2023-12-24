const route = require('express').Router();

const { validateName } = require('../middlewares/validateCategory');
const auth = require('../middlewares/auth');
const { categoriesController } = require('../controllers');

route.post('/', auth, validateName, categoriesController.addCategory);
route.get('/', auth, categoriesController.getAllCategories);

module.exports = route;
