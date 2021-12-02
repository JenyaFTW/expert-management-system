const { Model } = require('sequelize/dist');
const db = require('../lib/db');
const { Sequelize, DataTypes } = require('sequelize');

class Question extends Model {}

Question.init(
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
    modelName: 'question',
    timestamps: false,
  }
);

module.exports = Question;
