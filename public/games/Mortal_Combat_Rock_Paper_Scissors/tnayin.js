// HOMEWORK
 
// -----------------------1.QUESTION-----------------------
 
//  1) գրեք Book կլասս, որի էկզեմպլյառները կունենան author և title property-ներ, ու getTitle ու getAuthor մեթոդները,
// // որոնք կվերադարձնեն author և title property-ները այս տեսքով ՝ 'Title: ....', 'Author: ...': Օրինակ՝
// //
// // Harry Potter գիրքը ստեղծենք HP անունով
// //
// HP.title => "Harry Potter"
// HP.author => "J.K. Rowling"
// HP.getTitle() => "Title: Harry Potter"
// HP.getAuthor() => "Author: J.K. Rowling"

// -----------------------1.ANSWER-----------------------

// class Book{
// 	constructor(options){
// 		this.author = options.author
// 		this.title = options.title
// 	}
// 	getTitle(){
// 		return `Title: ${this.title}`
// 	}
// 	getAuthor(){
// 		return `Author: ${this.author}`
// 	}
// }
// let HP = new Book({
// 	author:'Harry Potter',
// 	title:'J.K. Rowling'
// })
// console.log(HP.title)
// console.log(HP.author)
// console.log(HP.getTitle())
// console.log(HP.getAuthor())

// -----------------------2.QUESTION-----------------------
 
//  2) գրեք Calculator կլասս, որը կունենա add, subtract, multiply ու divide մեթոդները։ Օրինակ՝

// class Calculator {
//    // ձեր կոդը
// }

// const calculator = new Calculator()
// //
// // calculator.add(10, 5) => 15


// -----------------------2.ANSWER-----------------------

// class Calculator {
// 	add(num1,num2){
// 		return num1 + num2
// 	}
// 	subtract(num1,num2){
// 		return num1 - num2
// 	}
// 	multiply(num1,num2){
// 		return num1 * num2
// 	}
// 	divide(num1,num2){
// 		return num1 / num2
// 	}
// }
// const calculator = new Calculator()

// console.log(calculator.add(10, 5))
// console.log(calculator.subtract(10, 5))
// console.log(calculator.multiply(10, 5))
// console.log(calculator.divide(10, 5))

// -----------------------3.QUESTION-----------------------
 
// 3) Տրված է 3 օբյեկտ

// const obj1 = Object.create(null);
// const obj2 = Object.create({});
// const obj3 = Object.create(Object.prototype);

// // բացատրեք իրենց տարբերությունը։ Ինչ կլինի եթե նրանց վրա կանչենք toString մեթոդ, բացատրեք ինչու
 
// -----------------------3.ANSWER-----------------------
// obj1-um prototype@ kdarna null hetevabar toString method@ chi parunaki, error kstananq method no defined 
// obj2-um prototype khandisana datark object@ vori prototype klini Object global class@ vor@ paruankum e toString method@
// obj3-um prototype khandisana Object global class@ 

// -----------------------4.QUESTION-----------------------

// 4) Ինչ կտպվի կոնսոլում կոդը աշխատելուց հետո և ինչու

// 1)console.log({}.prototype === Object.getPrototypeOf({}))

// 2)function Builder() {}
// console.log(Builder.prototype === Object.getPrototypeOf(Builder))

// 3)function Worker() {}
// console.log(Builder.prototype === Worker.prototype)

// const age = 27
// 4)console.log(age.prototype === Number.prototype)
// 5)console.log(Object.getPrototypeOf(age) === Number.prototype)

// const man = new Builder()
// 6)console.log(Object.getPrototypeOf(man) === Builder.prototype)

// class HouseBuilder extends Builder{}
// const otherMan = new HouseBuilder()
// 7)console.log(Object.getPrototypeOf(otherMan) === Builder)
// 8)console.log(otherMan.constructor === Builder)
// 9)console.log(otherMan.constructor === HouseBuilder)

// 10)console.log(Object.getPrototypeOf(HouseBuilder))

// -----------------------4.ANSWER-----------------------

// 1-in consol@ error kta vorovhetev datark object@ chuni sepakan prototype 
// 2-rd console@ ktpi false Builder.prototype veradradznum e sepakan prototype isk getPrototypeOf veradarcnum e __proton__
// 3-rd console@ ktpi false vorovhetev yuraqanchyur function uni sepakan prototype vor@ havasar e miayn inqn iren 
// 4-rd consol@ error ktpi vorovhetev primitiv popoxakanner@ chunen prototype
// 5-rd console@ ktpi true getPrototypeOf veradardznum e popoxakani parent classi prototype aysinqn Number.prototype 
// 6-re console@ ktpi true getPrototypeOf veradardznum e popoxakani parent classi prototype aysinqn Builder.prototype 
// 7-rd console@ ktpi false Object.getPrototypeOf(otherMan) veradarcnum e __proto__ ,  
// __proto__.constructor === HouseBuilder, Object.getPrototypeOf(HouseBuilder) ===  Builder
// 8-rd console@ ktpi false  otherMan.constructor handisanum e  HouseBuilder, isk  HouseBuilder-i __proto__ handisanum e Builder
// 9-rd console@ ktpi true  
// 10-rd console@ ktpi Builder class@
// -----------------------5.QUESTION-----------------------

