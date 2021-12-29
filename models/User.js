const DB = require('./DB.js')
const Sequelize = require('sequelize')

const User = DB.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    display_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

//Criar a tabela
// User.sync({
//     force: true
// });

module.exports = User;