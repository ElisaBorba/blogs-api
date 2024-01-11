const { BlogPost, PostCategory, Category, sequelize } = require('../models');

const addPost = async ({ title, content, userId, categoryIds }) => sequelize
  .transaction(async (transaction) => {
    const categories = await Category.findAll({ where: { id: categoryIds }, transaction });

    if (categories.length !== categoryIds.length) {
      throw new Error('one or more "categoryIds" not found');
    }

    const newPost = await BlogPost.create({
      title,
      content,
      userId,
      updated: new Date(),
      published: new Date(),
    }, { transaction });

    const postCategoryAssociations = categoryIds.map((categoryId) => ({
      postId: newPost.id,
      categoryId,
    }));

    await PostCategory.bulkCreate(postCategoryAssociations, { transaction });

    return newPost;
    // return newPost;
  });

module.exports = {
  addPost,
};
