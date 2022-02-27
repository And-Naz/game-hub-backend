// Variables
let xLength			= 9
let yLength			= 9
let filedsCount	= xLength * yLength
let minesQount		= 10
let mines			= []
let gameMap			= []
let gameMapCopy	= []
let writeFlag		= false

// CONSTANTS
const BOMB		= 'B'
const flag		= 'F'
const counts	= [0, 1, 2, 3, 4, 5, 6, 7, 8]
const CLOSED 	= 'C'
const OPENED 	= 'O'

//Virtual DOM
let div_class__wrapper		= Element('<div></div>', 'wrapper')
let div_class__container	= Element('<div></div>', 'container')

mines = CreatMines()
gameMap = CreateMinesGrid(xLength, yLength)
gameMapCopy = CreateMinesGrid(xLength, yLength, CLOSED)
PutBombs(gameMap)
console.log(' ', ' 0 1 2 3 4 5 6 7 8');
for(var i = 0; i < gameMap.length; i++) {
	console.log(i, gameMap[i].join(' '))
}

$(document).ready(() => {
	let div_class__wrapper = Element('<div></div>', 'wrapper')
	let div_class__container = Element('<div></div>', 'container')
	$(document.body).html(div_class__wrapper)
	$(div_class__wrapper).append(div_class__container)
	for(var i = 0; i < gameMap.length; i++) {
		let line = Element('<div></div>', 'line')
		for(var j = 0; j < gameMap[0].length; j++) {
			let rectangle	= Element('<div></div>', 'rectangle rectangleHide')
			$(rectangle).on('click', () => { ClickAction($(rectangle)) })
			line.append(rectangle)
		}
		div_class__container.append(line)
	}
})

