const express = require('express')
const app = express()
var redis = require('redis');

if (process.env.NODE_ENV === "development") {
  require('dotenv').config({path: './config/.env.dev'})
  console.log(process.env.HOST)
} else {
  require('dotenv').config({path: './config/.env.production'})
}

app.get('/hello1', function (req, res) {
  writeSession()
  res.send(`Hello-1 Container ID: ${process.env.HOSTNAME}`)
})

app.listen(8000, () => console.log('Hello-1 listening on port 8000!'))

function writeSession() {


  var dt = new Date();
  var utcDate = dt.toUTCString();
  var client = redis.createClient(process.env.PORT, process.env.HOST);
  client.on('connect', function () { console.log('Redis client connected') })
  client.on('error', function (err) { console.log('Something went wrong ' + err) })
  client.get('lastest_session_id', function (error, id) {
    if (error) {
      console.log(error);
      throw error;
    }
    if (id == null) {
      id = 1
    } else {
      id = Number(id) + 1
    }
    client.set('lastest_session_id', id, redis.print);
    client.set(id, utcDate, redis.print);
    console.log(id)
  })
}