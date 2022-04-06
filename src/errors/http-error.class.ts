import { ExeptionFilter } from './exeption.filter';

export class HTTPError extends Error {
	statusCode: number;
	context?: string;

	constructor(statusCode: number, message: string, constext?: string) {
		super(message);
		this.statusCode = statusCode;
		this.message = message;
		this.context = constext;
	}
}
