module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'categories',
    });
  
    Category.associate = (models) => {
      Category.hasMany(models.PostCategory, {
        foreignKey: 'category_id',
        as: 'posts_categories',
      });
    };

    return Category;
  };