const jwt = require('jsonwebtoken')





const privateKey = process.env.PRIVATE_KEY


module.exports =  (req, res, next) => {


    try {

        const authorizationHeader = req.headers.authorization 

        if(!authorizationHeader){
            const message = 'you are note authorized to access this ressources...'
            return res.status(401).json({ message: message })
        }

        const token = authorizationHeader.split(' ')[1] // Bearer token

        const decodtoken = jwt.verify(token, privateKey)

        req.userId = decodtoken.userId // on attachel'id au req
        next()
        
    } catch (error) 
    {
        res.status(401).json({ message: 'Invalid Token....' })
    }
}