import express from 'express'
import bodyParser from 'body-parser'
// import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = 4000
// const connectionString = "postgres://archiemartin@localhost:5432/database_server_techtest"
// const pgClient = new pg.Client(connectionString)

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

app.listen(PORT, () => {
  console.log('App running on port ' + PORT + '.')
})