const Sequelize = require("sequelize")

const connection = require("../database/database")

//User

const User = connection.define('User', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

module.exports = User