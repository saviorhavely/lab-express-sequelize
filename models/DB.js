const Sequelize = require('sequelize');

const sequelize = new Sequelize('user_system_node', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso!");
})
.catch((e) => {
    console.log("Erro: Conexão com o banco de dados não realizado com sucesso! Erro gerado: " + e);    
})

module.exports = sequelize;