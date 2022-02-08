module.exports = (sequelize, DataTypes) => {
	const Games = sequelize.define("games", {
		title: { type: DataTypes.STRING, allowNull: false },
		description: { type: DataTypes.STRING, allowNull: true },
		rating: { type: DataTypes.INTEGER, allowNull: true },
	})
	return Games
}