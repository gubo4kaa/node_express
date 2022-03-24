interface HasLength {
	length: number
}


function log<T extends HasLength, K>(obj: T, arr: K[]): K[]{
	console.log(obj)
	return arr
}

log<string, number>('se', [1])

interface IUser {
	name: string;
	age?: number;
	bid: (sum: number) => boolean
}

function bid(sum: number): boolean {
	return true
}

class Coord {
	
	lat:number;
	long: number;

	computeDistance(newLat: number, newLong: number): number {
		return 0
	}

	constructor(lat: number, long: number) {
		this.lat = lat
		this.long = long
		
	}
}

const point = new Coord(0,1)

class MapLocation extends Coord {

	private _name: string;

	get name() {//геттер для того, что бы изменять параметры всегда при необходимости, можно приписать доп логику, для обработки обычных переменных
		return this._name
	}

	set name(s: string) {
		this._name = s + '_cool!'
	}

	protected test() {
		if(this.lat > 0) {

		}
	}

	override computeDistance(newLat: number, newLong: number): number { // override используем для того, что бы никогда не изменился метод в исходном классе
		console.log(this.name)
		return 0
	}
	
	constructor(lat: number, long: number, name: string) {
		super(lat, long)
	}
}

const loc = new MapLocation(1, 2,'ghdf')





interface LoggerService {// обстракции которые позволяют увидеть как должно что то работать
	log: (s: string) => void
}

class Logger implements LoggerService {
	log(s: string) {
		console.log(s)
	}


}

const l = new Logger()
l.log('d')


class MyClass<T> {
	a: T
	
}

const e = new MyClass<string>()

e.a

interface _base {
	name: string,
	age: number
}

abstract class Base {// обстрактные классы
	print(s: string) {
		console.log(s)
	}
	names: _base = {
		name: "tom",
		age: 8
	}
}

class BaseExtended extends Base {

}


new BaseExtended().names

type Co2ord = { //typeof может привести одну пременную к такому же типу, что и другая
	lat: number
	long: number
}

type P = keyof Co2ord

const y: P = 'lat'

function logen(a: string | null):void {// тип void означает что данная функция ничего не возвращает
	a?.toLowerCase()
}

const p: bigint = BigInt(100)
const K: symbol = Symbol('asjfl')
const j: symbol = Symbol('asjfl')