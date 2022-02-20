'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userName: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: true
			},
			email: {
				type: Sequelize.STRING,
				unique: true,
				allowNull: false
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false
			},
			gender: {
				type: Sequelize.STRING,
				allowNull: false
			},
			isActivated: {
				type: Sequelize.BOOLEAN,
				defaultValue: false
			}
			,
			activationLink: {
				type: Sequelize.STRING
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	}
};