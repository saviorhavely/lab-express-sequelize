import Sequelize from 'sequelize'
import User from './User'
import Entry from './Entry'

const models = [User, Entry]

class Database {
	constructor() {
		this.init()
	}

	init() {
		this.connection = new Sequelize({
			host: process.env.DB_HOST,
			dialect: process.env.DB_DIALECT,
			database: process.env.DB_DATABASE,
			username: process.env.DB_USERNAME,
			password: process.env.DB_PASSWORD,
			define: {
				timestamp: true,
				undescored: true,
				undescoredAll: true,
			},
		})

		models.map((model) => model.init(this.connection))

		this.connectionCheck()
	}

	connectionCheck() {
		this.connection
			.authenticate()
			.then(() => {
				console.log('db:connected')
			})
			.catch((e) => {
				console.log('db:not_connected' + e)
			})
	}
}

export default new Database()
