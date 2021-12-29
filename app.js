const express = require('express');
const app = express();

require("dotenv/config");

const userRouter = require('./routes/userRouter.js');

app.get('/', (req, res) => {
    res.json({msg: "Bem vindo, aqui é o começo de tudo"})
})

app.use(express.json());
app.use('/', userRouter)

// views staticas
// app.get('/usuario/cadastro', (req, res) => {
//     res.sendFile(__dirname + '/views/usuario/create.html');
// })

app.listen(8080, () => {
    console.log('Até aqui tudo certo!')
})