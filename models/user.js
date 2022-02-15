'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasMany(models.AuthToken);
		}
	};
	User.init({
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		// username: {
		// 	type: DataTypes.STRING,
		// 	unique: true,
		// 	allowNull: false
		// },
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isActivated: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
		,
		activationLink: {
			type: DataTypes.STRING
		}
	}, {
		sequelize,
		modelName: 'User',
	});
	return User;
};