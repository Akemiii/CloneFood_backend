'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      restaurante_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'restaurants',
          key:'id'
        }
      },
      address:{
        type: Sequelize.STRING,
      },
      name:{
        type:Sequelize.STRING,
      },
      phone_number:{
        type:Sequelize.STRING,
      },
      total_value:{
        type:Sequelize.STRING,
      },
      status:{
        type:Sequelize.ENUM('waiting','delivered')
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
    return queryInterface.dropTable('Orders');
  }
};