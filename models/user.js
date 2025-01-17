'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.recipelog);
    }
  };
  user.init(
    {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    userImg: DataTypes.BLOB('LONG'),
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return user;
};