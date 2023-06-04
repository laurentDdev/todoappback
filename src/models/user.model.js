const mongoose = require('mongoose')
const {Sequelize, DataType, ModelStatic, DataTypes} = require("sequelize");


/**
 *
 * @param {Sequelize} sequelize
 * @return ModelStatic
 */
const userModel = (sequelize) => {
    return sequelize.define('user',{
        pseudo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email : {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        avatarUrl: {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue: 'avatar'
        }
    })
}


module.exports = userModel

