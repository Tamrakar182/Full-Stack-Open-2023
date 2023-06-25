const config = require('./utils/config')
const express = require('express')
const index = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

index.use(cors())
index.use(express.json())
index.use(middleware.requestLogger)
index.use('/api/blogs', blogRouter)


index.use(middleware.unknownEndpoint)

module.exports = index