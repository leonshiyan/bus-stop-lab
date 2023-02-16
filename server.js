// import npm packages
require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')

// import routers
const indexRouter = require('./routes/index.js')
const stopsRouter = require('./routes/stops.js')
const routesRouter = require('./routes/routes.js')
// create the express app
const app = express()

// basic middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

// mount imported routes
app.use('/', indexRouter)
app.use('/api/stops', stopsRouter)
app.use('/api/routes', routesRouter)

// handle 404 errors
app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

// handle all other errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = app
