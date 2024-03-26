const { postService } = require('../services');

const addPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.user;
    const newPost = await postService.addPost({
      title,
      content,
      userId,
      categoryIds,
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addPost,
};
