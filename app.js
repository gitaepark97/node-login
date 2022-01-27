// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.get('/login', (req, res) => {
//   res.send('Login Page')
// })

// app.listen(8000, () => {
//   console.log('Server with express is running')
// })

const http = require('http')
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }) // 한글 적용
  if (req.url === '/') {
    res.end('Hello World')
  } else if (req.url === '/login') {
    res.end('Login Page')
  }
})

app.listen(8000, () => {
  console.log('Server with http is running')
})
