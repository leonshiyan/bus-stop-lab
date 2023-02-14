'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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