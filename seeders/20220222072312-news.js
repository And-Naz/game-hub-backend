'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		const currentDate = (new Date).toISOString().split("T").map(d => { return d.split(".")[0] }).join(" ")
		await queryInterface.bulkInsert('news', [
			{
				gameUrl: 'https://www.addictinggames.com/embed/html5-games/18346',
				title: 'Shards',
				body: 'Jackson Isai? Tu quoque … A te quidem a ante. Vos scitis quod blinking res Ive ‘been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et … sunt occidat. Videtur quod est super omne oppidum.',
				date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
				GameId: 1,
			},

			{
				gameUrl: 'https://www.addictinggames.com/embed/html5-games/23032',
				title: 'Little Big Snake.io',
				body: "Little Big Snake is the ultimate slither style game. You may be big but it'll take more than that to survive in the dewy world of Ambrosia! Little Big Snake is a slippery game of serpentine fun. On the jungle floor, deep beneath its leafy canopy, you are forced to defend yourself from a wide variety of potential threats using only your mouse and some hard-earned upgrades. In Little Big Snake you start off as a small, wormy looking serpent that has to eat, smash, and slither its way up the food chain. If you want to thrive and not just survive, you'll have to swallow nectar, kill Jujas --the jungles resident pest-- and eat all manner of disgusting insects. But beware! For Little Big Snake is a Massive Multiplayer Online game and that means you won't be the only snake looking to climb up the leader board.The MMO aspect of Little Big Snake means that the jungle is an arena and you'll be pitted against other players who are hungry for the same evolution as you. If you want to win you'll have to be sneaky! Never attack an opposing snake head-on, this will certainly end in your death. The way you kill other snakes is by tricking them into smashing into you or surrounding them and strangling them to death within a swirling vortex of your own scaled body. Each opposing snake you kill will leave a trail of nectar which will help you grow. The larger you grow and the more enemies you kill, the higher your reward in coins. You can use your coins between levels to upgrade various aspects of your snake. Everything from your speed, agility, and even your creepy skin. Little Big Snake is an addictive snake game that pits you and your creepy crawler against an army of players from all over the world. If you think you're ready for the challenge then why not jump on in and sneak around? Welcome to the pit! Game Instructions: Use your mouse to control your snake. Avoid hitting other snakes head-on, this will kill you. Surround snakes and the creepy crawlers of the forest in order to kill them and feed upon the nectar left in their wake.",
				date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
				GameId: 2,
			},
			{
				gameUrl: 'https://www.addictinggames.com/embed/html5',
				title: 'Tanked.io',
				body: "Tanked.io is a superb multiplayer io game in which you must fight against hundreds of other player’s from around the world in an epic tank battle! Enter the arena and control your very own tank – use the WASD keys to move your tank and use the left mouse button to fire your primary weapon. As you move around the map you can collect scattered objects on the ground to increase your score.Use these points to purchase upgrades for your tank such as improve armour and weaponry. You must have quick reactions and keep a watchful eye for other players trying to sneak up on you. Move quickly, aim carefully and try to collect as many items as possible. Can you become the tanked master and dominate your",
				date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
				GameId: 3,
			},
			{
				gameUrl: 'https://www.addictinggames.com/embed/html5-games/25075',
				title: 'Field Of Fury!',
				body: "Pulitzer Prize award-winning historian James M. McPherson has written for young readers a stirring account of the greatest conflict to happen on our nation's soil, the Civil War, bringing to life the tragic struggle that divided not only a nation, but also friends and family. From the initial Confederate attack on Fort Sumter, to the devastating loss of life at Shiloh as Ulysses S. Grant led the Union to unexpected victory, to the brilliance of Stonewall Jackson's campaign at Shenandoah, to General Pickett's famous charge at Gettysburg, to the Union's triumph at Appo-mattox Court House, Fields of Fury details the war that helped shape us as a nation.Also included are personal anecdotes from the soldiers at the battlefront and the civilians at home, as well as profiles of historical luminaries such as Robert E. Lee, Abraham Lincoln, Jefferson Davis, and Ulysses S. Grant. McPherson also explores the varied roles that women played during the war, healthcare on the battlefield, and the demise of slavery.McPherson's narrative is highlighted with black-and-white photographs taken by Civil War photographers Mathew Brady and Timothy O'Sullivan, period oil paintings, and key campaign and battlefield maps, that make Fields of Fury the consummate book on the American Civil War for kids. (less)",
				date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
				GameId: 4,
			},
			{
				gameUrl: process.env.API_URL + '/api/static/games/BomberMan/index.html',
				title: 'BomberMan',
				body: "BomberMan by Ando",
				date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
				GameId: 9,
			},
			{
				gameUrl: process.env.API_URL + '/api/static/games/MemoryGame/index.html',
				title: 'MemoryGame',
				body: "MemoryGame by Ando",
				date: currentDate,
				createdAt: currentDate,
				updatedAt: currentDate,
				GameId: 10,
			}
		], {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('news', null, {});
	}
};
