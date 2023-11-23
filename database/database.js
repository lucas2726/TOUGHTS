const Sequelize = require("sequelize")

const connection = new Sequelize("toughts2", "root", "root", {
    host: 'localhost',
    dialect: "mysql",
    logging: false
})

connection.authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso")
    }).catch(err => {
        console.log(`Não foi possível se conectar ${err}`)
    })

    module.exports = connection