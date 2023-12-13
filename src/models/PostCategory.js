module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          field: 'post_id',
          references: {
            model: 'BlogPost',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        categoryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          field: 'category_id',
          references: {
            model: 'Category',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      {
        underscored: true,
        timestamps: false,
        tableName: 'posts_categories',
      }
    );

    PostCategory.associate = (models) => {
        PostCategory.belongsToMany(models.BlogPost, {
            as: 'blog_posts',
            through: PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
        })

        PostCategory.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'post_id',
          otherKey: 'category_id',
      })
    };
      
    return PostCategory;
  };
  