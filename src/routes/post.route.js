const route = require('express').Router();

const auth = require('../middlewares/auth');
// const validateFieldsPost = require('../middlewares/validateFieldsPost');

const { postController } = require('../controllers');

route.post('/', auth, postController.addPost);
  
module.exports = route;
