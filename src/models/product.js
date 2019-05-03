'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING,
    description:DataTypes.TEXT,
    price:DataTypes.FLOAT,
    product_category_id:DataTypes.INTEGER,
    restaurante_id:DataTypes.INTEGER
  }, {

  });
  product.associate = function(models) {
    // associations can be defined here
    product.belongsTo(models.restaurant,{
      foreignKey:'restaurante_id',
      as:'restaurante'
    });

    product.belongsTo(models.product_categories,{
      foreignKey:'product_category_id',
      as:'categoria'
    });

  };
  return product;
};