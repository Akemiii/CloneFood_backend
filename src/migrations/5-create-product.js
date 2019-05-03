'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description:{
        type: Sequelize.TEXT
      },
      price:{
        type: Sequelize.FLOAT
      },
      product_category_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'product_categories',
          key:'id'
        }
      },
      restaurante_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'restaurants',
          key:'id' 
        }
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
    return queryInterface.dropTable('products');
  }
};