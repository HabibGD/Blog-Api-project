const { UniqueConstraintError, ValidationError } = require("sequelize")


module.exports = (err, req, res, next) => {

    // UNIQUE ERROR

    if(err instanceof UniqueConstraintError){
        return res.status(400).json({
            success: false,
            message: 'Cette valeur existe deja...'
        })
    }

    // VALIDATION ERROR

    if(err instanceof ValidationError){
        return res.status(400).json({
            success: false,
            message: 'L\'un des champ est vide'
        })
    }

    // ERROR GENERALE

    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        success: false,
        message:  'Erreur Serveur'
    })

}