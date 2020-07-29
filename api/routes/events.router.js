const router = require('express').Router()

const {
  getAllEvents,
  getEvent,
  getEventsByTag,
  getEventsBySearch,
  createEvent,
  updateEvent,
  addEventSaves,
  addEventsAttendance,
  addEventsViews,
  deleteEvent
} = require('../controllers/events.controller')

router
  .get('/', getAllEvents)
  .get('/:eventId', getEvent)
  .get('/tags/:tagId', getEventsByTag)
  .get('/search/:term', getEventsBySearch)
  .post('/me', createEvent)
  .put('/me/:eventId', updateEvent)
  .put('/me/:eventId/save', addEventSaves)
  .put('/me/:eventId/attendance', addEventsAttendance)
  .put('/me/:eventId/views', addEventsViews)
  .delete('/me/:eventId', deleteEvent)

module.exports = router
