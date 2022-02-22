const GameDto = require('./GameDto')
module.exports = class NewsDto {
	id;
    title;
    body;
    gameUrl;
    date;
    game;
	constructor(model) {
        this.id = model.id
		this.title = model.title
        this.body = model.body
        this.gameUrl = model.gameUrl
        this.date = model.date
        this.game = new GameDto(model.Game)
	}
}