const express = require('express')
const app = express()

app.get('/hello2', function (req, res) {
	res.send(`Hello-2 Container ID: ${process.env.HOSTNAME}`)
})

app.listen(8000, () => console.log('Hello-2 listening on port 8000!'))
