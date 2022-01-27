const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/login', (req, res) => {
  res.send('Login Page')
})

app.listen(8000, () => {
  console.log('Server is running')
})
