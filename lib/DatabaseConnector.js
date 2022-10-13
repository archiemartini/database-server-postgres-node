const Pool = require('pg').Pool

const pool = new Pool({
  user: 'archiemartin',
  host: 'localhost',
  database: 'database_server_test',
  port: 5432
})

const setKeyValuePair = (request, response) => {
  const query = request.query
  const key = Object.keys(query)[0]
  const value = Object.values(query)[0]

  pool.query('INSERT INTO keyvaluepairs (key, value) VALUES ($1, $2) RETURNING *', [key, value], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Key value pair added with ID: ${results.rows[0].id}`)
  })
}

const getValueFromKey = (request, response) => {
  const query = request.query
  const searchKey = Object.values(query)[0]

  pool.query('SELECT * FROM keyvaluepairs WHERE key = $1', [searchKey], (error, results) => {
    if (error) {
      throw error
    } else {
    response.status(200).json(results.rows)
    }
  })
}


module.exports = {
  setKeyValuePair,
  getValueFromKey
}