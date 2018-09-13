const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const queries = require('./queries')


app.use(bodyParser.json())
const listener = () => `Listening on port ${port}!`
app.listen(port, listener)


app.get('/', (req, res) => {
  queries.getAll().then(response => res.send(response))
})

app.post('/', (req, res) => {
  queries.create(req.body).returning('*')
    .then(response.status(201))
})

app.delete('/id', (request, response) => {
  queries.delete(request.params.id)
})

module.exports = app
