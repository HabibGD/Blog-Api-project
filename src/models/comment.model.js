const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')



const Comment = sequelize.define('Comment', {

    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg:'ajouter un commentaire' }
        }
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: 'Id doit etre en entier' }
        }
    },
    article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: { msg: 'Id doit etre en entier' }
        }
    },

})


module.exports = Comment