const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso!");
})
.catch((e) => {
    console.log("Erro: Conexão com o banco de dados não realizado com sucesso! Erro gerado: " + e);    
})

module.exports = sequelize;