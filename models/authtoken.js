'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class AuthToken extends Model {
		static associate(models) {
			AuthToken.belongsTo(models.User)
		}
	}
	AuthToken.init({
		token: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		sequelize,
		modelName: 'AuthToken',
	});
	return AuthToken;
};