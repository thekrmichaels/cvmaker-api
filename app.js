const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongodb = require('./src/database/mongodb/connection')

const backgroundsRouter = require('./routes/backgrounds')
const categoriesRouter = require('./routes/categories')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

mongodb()
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/api', backgroundsRouter)
app.use('/api', categoriesRouter)
app.use('/users', usersRouter)

module.exports = app
