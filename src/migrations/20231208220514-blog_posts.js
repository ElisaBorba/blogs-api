'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('blog_posts', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER,
     },
     title: {
       allowNull: false,
       type: Sequelize.STRING,
     },
     content: {
       allowNull: false,
       type: Sequelize.STRING,
     },
     published: {
       allowNull: false,
       type: Sequelize.DATE,
     },
     updated: {
       allowNull: false,
       type: Sequelize.DATE,
     },
     userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('blog_posts');
  }
};
