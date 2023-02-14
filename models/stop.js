'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stop extends Model {
    static associate(models) {
      // define association here
    }
  }
  Stop.init({
    stopNo: DataTypes.INTEGER,
    city: DataTypes.STRING,
    bayNo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Stop',
  });
  return Stop;
};