function CreatMines() {
	let arr = []
	for(let i = 0; i < minesQount; i++) {
		let j = Math.floor(Math.random() * filedsCount);
		while( arr.indexOf(j) !== -1 ) {
			j = Math.floor(Math.random() * filedsCount);
		}
		arr.push(j)
	}
	return arr
}
function CreateMinesGrid(x, y, sym) {
	if (sym === undefined) {
		sym = 0
	}
	let arr = []
	for(var i = 0; i < y; i++) {
		let littleArr = []
		for(var j = 0; j < x; j++) {
			littleArr.push(sym)
		}
		arr.push(littleArr)
	}
	return arr
}
function PutBombs(arr) {
	for(var y = 0; y < yLength; y++) {
		for(var x = 0; x < xLength; x++) {
			let tmp = y * yLength + x
			if (mines.indexOf(tmp) !== -1) {
				arr[y][x] = BOMB
				WriteNumbers(arr, y, x)
			}
		}
	}
}
function WriteNumbers(arr, arr_y, arr_x) {
	let isNotFirstRow		= arr_y === 0 				? false : true,
		 isNotLastRow		= arr_y === yLength - 1	? false : true,
		 isNotFirstColumn	= arr_x === 0 				? false : true,
	 	 isNotLastColumn	= arr_x === xLength - 1	? false : true;

	if (isNotFirstRow) {
		let val = arr[arr_y - 1][arr_x]
		if (typeof val === 'number') {
			arr[arr_y - 1][arr_x] = Math.min(++val, 8)
		}
	}
	if (isNotLastRow) {
		let val = arr[arr_y + 1][arr_x]
		if (typeof val === 'number') {
			arr[arr_y + 1][arr_x] = Math.min(++val, 8)
		}
	}
	if (isNotFirstColumn) {
		let val = arr[arr_y][arr_x - 1]
		if (typeof val === 'number') {
			arr[arr_y][arr_x - 1] = Math.min(++val, 8)
		}
	}
	if (isNotLastColumn) {
		let val = arr[arr_y][arr_x + 1]
		if (typeof val === 'number') {
			arr[arr_y][arr_x + 1] = Math.min(++val, 8)
		}
	}
	if (isNotFirstRow && isNotFirstColumn) {
		let val = arr[arr_y - 1][arr_x - 1]
		if (typeof val === 'number') {
			arr[arr_y - 1][arr_x - 1] = Math.min(++val, 8)
		}
	}
	if (isNotFirstRow && isNotLastColumn) {
		let val = arr[arr_y - 1][arr_x + 1]
		if (typeof val === 'number') {
			arr[arr_y - 1][arr_x + 1] = Math.min(++val, 8)
		}
	}
	if (isNotLastRow && isNotFirstColumn) {
		let val = arr[arr_y + 1][arr_x - 1]
		if (typeof val === 'number') {
			arr[arr_y + 1][arr_x - 1] = Math.min(++val, 8)
		}
	}
	if (isNotLastRow && isNotLastColumn) {
		let val = arr[arr_y + 1][arr_x + 1]
		if (typeof val === 'number') {
			arr[arr_y + 1][arr_x + 1] = Math.min(++val, 8)
		}
	}
}
function Element(elem, classes, id) {
	let e = $(elem)
	if (id !== undefined) {
		e.attr('id', id)
	}
	if (classes !== undefined) {
		e.addClass(classes)
	}
	return e
}
function ClickAction(elem) {
	if (!($(elem).hasClass( "rectangleHide" ))) { return }
	let y = $(elem).parent().index()
	let x = $(elem).index()
	let v = gameMap[y][x]
	if (writeFlag) {
		console.log('Chpiti mtni ste');
	} else {
		if (v === BOMB) {
			Open(y, x)
			alert('Game Over')
			return
		}
		let t = counts.indexOf(v)
		StartOpen(y, x)
		// -> Doesn't work yet
		// if (gameMap[y][x] === flag) {
		// 	// Open like (counts.indexOf(v) !== -1)
		// 	return
		// }
	}
}
function Open(coord_y, coord_x, current) {
	if (gameMapCopy[coord_y][coord_x] === OPENED ) { return OPENED}
	if (typeof current === 'undefined') {
		current = false
	}
	gameMapCopy[coord_y][coord_x] = OPENED
	let icon = gameMap[coord_y][coord_x]
	if (current && icon === BOMB) {
		alert('Game Over')
		return BOMB
	}
	if (!current && counts.indexOf(icon) !== -1) {
		let currentLine = $('.line').get(coord_y)
		let elem = $(currentLine).children().eq(coord_x)
		$(elem).removeClass( "rectangleHide" )
		if (icon > counts[0]) {
			let img = $('<img />', { src: `icons/${icon}.svg`})
			$(elem).append(img)
			return null
		}
		return icon
	}
	if (!current && icon === BOMB) {
		return BOMB
	}
	return null
}
function OpenToLeft(coord_y, coord_x) {
	let retVal = Open(coord_y, coord_x)
	if (typeof retVal === 'null') {
		return
	}
	let isNotFirstColumn	= coord_x === 0 ? false : true
	if (isNotFirstColumn) {
		for(var i = coord_x - 1; i >= 0; i--) {
			let retVal = Open(coord_y, i)
			if (retVal !== counts[0]) {
				OpenToTop(coord_y, i)
				OpenToBottom(coord_y, i)
				return
			}
		}
	}
}
function OpenToRight(coord_y, coord_x) {
	let retVal = Open(coord_y, coord_x)
	if (typeof retVal === 'null') {
		return
	}
	let isNotLastColumn = coord_x === xLength - 1 ? false : true
	if (isNotLastColumn) {
		for(var i = coord_x + 1; i < xLength; i++) {
			let retVal = Open(coord_y, i)
			if (retVal !== counts[0]) {
				OpenToTop(coord_y, i)
				OpenToBottom(coord_y, i)
				return
			}
		}
	}
}
function OpenToTop(coord_y, coord_x) {
	let retVal = Open(coord_y, coord_x)
	if (typeof retVal === 'null') {
		return
	}
	let isNotFirstRow = coord_y === 0 ? false : true
	if (isNotFirstRow) {
		for(var i = coord_y - 1; i >= 0; i--) {
			let retVal = Open(i, coord_x)
			OpenToLeft(i, coord_x)
			OpenToRight(i, coord_x)
			if (retVal !== counts[0]) {
				return
			}
		}
	}
}
function OpenToBottom(coord_y, coord_x) {
	let retVal = Open(coord_y, coord_x)
	if (typeof retVal === 'null') {
		return
	}
	let isNotLastRow = coord_y === yLength - 1 ? false : true
	if (isNotLastRow) {
		for(var i = coord_y + 1; i < yLength; i++) {
			let retVal = Open(i, coord_x)
			OpenToLeft(i, coord_x)
			OpenToRight(i, coord_x)
			if (retVal !== counts[0]) {
				return
			}
		}
	}
}
function StartOpen(coord_y, coord_x) {
	let retVal = Open(coord_y, coord_x)
	console.log('retVal ', retVal)
	if (retVal === counts[0]) {
		setTimeout(OpenToLeft, 1, coord_y, coord_x)
		setTimeout(OpenToRight, 1, coord_y, coord_x)
		setTimeout(OpenToTop, 1, coord_y, coord_x)
		setTimeout(OpenToBottom, 1, coord_y, coord_x)
	}
}
