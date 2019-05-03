'use strict';
module.exports = (sequelize, DataTypes) => {
  const product_categories = sequelize.define('product_categories', {
    title: DataTypes.STRING,
    restaurante_id: DataTypes.INTEGER
  }, {

  });
  product_categories.associate = function(models) {
    // associations can be defined here
    product_categories.belongsTo(models.restaurant,{
      foreignKey:'restaurante_id',
      as:'restaurante'
    });
  };
  return product_categories;
};