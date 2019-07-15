'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    tgl_order: DataTypes.DATE
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User);
    Order.belongsTo(models.Book);
  };
  return Order;
};