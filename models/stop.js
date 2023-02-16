'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stop extends Model {
    static associate(models) {
      // define association here
      Stop.belongsToMany(models.Route, {
        as: 'routes', 
        through: models.StopRoute,
        foreignKey: 'stopId'
      })
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