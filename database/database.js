const Sequelize = require("sequelize")

const connection = new Sequelize("toughts2", "root", "root", {
    host: 'localhost',
    dialect: "mysql",
    logging: false
})

    module.exports = connection