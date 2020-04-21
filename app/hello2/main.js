const express = require('express')
const app = express()

if (process.env.NODE_ENV === "development") {
	require('dotenv').config({ path: './config/.env.dev' })
	console.log(process.env.HOST)
} else {
	require('dotenv').config({ path: './config/.env.production' })
}

app.get('/hello2', function (req, res) {
	res.send(`Hello-2 Container ID: ${process.env.HOSTNAME}`)
})

app.listen(8000, () => console.log('Hello-2 listening on port 8000!'))
