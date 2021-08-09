const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room', roomExists: 'false'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.get('/room/:room/:status', RoomController.open)
route.post('/create-room', RoomController.create)
route.post('/enter-room', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

route.get('/*', (req, res) => res.render('page-not-found'))


module.exports = route