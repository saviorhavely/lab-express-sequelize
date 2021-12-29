const bcrypt = require('bcrypt')
const User = require('../models/User.js');

exports.createUser = async (req, res) => {
    const data = req.body;
    const password = await bcrypt.hash(data.password, 8)
  
    const dataFiltered = {
        username: data.username,
        email: data.email,
        display_name: `${data.first_name} ${data.last_name}`,
        password
    }

    await User.create(dataFiltered)
    .then(() => {
        res.json({
            status: "Cadastro realizado"
        })
    })
    .catch(() => {
        res.json({status: "Cadastro n realizado"})
    })
}

exports.getUsers = async (req, res) => {
    res.json({
        text: 'lista de user'
    })
}
