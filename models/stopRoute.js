'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StopRoute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StopRoute.init({
    stopId: {
    type: DataTypes.INTEGER,
    onDelete: 'CASCADE',
    references: {
      model: 'Stops',
      key: 'id'
    }
  },
    routeId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Routes',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'StopRoute',
  });
  return StopRoute;
};