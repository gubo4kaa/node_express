import 'reflect-metadata';

function Test(target: Function) {
	Reflect.defineMetadata('a', 1, target);
	const meta = Reflect.getMetadata('a', target);
	console.log(meta);
}

function Prop(target: Object, name: string) {}

@Test
export class C {
	@Prop prop: number;
}

export class falka {
	name: string;
	fersname: string;
	constructor(name: string, fersname: string) {
		this.name = name;
		this.fersname = fersname;
	}

	print() {
		console.log(this.name, this.fersname);
	}
}

const y = new falka('Danil', 'Falka');
y.print();

export class ded extends falka {
	nose: number;

	constructor(name: string, fersname: string, nose: number) {
		super(name, fersname);
		this.nose = nose;
	}

	lengthNose(n: any): void {
		n += n;
		console.log(this.name, this.fersname, n);
		console.log(this.nose);
	}
}
const dedushka = new ded('Falka', 'Volodimir', 3);
dedushka.lengthNose(3);
