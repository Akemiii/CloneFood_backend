'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_products = sequelize.define('Order_products', {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {

  });
  Order_products.associate = function(models) {
    // associations can be defined here
    Order_products.belongsTo(models.Orders,{
      foreignKey: 'order_id',
      as: 'order'
    });

    Order_products.belongsTo(models.product,{
      foreignKey: 'product_id',
      as: 'product'
    })
  };
  return Order_products;
};