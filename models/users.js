'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: "userId" });
    }
  };
  Users.init({
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    email: DataTypes.STRING,
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};