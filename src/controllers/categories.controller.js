const { categoriesService } = require('../services');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoriesService.addCategory(name);
  res.status(201).json(newCategory);
};

module.exports = {
  addCategory,
};
