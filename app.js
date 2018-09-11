const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const listener = () => `Listening on port ${port}!`
app.listen(port, listener)


app.get('/', (req, res) => {

  res.send('working')
})






module.exports = app