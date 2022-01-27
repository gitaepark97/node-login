const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home/index')
})

app.get('/login', (req, res) => {
  res.render('home/login')
})

app.listen(8000, () => {
  console.log('Server with express is running')
})
