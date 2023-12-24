const route = require('express').Router();

// const auth = require('../middlewares/auth');

const { postController } = require('../controllers');

route.post('/', postController.addPost);
  
module.exports = route;
