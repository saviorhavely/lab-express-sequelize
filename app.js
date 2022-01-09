const express = require('express')
const app = express()

require('dotenv/config')

import './models/DB'

const userRouter = require('./routes/userRouter.js')
const authRouter = require('./routes/authRouter.js')

app.use(express.json())

app.get('/', (req, res) => {
	res.json({ msg: 'Bem vindo, aqui é o começo de tudo' })
})

app.use('/', userRouter)
app.use('/', authRouter)

// views staticas
// app.get('/usuario/cadastro', (req, res) => {
//     res.sendFile(__dirname + '/views/usuario/create.html');
// })

app.listen(8080, () => {
	console.log('Até aqui tudo certo!')
})
