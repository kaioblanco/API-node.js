'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lance.init({
    nome_usuario: DataTypes.STRING,
    id_produto: DataTypes.INTEGER,
    valor: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Lance',
    tableName:'lance'
  });
  return Lance;
};