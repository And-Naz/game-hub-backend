// -----------------------5.QUESTION-----------------------

// 5) Գրեք երկու կլասս Warriors ու Wizards, որոնք կժառանգեն 1 կլասսից Fighters։ Warriors ու 
// Wizards կլասսերում պետք է լինեն նմանատիպ property-ներ էկզեմպլյառներին տրվող, 
// healthPoints, damage, stamina (սահմանափակվում է ձեր ֆանտազիայով :D)։ 
// Նաև պետք է լինեն տարբեր մեթոդներ երկու կլասսերում հարվածներ հասցնելու, 
// կյանքեր վերականգնելու և պաշտպանվելու համար։ Առաջադրանքը ազատ ոճի մեջ է,
//  ամեն ինչ կախված է ձեր ռեալիզացիայից, սահմանափակումներ չկան

 
// -----------------------5.ANSWER-----------------------
class Fighters{
	constructor(options){
		this._steps = options.steps
		this._damage = 20;
		this._healthPoints = 100;
		this._step = 0;
		this.Url = ['media/Paper/Paper.jpeg','media/Rock/Rock.jpeg','media/Scissors/Scissors.jpeg']
		this.lose = false
	}
	set damage(value){
		return this._damage += value
	}
	get steps(){
		if(this._steps[this._step] === 0) {
			this._step++
			return {
			result:0,
			anim:this.animBlock
			}
		}
		if(this._steps[this._step] === 1) 
		{
			this._step++
			return {
			result:1,
			anim: this.animAtack
			}
		}
		if(this._steps[this._step] === 2) {
			if(this._healthPoints - this._damage  <= 0) this.lose = true
			this.healthPoints = this._damage
			this._damage = 20
			this._step++
			if(this.lose === true){
				return {
				result:3,
				lose:true
				}
			}
			return {
				result:2,
				anim:this.animDamag
				}
			
		}

	}
	set steps(value){
		return this._steps.push(value)
	}
	set healthPoints(value){
		 
		return this._healthPoints -= value
	}
	set step(value){
		return this._step = value
	}
	
} 
class Scorpion extends Fighters{
	constructor(options){
		super(options);
		this.animStart = "http://www.fightersgeneration.com/nz2/char/scorpion-mk-hd-sprite-cancelled-project.gif"
		this.animAtack = "http://www.fightersgeneration.com/nf8/char6/scorpion-mortalkombat-fan-remake-punch.GIF"
		this.animBlock = "http://www.fightersgeneration.com/nf8/char6/scorpion-mortalkombat-fan-remake-crouch.GIF"
		this.animDamag = "http://www.fightersgeneration.com/news2021/char2/scorpion-mortal-kombat-1-remake-stumble.GIF"
		this.win = "http://www.fightersgeneration.com/news2021/char2/mk1-scorpion-fatality-hd.GIF"
		this.lose = "http://www.fightersgeneration.com/news2021/char2/mk1-scorpion-dizzy-hd.GIF"
	}
	
}
class SubZero extends Fighters{
	constructor(options){
		super(options);
		this.animStart = "http://www.fightersgeneration.com/nz2/char/subzero-mk-hd-stance-cancelled-project.GIF"
		this.animAtack = "http://www.fightersgeneration.com/nz2/char/subzero-mk-hd-iceblast-cancelled-project.GIF"
		this.animBlock
		 = "http://www.fightersgeneration.com/nz2/char/subzero-mk-hd-slide-cancelled-project.GIF"
		this.animDamag = "http://www.fightersgeneration.com/nz2/char/subzero-mk-hd-stance-cancelled-project.GIF"
		this.win = "http://www.fightersgeneration.com/nz2/char/subzero-mk-hd-fatality-cancelled-project.GIF"
		this.lose = "http://www.fightersgeneration.com/news2021/char2/mk1-scorpion-dizzy-hd.GIF"
	}
}


const player1 = new Scorpion({
	steps:[]
})
const computer = new SubZero({
	steps:[]
})
document.querySelector("#player1").style.backgroundImage = `url("${player1.animStart}")`
document.querySelector("#computer").style.backgroundImage = `url("${computer.animStart}")`

document.querySelector("#start").addEventListener('click', (event) => {
	document.querySelector(".start-box").style.height = '0px' 
	start()
})	
function start(){
	document.querySelector("#leftBar").classList.toggle('active');
	document.querySelector("#rightBar").classList.toggle('active');
	document.querySelector("#damag").classList.toggle('active');
	document.querySelector("#count").innerHTML = 1
}

function choice(val){
	
	let rand = Math.floor(Math.random() * (3 - 0))
	// let rand = 1
	console.log(rand)
	document.querySelector("#pcChoice").src = "media/load.gif"
	setTimeout(function(){
		document.querySelector("#pcChoice").src = computer.Url[rand]
			setTimeout(function(){
				console.log(rand)
			if(val === 0 && rand === 1 || val === 1 && rand === 2 || val === 2 &&  rand === 0)  {
				player1.steps = 1
				computer.steps = 2
				game(player1,computer,player1._step+1)
			}
			if(val === 0 && rand === 2 || val === 1 && rand === 0 || val === 2 &&  rand === 1)  {
				player1.steps = 2
				computer.steps = 1
				game(player1,computer,player1._step+1)
			}
			if(val === rand )  {
				if(player1._damage/20 === 3){ 
					document.querySelector("#damag").innerHTML = 'MAX DAMAG <span id="count">3</span>X'
					return 
				}
				player1.damage = 20
				document.querySelector("#count").innerHTML = player1._damage/20

			}
		},1000)
	},5500)

}
function game(p1,p2,round = 1){
	document.querySelector("#leftBar").classList.toggle('active');
	document.querySelector("#rightBar").classList.toggle('active');
	document.querySelector("#damag").classList.toggle('active');
	document.querySelector("#round").innerHTML = `<div class="round">ROUND <span class="step">${round}</span></div>`
	const stepPlayer1 = p1.steps
	const stepComputer = p2.steps
	box(stepPlayer1,stepComputer)
	
}
function box(p1,p2){
	
	setTimeout(function(){
  	 document.querySelector("#player1").style.backgroundImage = `url("${p1.anim}")`
  	 document.querySelector("#computer").style.backgroundImage = `url("${p2.anim}")`
	 	setTimeout(function(){
  			document.querySelector("#player1").style.backgroundImage = `url("${player1.animStart}")`
  			document.querySelector("#computer").style.backgroundImage = `url("${computer.animStart}")`
  			document.querySelector("#healthPointP1").style.setProperty('--health1', `${player1._healthPoints}%`);
  	 		document.querySelector("#healthPointP2").style.setProperty('--health2', `${computer._healthPoints}%`);

  	 		if(p1.result !== 3 && p2.result !== 3){
  	 			start()
  	 		}else if(p1.result === 3 || p2.result === 3){
				if(p1.lose){
					document.querySelector("#desk").innerHTML += `<div id="win">
					<h2>Win <span id='winerName'>PC</span></h2>
				</div>`
					return document.querySelector("#computer").style.backgroundImage = `url("${computer.win}")`
				}else{
					document.querySelector("#desk").innerHTML += `<div id="win">
						<h2>Win <span id='winerName'>User</span></h2>
					</div>`
					return document.querySelector("#player1").style.backgroundImage = `url("${player1.win}")`
				}
			}
	 	}, 2500)
 	}, 1000)
}

