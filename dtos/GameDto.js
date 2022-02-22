module.exports = class GameDto {
	id;
    src;
    name;
    description;
    rating;
    author;
    price;
    isDiscounted;
    percentOfDiscount;
    imageSrc;
	constructor(model) {
        this.id = model.id
		this.src = model.src
		this.name = model.name
		this.description = model.description
		this.rating = model.rating
		this.author = model.author
		this.price = model.price
		this.isDiscounted = model.isDiscounted
		this.percentOfDiscount = model.percentOfDiscount
		this.imageSrc = model.imageSrc
	}
}