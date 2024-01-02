const express = require('express')
const path = require('path')
const todos = require('./data/todos')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))

let data = todos

app.get('/', (req, res) => {
  res.status(200).render('index')
})

app.listen(8000, () => {
  console.log(`server is running http://localhost:8000`)
})
