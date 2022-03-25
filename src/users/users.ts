import express from 'express'

const userRouter = express.Router()

userRouter.use((req, res,next) => {// router который сработает при каждом запросе который начинается на /users
	console.log('Оброботчик зпросос на юзера')
	next()
})

userRouter.post('/login',(req, res)=>{
	res.send('login!')
})

userRouter.post('/register', (req,res) => {
	res.send('register!')
})

export { userRouter }