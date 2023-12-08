'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'Categories'
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Categories');
  }
};
