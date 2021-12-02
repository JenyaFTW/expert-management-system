const { Model } = require("sequelize/dist");
const db = require('../lib/db');
const { Sequelize, DataTypes } = require('sequelize');

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    }
}, {
    sequelize: db,
    modelName: 'user',
    timestamps: false
});

module.exports = User;