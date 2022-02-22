'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('tokens', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			refreshToken: {
				type: Sequelize.STRING,
				allowNull: false,
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

		await queryInterface.addColumn(
			'tokens', // name of Source model
			'UserId', // name of the key we're adding 
			{
				type: Sequelize.INTEGER,
				references: {
					model: 'users', // name of Target model
					key: 'id', // key in Target model that we're referencing
				},
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}
		);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('tokens');
	}
};