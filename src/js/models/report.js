const { Model } = require("sequelize/dist");
const db = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

class Report extends Model {};

Report.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: DataTypes.STRING,
    date: DataTypes.DATE,
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    survey: {
        type: DataTypes.INTEGER,
        references: {
            model: 'surveys',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    modelName: 'report',
    timestamps: false
});

module.exports = Report;