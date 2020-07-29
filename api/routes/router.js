const router = require('express').Router()

const usersRouter = require('./users.router')
const eventsRouter = require('./events.router')
const tagsRouter = require('./tags.router')

router
  .use('/users', usersRouter)
  .use('/events', eventsRouter)
  .use('/tags', tagsRouter)

 module.exports = router
