const { Model } = require("sequelize/dist");
const db = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

class Response extends Model {};

Response.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    text: DataTypes.STRING,
    question: {
        type: DataTypes.INTEGER,
        references: {
            model: 'questions',
            key: 'id'
        }
    },
    expert: {
        type: DataTypes.INTEGER,
        references: {
            model: 'experts',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    modelName: 'response',
    timestamps: false
});

module.exports = Response;