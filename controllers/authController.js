import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

exports.login = async (req, res) => {
	const loginData = req.body

	const user = await User.findOne({
		attributes: ['id', 'username', 'email', 'password', 'display_name'],
		where: {
			email: loginData.username,
		},
	})

	if (user === null) {
		res.status(400).json({
			error: true,
			message: 'usuário não encontrado',
		})
	}

	if (!(await bcrypt.compare(loginData.password, user.password))) {
		return res.status(400).json({
			erro: true,
			mensagem: 'senha incorreta',
		})
	}

	const jwtData = {
		id: user.id,
		username: user.username,
		email: user.email,
	}

	const token = jwt.sign(jwtData, process.env.JWT_ENCODE_KEY, {
		expiresIn: '7d',
	})

	return res.json({
		error: false,
		data: {
			username: user.username,
			email: user.email,
			display_name: user.display_name,
			token: token,
		},
	})
}
