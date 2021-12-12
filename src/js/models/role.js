const { Model } = require("sequelize/dist");
const db = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

class Role extends Model {};

Role.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING
}, {
    sequelize: db,
    modelName: 'role',
    timestamps: false
});

module.exports = Role;