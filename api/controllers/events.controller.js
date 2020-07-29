const EventModel = require('../models/events.model')

function getEvent (req, res) {
  console.log('getEvent')
}

function getEventsByTag (req, res) {
  console.log('getEventsByTag')
}

function getEventsBySearch (req, res) {
  console.log('getEventsBySearch')
}

function createEvent (req, res) {
  console.log('createEvent')
}

function updateEvent (req, res) {
  console.log('updateEvent')
}

function addEventsSaves (req, res) {
  console.log('addEventsSaves')
}

function addEventsAttendance (req, res) {
  console.log('addEventsAttendance')
}

function addEventsViews (req, res) {
  console.log('addEventsViews')
}

function deleteEvent (req, res) {
  console.log('deleteEvent')
}

module.exports = {
  getEvent,
  getEventsByTag,
  getEventsBySearch,
  createEvent,
  updateEvent,
  addEventsSaves,
  addEventsAttendance,
  addEventsViews,
  deleteEvent
}
