const { ValidationError, UniqueConstraintError } = require('sequelize')
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')


const privateKey = process.env.PRIVATE_KEY

exports.registerUser =  async (req, res) => {

        try {
            const user = await User.create(req.body)
            const message = 'User registered successfully...'
            res.json({ message: message })
            
        } catch (error) {

            if(error instanceof ValidationError){
                const message = 'Invalid input'
                return res.status(401).json({ message: message })
            }
            if(error instanceof UniqueConstraintError){
                const message = 'this username existe...'
                return res.status(401).json({ message: message })
            }
            
            const message = 'we found please try later'
            res.status(500).json({ message: message })
        }
    }


exports.loginUser = async (req, res) => {

    try {

        const user = await User.findOne({ where: { username: req.body.username } })

        if(!user){
            const message = 'This user doesn\'t existe...'
            return res.status(401).json({ message: message })
        }

        const validePassword = await bcrypt.compare(req.body.password, user.password)

        if(!validePassword){
            const message = 'Your password is not correcte..'
            return res.status(401).json({ message: message })
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
        
        const message = 'We found error with the server please try later...'
        res.status(500).json({ message: message })
    }
}