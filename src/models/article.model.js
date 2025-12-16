const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')



const Article = sequelize.define('Article', {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'veuillez saisir un titre...' }
        }
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'veuillez ajouter une description' }
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: 'veuillez saisir l\'id du User' },
            isInt: { msg: 'Vous devez saisir un entier' }
        }
    }

})


module.exports = Article