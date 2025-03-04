'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(120),
        allowNull:false
      },
      email: {
        type: Sequelize.STRING(120),
        allowNull:false
      },
      gender: {
        type: Sequelize.ENUM("male","female","others"),
        defaultValue:"male"
      },
      mobile: {
        type: Sequelize.STRING(20),
        allowNull:false
      }
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};