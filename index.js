import express from 'express'


const port = 8000
const app = express()

app.get('/hello', (req, res) => {
	res.cookie('token', 'sdfskf', {
		damain: '',
		path: '/',
		secure: true,
		expires: 230000
	})
	res.clearCookie('token')
	res.send('ПРивет')
})
	
app.listen(port, () => {
	console.log(`Сервер запущен на http://localhost:${port}`)
})
