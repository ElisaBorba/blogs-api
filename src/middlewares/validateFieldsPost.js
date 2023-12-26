module.exports = (req, res, next) => {
  const { title, content } = req.body;
    
  if (title.length < 1 || content.length < 1) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }
            
  next();
};