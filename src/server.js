const express = require('express')
const route = require('./route')
const path = require('path')
const port = 3000

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true})) /* -> Middleware */

server.use(route)

server.listen(port, () => console.log(`started application on http://localhost:${port}`))
