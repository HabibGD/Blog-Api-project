require('dotenv').config()
const express = require('express')
const sequelize = require('./config/database')
const User = require('./models/user.model')
const userRoutes = require('./routes/user.routes')
const Article = require('./models/article.model')
const articleRoute = require('./routes/article.route')


const app = express()
const PORT = process.env.PORT


app.use(express.json())

// Creer une connexion a la base de donnee

async function connectDatabase() {

    try {
        await sequelize.authenticate() 
        const message = 'connexion a la base de donnee reuissi'
        console.log(message)  
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
 
}

connectDatabase()

// Synchroniser les models avec les tables de la base de donnee

async function synchroniserModels(){

    try {
        
        await sequelize.sync({ alter: true })
        console.log(`Synchronisation reuissi...`)

    } catch (error) {
        console.log(error)
    }

}

synchroniserModels()

// Users enpoints

app.use('/api/users', userRoutes)
app.use('/api/articles', articleRoute)











app.listen(PORT, () => console.log(`vous utilisez le port : ${PORT}`))


