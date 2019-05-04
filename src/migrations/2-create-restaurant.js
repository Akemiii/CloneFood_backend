'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      delivery_tax: {
        type: Sequelize.FLOAT
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Categories',
          key:'id'
        }
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      neighborhood: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING
      },
      status:{
        type: Sequelize.ENUM('closed','open'),
        defaultValue:'closed'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('restaurants');
  }
};