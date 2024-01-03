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
app.get('/todo', (req, res) => {
  res.status(200).render('todo', {
    todos: data,
  })
})
app.post('/todo', (req, res) => {
  const newTodo = {
    name: req.body.name,
    isDone: false,
  }
  data.push(newTodo)
  res.redirect('/todo')
})

app.listen(8000, () => {
  console.log(`server is running http://localhost:8000`)
})
