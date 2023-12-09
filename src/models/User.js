module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      displayName: {
        type: DataTypes.STRING,
        field: 'display_name'
    },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'users',
    });
  
    return User;
  };