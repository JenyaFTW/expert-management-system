const { Model } = require('sequelize/dist');
const db = require('../lib/db');
const { Sequelize, DataTypes } = require('sequelize');

class Survey extends Model {}

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: DataTypes.STRING,
    type: DataTypes.STRING,
    survey: {
      type: DataTypes.INTEGER,
      references: {
        model: 'surveys',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    modelName: 'survey',
    timestamps: false,
  }
);

module.exports = Survey;
