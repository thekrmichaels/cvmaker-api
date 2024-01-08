const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongodb = require('./src/database/mongodb/connection')
const path = require('path')

const backgroundsRouter = require('./routes/backgrounds')
const categoriesRouter = require('./routes/categories')
const docsRouter = require('./routes/docs')
const resumesRouter = require('./routes/resumes')

mongodb()
const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'docs')))

app.use('/', docsRouter)
app.use('/api', backgroundsRouter)
app.use('/api', categoriesRouter)
app.use('/api', resumesRouter)

module.exports = app
