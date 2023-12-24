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

module.exports = {
  addUser,
  getAllUsers,
};
