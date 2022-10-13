import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = 4000

let keyValueData = {}

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/set', (request, response) => {
  const data = request.query
  const key = Object.keys(data)[0]
  const value = Object.values(data)[0]
  keyValueData[key] = value
  response.json(keyValueData)
})

app.get('/', (request, response) => {
  response.json(keyValueData)
})

app.get('/get', (request, response) => {
  const query = request.query
  const key = Object.keys(query)[0]
  const searchKey = Object.values(query)[0]
  response.send(JSON.stringify({ [key]: keyValueData[searchKey]}))
})

app.listen(PORT, () => {
  console.log('App running on port ' + PORT + '.')
})