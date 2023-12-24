const { userService } = require('../services');

const addUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.addUser(displayName, email, password, image);
    res.status(201).json({ token });
  } catch (error) {
    if (error.message === 'User already registered') {
      res.status(409).json({ message: 'User already registered' });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
};

const getAllUsers = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  res.status(200).json(allUsers);
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUser(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  addUser,
  getAllUsers,
  getUser,
};
