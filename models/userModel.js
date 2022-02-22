'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasMany(models.Token);
		}
	};
	User.init({
		userName: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "other"
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