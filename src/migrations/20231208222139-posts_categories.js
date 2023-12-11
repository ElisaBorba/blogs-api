'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Posts_categories', {
     postId: {
       allowNull: false,
       primaryKey: true,
       type: Sequelize.INTEGER,
       references: {
        model: 'Blog_posts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
     categoryId: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('Posts_categories');
  }
};
