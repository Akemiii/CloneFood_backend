'use strict';
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define('review', {
    restaurante_id: DataTypes.INTEGER,
    value:DataTypes.INTEGER,
  }, {
  });
  review.associate = function(models) {
    // associations can be defined here
    review.belongsTo(models.restaurant,{
      foreignKey:'restaurante_id',
      as:'restaurante'
    });
  };
  return review;
};