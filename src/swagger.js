const swaggerJsdoc = require('swagger-jsdoc')


const options = {

    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Express API',
            version: '1.0.0',
            description: 'Documentation de mon API Express'
        },

        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Serveur Local'
            }

        ]
    },
    apis: ['./src/routes/*.js']
}


const swaggerSpec = swaggerJsdoc(options)


module.exports = swaggerSpec