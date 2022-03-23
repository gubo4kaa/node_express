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