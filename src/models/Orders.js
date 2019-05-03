'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    restaurante_id: DataTypes.INTEGER,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    phone_number:DataTypes.STRING,
    total_value:DataTypes.STRING,
    status: DataTypes.ENUM('waiting','delivered'),
  }, {

  });
  Orders.associate = function(models) {
    // associations can be defined here
    Orders.belongsTo(models.restaurant,{
      foreignKey:'restaurante_id',
      as:'restaurante'
    });
  };
  return Orders;
};