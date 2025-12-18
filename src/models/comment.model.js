const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')



const Comment = sequelize.define('Comment', {

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg:'ajouter un commentaire' }
        }
    },




})