'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Token extends Model {
		static associate(models) {
			Token.belongsTo(models.User)
		}
	}
	Token.init({
		refreshToken: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'Token',
	});
	return Token;
};