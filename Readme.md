## 📰 Blog API – Express.js, Sequelize & MySQL

        Bienvenue dans Blog API, une API REST moderne construite avec Node.js, Express, Sequelize et MySQL.
        Ce projet a été conçu pour servir de base solide à n'importe quel système de blog : gestion des articles, des utilisateurs et des commentaires, avec une architecture propre et extensible.

## 🚀 Fonctionnalités

        🔐 Authentification JWT (inscription, connexion, protection des routes)

        📝 Gestion des articles (créer, lire, modifier, supprimer)

        💬 Gestion des commentaires

        👤 Gestion des utilisateurs

        🔍 Requêtes de recherche et filtres avancés

        ⚙️ ORM Sequelize avec migrations & modèles

        🧪 Validation des données (middlewares personnalisés)

        🐳 Prêt pour le déploiement (structure professionnelle)

##  🧱 Architecture du projet

        /src
        ├── config/          # Configuration de la base de données, dotenv
        ├── models/          # Modèles Sequelize
        ├── controllers/     # Logique métier
        ├── routes/          # Endpoints Express
        ├── middlewares/     # Auth, validateurs, erreurs
        ├── utils/           # Fonctions utilitaires
        └── server.js        # Point d'entrée