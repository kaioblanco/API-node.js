'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    lance_minimo: DataTypes.DOUBLE,
    data_inicio: DataTypes.DATEONLY,
    data_fim: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Produto',
    tableName: 'produto'
  });
  return Produto;
};