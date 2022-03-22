import express from 'express'
import { userRouter } from './users/users.js'


const port = 8000
const app = express()

app.use((req,res,next) => {// router который стработает при каждом запросе 
	console.log('Время', Date.now())
	next()
})

app.get('/hello', (req, res) => {//создаём ошибку
	throw new Error('Error!!!')
})

app.use('/users', userRouter)// запрос начинающийся на /users будет перенаправлен на роутер userRouter 

app.use((err,req,res,next) => {// если ошибка то он придёт в этот роут
	console.log(err.message)
	res.status(401).send(err.message)
})
	
app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`)
})
