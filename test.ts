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