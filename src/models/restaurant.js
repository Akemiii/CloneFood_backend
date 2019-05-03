'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    delivery_tax: DataTypes.FLOAT,
    category_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    reference: DataTypes.STRING,
    status: DataTypes.ENUM('closed', 'open'),

  }, {});
  restaurant.associate = function(models) {
    // associations can be defined here
    restaurant.belongsTo(models.Categories,{
      foreignKey:'category_id',
      as:'category'
    });


  };
  return restaurant;
};