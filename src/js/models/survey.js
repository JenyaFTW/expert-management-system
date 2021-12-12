const { Model } = require("sequelize/dist");
const db = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

class Survey extends Model {};

Survey.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    open: DataTypes.DATE,
    close: DataTypes.DATE,
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    modelName: 'survey',
    timestamps: false
});

module.exports = Survey;