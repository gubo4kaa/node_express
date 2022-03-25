import { join } from "path"

let a: number = 5
let b: string = '4'
let c: number = a + Number(b)


let d: boolean = true

let names:string[] = ['sd', 'sdkljskl']  //массив из строк


let ages: number[] = [4, 3]//массив из намберов

let tup: [number, string] = [2, 'dsfkjslkd']  // таппле - здесь может храниться только 2 любых значения

tup.push('adsfsdf')

let e: any = 3 // это переменная которой мы можем задать любое значение как и в обычном js крайне не рекомендуется  
e = 'sdkfjlks'
e = true

let anyArr: any[] = ['sdfsn', 3, true]

function greet(name:string): string {
	return name + 'HI'
}

names.map((x: string) =>x)


function coord(coord: {lat: number, logn: number}) {
	
}

let universalId: number | string = 5;
universalId = 'sdfsd'
function printId(id:number | string) {
	if (typeof id == 'string') {
		console.log(id.toUpperCase())
	} else {
		console.log(id)
	}
	console.log(id)
}

function helloUser(user: string | string[]) { // разводим типы данных простой проверкой на типы, что бы всегда знать с чем мы работаем
	if (Array.isArray(user)) {
		console.log(user.join(', ')+ 'HI!')
	} else {
		console.log(user + 'HI!')
	}
}

// интерфейсы и тайпы, лучше интерфейсы конечно:

type coord = {lat: number, long: number} //объявляем интерфес для того,что бы переиспользовать его далее
 
interface ICoord {// интерфейсы описывают только объекты
	lat: number;
	long: number;

}

type ID = number | string // юнион тайпы полезны для уменьшения написания кода
 


function compute(coord: ID) {

}

interface Animal {
	name: string;
}

interface Dog extends Animal {// здесь добавляем интерфейсу Анимал ещё значнгие на хвост ? знак означает, что может этого занчения и не быть
	tail?: boolean;
}

const dog: Dog ={
	name: 'sdfjls'
}

interface Dog2 {
	name: String
}
interface Dog2 {
	tail: boolean
}

const dog2: Dog2 = {
	name: 'weij',
	tail: true
}


// Cтроки и литералы:

const z = 'sdlfjslfdskj'


type direction = 'left' | 'rigth';

function moveDog(direction: direction): -1 | 0 | 1 {
	switch(direction) {
		case 'left':
			return -1
		case 'rigth':
			return 1
		default:
			return 0
	}
}


const connection = {
	host: 'localhost',
	protocol: 'https' as 'https'//приведение к типу, так как ts знает что значение строки может измениться 
}




function connect(host: string, protocol: 'http' | 'https') {

}

connect(connection.host, connection.protocol)


// enum

type dirrection = 'left' | 'right' // юнион тайп

enum Direction {
	Left, 
	Right
}

Direction.Left

function move(direction: Direction) {
	switch(direction) {
		case Direction.Left:
			return -1
		case Direction.Right:
			return 1
	}
}

function objMod(obj: { Left: number}) {

}

objMod(Direction)

const enum Direction2 {
	Up,
	Down
}

let myDirection = Direction2.Up
