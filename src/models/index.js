const User = require('./user.model')
const Article = require('./article.model')
const Comment = require('./comment.model')


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


Article.hasMany(Comment, {
    foreignKey: {
        name: 'article_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'comments'
})


Comment.belongsTo(Article, {
    foreignKey: {
        name: 'article_id',
        allowNull: false
    },
    as: 'articles'
})

User.hasMany(Comment, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    onDelete: 'CASCADE',
    as: 'Usercomments'
})


Comment.belongsTo(User, {
    foreignKey: {
        name: 'user_id',
        allowNull: false
    },
    as: 'users'
})









module.exports = { Article, User, Comment }