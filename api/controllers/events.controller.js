const EventModel = require('../models/events.model')

function getAllEvents (req, res) {
  EventModel
    .find(req.query)
    .then(events => { res.json(events) })
    .catch(err => res.json(err))
}

function getEvent (req, res) {
  EventModel
    .findById(req.params.eventId)
    .then(user => res.json(user))
    .catch(err => console.error(err))
}

function getEventsByTag (req, res) {
  console.log('getEventsByTag')
}

function getEventsBySearch (req, res) {
  console.log('getEventsBySearch')
}

function createEvent (req, res) {
  EventModel
    .create(req.body)
    .then(event => res.json(event))
    .catch(err => res.json(err))
}

function updateEvent (req, res) {
  EventModel
    .findByIdAndUpdate(req.params.eventId, req.body, { new: true })
    .then(event => res.json(event))
    .catch(err => console.error(err))
}

function addEventSaves (req, res) {
  console.log('addEventsSaves')
}

function addEventsAttendance (req, res) {
  console.log('addEventsAttendance')
}

function addEventsViews (req, res) {
  console.log('addEventsViews')
}

function deleteEvent (req, res) {
  EventModel
    .findByIdAndDelete(req.params.eventId)
    .then(event => res.json(event))
    .catch(err => res.json(err))
}

module.exports = {
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
}
