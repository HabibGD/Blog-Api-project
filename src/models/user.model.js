const sequelize = require('../config/database')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')



const User = sequelize.define('User', {

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: { msg: 'username ne peut pas etre vide...' }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: { msg: 'vous devez saisir un mot de passe...' }
        }
    }
},
    
    { 
   

        hooks: {

            async beforeCreate(user){
                const salt = await bcrypt.genSalt(10)
                user.password = await bcrypt.hash(user.password, salt)
            },

            async beforeUpdate(user){

                if(user.changed('password')){
                    const salt = await bcrypt.genSalt(salt)
                    user.password = await bcrypt.hash(user.password, salt)
                }
            }   
        }
    
    }
)


module.exports = User