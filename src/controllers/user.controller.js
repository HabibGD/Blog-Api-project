const { ValidationError, UniqueConstraintError } = require('sequelize')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')


const privateKey = process.env.PRIVATE_KEY

exports.registerUser =  async (req, res, next) => {

        try {
            const user = await User.create(req.body)
            const message = 'User registered successfully...'
            res.json({ message: message })
            
        } catch (error) {
           next(error)
        }
    }


exports.loginUser = async (req, res, next) => {

    try {

        const user = await User.findOne({ where: { username: req.body.username } })

        if(!user){
            const err = new Error('This user doesn\'t existe...')
            err.statusCode = 409
            return next(err)
        }

        const validePassword = await bcrypt.compare(req.body.password, user.password)

        if(!validePassword){
            const err = new Error('Your password is not correcte..')
            err.statusCode = 400
            return next(err)
        }

        // Access Token

        const token = jwt.sign(
            { userId: user.id },
                privateKey,
            { expiresIn: '24h' }
        )

        // Refresh Token



        // stocker refresh token sur redis

        const message = 'User connected successfully...'
        res.json({ message: message, data: user, token })
        
        
    } catch (error) {
        next(error)
    }
}