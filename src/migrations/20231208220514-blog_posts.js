'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('BlogPosts', {
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
     user_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
   }, {
        timestamps: true,
        underscored: true,
        tableName: 'BlogPosts'
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('BlogPosts');
  }
};
