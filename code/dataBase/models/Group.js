const { DataTypes } = require('sequelize');

const { sequelize } = require('../index')
const Group = sequelize.define(
    'Group',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        dataAnalytics: {
            type: DataTypes.BOOLEAN
        },
        servicesAnalytics: {
            type: DataTypes.BOOLEAN
        },
        voiceAnalytics: {
            type: DataTypes.BOOLEAN
        },
        queueStats: {
            type: DataTypes.BOOLEAN
        },
        voiceStats: {
            type: DataTypes.BOOLEAN
        },
        video: {
            type: DataTypes.BOOLEAN
        },
        smartAccess: {
            type: DataTypes.BOOLEAN
        },
        diagrams: {
            type: DataTypes.BOOLEAN
        },
    },
    {
        tableName: 'group',
        timestamps: false
    }
);

module.exports = Group