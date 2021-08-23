'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friendships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Friendships.init({
    userOne: DataTypes.STRING,
    userTwo: DataTypes.STRING,
    isFriend: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Friendships',
  });
  return Friendships;
};