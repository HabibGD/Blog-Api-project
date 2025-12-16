const User = require('./user.model')
const Article = require('./article.model')



User.hasMany(Article, {

    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'aticle_id'
})


Article.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    as: 'user'
})







module.exports = { Article, User }