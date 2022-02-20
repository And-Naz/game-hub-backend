'use strict';
const bcrypt = require('bcrypt')
module.exports = {
	async up(queryInterface, Sequelize) {
		const adminPassword = await bcrypt.hash('123456', 5)
		const currentDate = (new Date).toISOString().split("T").map(d => { return d.split(".")[0] }).join(" ")
		await queryInterface.bulkInsert('users', [
			{
				userName: 'admin',
				email: 'developersgamehub@gmail.com',
				password: adminPassword,
				gender: 'other',
				isActivated: true,
				activationLink: null,
				createdAt: currentDate,
				updatedAt: currentDate,
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {});
	}
};
