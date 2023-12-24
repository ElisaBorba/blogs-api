const { Category } = require('../models');

const addCategory = async (name) => {
  const category = await Category.create({
    name,
  });

  return category;
};

const getAllCategories = async () => {
  const findAllCategories = await Category.findAll();
  return findAllCategories;
};

module.exports = {
  addCategory,
  getAllCategories,
};
