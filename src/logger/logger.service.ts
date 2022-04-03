import { injectable } from 'inversify';
import {Logger} from 'tslog'
import { ILogger } from './logger.interface';
import 'reflect-metadata'


@injectable()
export class LoggerService  implements ILogger { // конкретная имплементация конкретного логгера, создание его
	public logger: Logger


	constructor() {
		this.logger = new Logger({
			displayInstanceName: false,
			displayLoggerName: false,
			displayFilePath: 'hidden',
			displayFunctionName: false
		})
	}

	log(...arg: unknown[]) {
		this.logger.info(...arg);
	}
	
	error(...arg: unknown[]) {
			// отправка в sentry / rollbar
		this.logger.error(...arg);
	}

	warn(...arg: unknown[]) {
		this.logger.warn(...arg);
	}
	
}

