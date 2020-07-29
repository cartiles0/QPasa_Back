const router = require('express').Router()

const {
  getEvent,
  getEventsByTag,
  getEventsBySearch,
  createEvent,
  updateEvent,
  addEventsSaves,
  addEventsAttendance,
  addEventsViews,
  deleteEvent
} = require('../controllers/events.controller')

router
  .get('/:eventId', getEvent)
  .get('/tags/:tagId', getEventsByTag)
  .get('/search/:term', getEventsBySearch)
  .post('/me', createEvent)
  .put('/me/:eventId', updateEvent)
  .put('/me/:eventId/saves', addEventsSaves)
  .put('/me/:eventId/attendance', addEventsAttendance)
  .put('/me/:eventId/views', addEventsViews)
  .delete('/me/:eventId', deleteEvent)

module.exports = router
