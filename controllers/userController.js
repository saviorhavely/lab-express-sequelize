import bcrypt from 'bcrypt'
import User from '../models/User.js'

exports.createUser = async (req, res) => {
	const data = req.body
	const password = await bcrypt.hash(data.password, 8)

	const dataFiltered = {
		username: data.username,
		email: data.email,
		display_name: `${data.first_name} ${data.last_name}`,
		password,
	}

	await User.create(dataFiltered)
		.then(() => {
			res.status(200).json({
				status: 'Cadastro realizado',
			})
		})
		.catch(() => {
			res.json({ status: 'Cadastro n realizado' })
		})
}

exports.getUsers = async (req, res) => {
	const result = await User.findAll({
		attributes: ['id', 'username', 'display_name', 'email'],
	})

	res.json(result)
}

exports.updateUser = async (req, res) => {
	const { id } = req.body
	const data = req.body

	console.log(data)

	delete data.id
	delete data.password

	const up = await User.update(data, { where: { id: id } })
		.then(() => {
			res.json({
				error: false,
				message: 'dados atualizados com sucesso',
			})
		})
		.catch(() => {
			res.json({
				error: true,
				message: 'dados não atualizados',
			})
		})
}

exports.deleteUser = async (req, res) => {
	const { id } = req.body

	await User.destroy({ where: { id: id } })
		.then(() => {
			res.json({
				error: false,
				message: 'usuário deletado com sucesso',
			})
		})
		.catch(() => {
			res.json({
				error: true,
				message: 'dados não atualizados',
			})
		})
}
