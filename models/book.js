'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    judul: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    pengarang: DataTypes.STRING,
    penerbit: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    tahun_terbit: DataTypes.DATE
  }, {});
  Book.associate = function (models) {
    // associations can be defined here
  };
  return Book;
};