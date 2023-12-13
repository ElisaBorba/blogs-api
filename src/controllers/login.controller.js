const { loginService } = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.login(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  login,
};