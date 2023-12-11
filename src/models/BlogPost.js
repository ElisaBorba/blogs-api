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
    title: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Blog_posts',
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsToMany(models.User, {
            foreignKey: { name: 'userId', field: 'user_id' },
            as: 'Users'
        });
      };

      BlogPost.associate = (models) => {
        BlogPost.hasMany(models.PostCategory, {
          foreignKey: 'post_id',
          as: 'Posts_categories',
        });
      };
    
  
    return BlogPost;
  };