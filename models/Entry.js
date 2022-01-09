import { DataTypes, Model } from 'sequelize'

class Entry extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					primaryKey: true,
					autoIncrement: true,
				},
				title: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				type: {
					type: DataTypes.ENUM('entry', 'output'),
					allowNull: true,
				},
				description: {
					type: DataTypes.STRING,
					allowNull: false,
				},
				installments: {
					type: DataTypes.INTEGER,
					allowNull: false,
				},
				install_value: {
					type: DataTypes.FLOAT,
					allowNull: false,
				},
				value: {
					type: DataTypes.FLOAT,
					allowNull: false,
				},
				default_color: {
					type: DataTypes.STRING,
					defaultValue: '#000000',
				},
			},
			{
				sequelize,
				modelName: 'entries',
			}
		)

		// this.sync({ force: true })
	}
}

export default Entry
