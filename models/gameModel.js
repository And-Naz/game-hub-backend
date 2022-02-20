'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Game extends Model {
		static associate(models) { }
	}
	Game.init({
		src: {
			type: DataTypes.STRING,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		author: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		isDiscounted: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		percentOfDiscount: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		imageSrc: {
			type: DataTypes.STRING,
		},
	}, {
		sequelize,
		modelName: 'Game',
	});
	return Game;
};