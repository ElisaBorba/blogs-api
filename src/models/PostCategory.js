module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define(
      'PostCategory',
      {
        postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
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
        tableName: 'Posts_categories',
      }
    );

    PostCategory.associate = (models) => {
        PostCategory.belongsToMany(models.BlogPost, {
            as: 'Blog_posts',
            through: PostCategory,
            foreignKey: 'category_id',
            otherKey: 'post_id',
        })
    };

    PostCategory.associate = (models) => {
        PostCategory.belongsToMany(models.Category, {
            as: 'Categories',
            through: PostCategory,
            foreignKey: 'post_id',
            otherKey: 'category_id',
        })
    };
      
    return PostCategory;
  };
  