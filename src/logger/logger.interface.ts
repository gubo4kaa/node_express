import  {Logger } from 'tslog'

export interface ILogger {// logger который мы используем в системе должен удовлетворять следующий интерфейс
	logger: unknown

	log: (...arg: unknown[]) => void
	error: (...arg: unknown[]) => void
	warn: (...arg: unknown[]) => void
}