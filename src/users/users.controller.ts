import { NextFunction, Request, Response } from "express"
import { inject, injectable } from "inversify"
import { BaseController } from "../common/base.controller"
import { ILogger } from "../logger/logger.interface"
import { TYPES } from "../types"
import 'reflect-metadata'


@injectable()
export class UserController extends BaseController{
	constructor(@inject(TYPES.ILogger) private LoggerService: ILogger) {
		super(LoggerService)
		this.bindRoutes([
			{path: '/register', method: 'post', func: this.register},
			{path: '/login', method: 'post', func: this.login},
		])
	}

	async login(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'login')
	}

	async register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register')
	}
}