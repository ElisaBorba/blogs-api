module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'blog_posts',
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsToMany(models.User, {
        foreignKey: 'user_id',
        as: 'Users',
      });
  
      BlogPost.hasMany(models.PostCategory, {
        foreignKey: 'post_id',
        as: 'Posts_categories',
      });
    };
    
  
    return BlogPost;
  };