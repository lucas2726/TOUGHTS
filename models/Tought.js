const Sequelize = require("sequelize")
const connection = require("../database/database")
const User = require("./User")


const Tought = connection.define('Tought', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Tought.belongsTo(User)
User.hasMany(Tought)

module.exports = Tought