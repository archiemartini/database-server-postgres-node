import express from 'express'
import bodyParser from 'body-parser'
// import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = 4000
// const connectionString = "postgres://archiemartin@localhost:5432/database_server_techtest"
// const pgClient = new pg.Client(connectionString)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express and Postgres Api'})
})

app.listen(PORT, () => {
  console.log('App running on port ' + PORT + '.')
})