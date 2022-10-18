const express = require('express')
const bodyParser = require( 'body-parser')
const db = require('./queries.js')


const app = express();
const PORT = 4000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/set', db.setKeyValuePair)
app.get('/get', db.getValueFromKey)

app.listen(PORT, () => {
  console.log('App running on port ' + PORT + '.')
})