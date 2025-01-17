'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resultRecipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  resultRecipe.init({
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    foodImg: DataTypes.BLOB('LONG'),
    foodName: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resultRecipes',
  });
  return resultRecipe;
};