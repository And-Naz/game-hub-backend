'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('games', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			src: {
				type: Sequelize.STRING,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			description: {
				type: Sequelize.TEXT
			},
			rating: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			author: {
				type: Sequelize.STRING,
				allowNull: false
			},
			price: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			isDiscounted: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			percentOfDiscount: {
				type: Sequelize.INTEGER,
				defaultValue: 0
			},
			imageSrc: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('games');
	}
};