// 5) Գրեք երկու կլասս Warriors ու Wizards, որոնք կժառանգեն 1 կլասսից Fighters։ Warriors ու 
// Wizards կլասսերում պետք է լինեն նմանատիպ property-ներ էկզեմպլյառներին տրվող, 
// healthPoints, damage, stamina (սահմանափակվում է ձեր ֆանտազիայով :D)։ 
// Նաև պետք է լինեն տարբեր մեթոդներ երկու կլասսերում հարվածներ հասցնելու, 
// կյանքեր վերականգնելու և պաշտպանվելու համար։ Առաջադրանքը ազատ ոճի մեջ է,
//  ամեն ինչ կախված է ձեր ռեալիզացիայից, սահմանափակումներ չկան

 
// -----------------------5.ANSWER-----------------------

	
// // arandzin filerov xaxi prototip

// class Fighters{
// 	constructor(options){
// 		this._healthPoints = options._healthPoints;
// 		this._stamina = options._stamina;
// 		this._units = options.units;
// 		this._damage = options._damage;
// 		this.price = options.price;

// 	}
// 	set stamina(value){
// 		return this._stamina -= value
// 	}
// 	set units (value){
// 		return this._units += value
// 	}
// } 

// class Warriors extends Fighters{
// 	constructor(options){
// 		super(options);
// 		this.block = options.block;
// 		this._healthRestore = options._healthRestore;
// 		this._healthRestoreTime = options._healthRestoreTime;
// 	}
// 	healthDamag(value){
// 		return this._healthPoints -= (value-this.block)
// 	}
// 	healthRestore(){
// 		if(this._healthPoints < 100){
// 			setTimeout( ()=>{
// 				this._healthPoints += Math.ceil(this._healthPoints*this._healthRestore/100)
// 				if(this._healthPoints > 100 ) this._healthPoints = 100
// 				return this.healthRestore()
// 			}, this._healthRestoreTime*1000)
// 		}
// 	}
// 	set damageUp(value){
// 		return this._damage += value
// 	}
	
// }


// class Wizards extends Fighters{
// 	constructor(options){
// 		super(options);
// 		this._magicAtack = options._magicAtack
// 		this._magicAtackDamage= options._magicAtackDamage;
// 		this._magicAtackStartTime = options._magicAtackStartTime;
// 		this._magicAtackTime = options._magicAtackTime;
// 		this._healthRestore = options._healthRestore;
// 		this._healthRestoreTime = options._healthRestoreTime;
// 	}
	
// 	set magicAtack(value){
// 		return this.magicAtack = value
// 	}
// 	set damageUp(value){
// 		return this._damage += value
// 	}
// 	magicAStart(){
// 		setTimeout( ()=>{
// 			this._magicAtack = !this._magicAtack
// 			return this.magicAEnd()
// 		},_magicAtackStartTime*1000)
// 	}
// 	magicAEnd(){
// 		setTimeout( ()=>{
// 			this._magicAtack = !this._magicAtack
// 			return this.magicAStart()
// 		},_magicAtackTime*1000)
// 	}

// 	healthDamag(){
// 		return this._healthPoints -= value
// 	}
// 	healthRestore(){
// 		if(this._healthPoints < 100){
// 			setTimeout( ()=>{
// 				this._healthPoints += Math.ceil(this._healthPoints*this._healthRestore/100)
// 				if(this._healthPoints > 100 ) this._healthPoints = 100
// 				return this.healthRestore()
// 			}, this._healthRestoreTime*1000)
// 		}
// 	}

// }

// const Warrior = new Warriors({
// 	units:10,
// 	_healthPoints:100,
// 	_stamina:100,
// 	_damage:20,
// 	block:5,
// 	price:20,
// 	_healthRestore:5,
// 	_healthRestoreTime:10
// })

// const Wizard = new Wizards({
// 	units:10,
// 	_healthPoints:100,
// 	_stamina:100,
// 	_damage:20,
// 	_magicAtack:false,
// 	_magicAtackDamage:90,
// 	_magicAtackStartTime:20,
// 	_magicAtackTime:5,
// 	price:20,
// 	_healthRestore:5,
// 	_healthRestoreTime:10
// })
