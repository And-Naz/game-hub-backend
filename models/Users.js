module.exports = (sequelize, DataTypes) => {
	const Users = sequelize.define("users", {
		login: { type: DataTypes.STRING, allowNull: false, unique: true },
		password: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
		gender: { type: DataTypes.STRING, allowNull: false },
	})
	return Users
}