const { categoriesService } = require('../services');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoriesService.addCategory(name);
  res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const allUsers = await categoriesService.getAllCategories();
  res.status(200).json(allUsers);
};

module.exports = {
  addCategory,
  getAllCategories,
};
