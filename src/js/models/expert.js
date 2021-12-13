const { Model } = require("sequelize/dist");
const db = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

class Expert extends Model {};

Expert.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    occupation: DataTypes.STRING,
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    modelName: 'expert',
    timestamps: false
});

module.exports = Expert;