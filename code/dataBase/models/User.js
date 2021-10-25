const { DataTypes } = require('sequelize');

const { sequelize } = require('../index')
const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        group: {
            type: DataTypes.STRING
        },
        admin: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: 'user',
        timestamps: false
    }
);

module.exports = User;