function Comment(id: number) {
	console.log('init component')
	return (target: Function) => {
		console.log('run component')
		target.prototype.id = id
	}	
}

function Logger() {
	console.log('init logger')
	return (target: Function) => {
		console.log('run logger')
	}	
}

function Method (
	target: Object,
	propertyKey: string,
	propertyDesctiptor: PropertyDescriptor
) {
	console.log(propertyKey)
	const oldValue = propertyDesctiptor.value
	propertyDesctiptor.value = function(... args: any[]) {
		return args [0] * 10
	}
}

function Prop(
	target: Object,
	propertyKey: string
) {
	let value: Number

	const getter = () => {
		console.log('Get!')
		return value
	}

	const setter = (newValue: number) => {
		console.log('Set!')
		value = newValue
	}

	Object.defineProperty(target, propertyKey, {
		get: getter,
		set: setter
	})

}

function Param(
	target: Object,
	propertyKey: string,
	index: number
) {
	console.log(propertyKey, index)
}


@Logger()
@Comment(1)
export class User {
	@Prop id: number
	@Method
	updateId(@Param newId: number) {
		this.id = newId
		return this.id
	}
}



console.log(new User().id)
console.log(new User().updateId(2))