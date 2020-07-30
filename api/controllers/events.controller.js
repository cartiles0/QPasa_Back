const EventModel = require('../models/events.model')
const UserModel = require('../models/users.model')

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

function getEventByCategory (req, res) {
  EventModel
    .find({ category: req.params.categoryId })
    .then(events => res.json(events))
    .catch(err => console.error(err))
}

function getEventsBySearch (req, res) {
  EventModel
    .find({ $text: { $search: req.params.term } }, { score: { $meta:  'textScore' } })
    .then(events => res.json(events))
    .catch(err => console.error(err))
}

function createEvent (req, res) {
  const eventInput = req.body
  eventInput.creator = res.locals.user._id
  EventModel
    .create(eventInput)
    .then(event => {
      UserModel
        .findById(eventInput.creator)
        .then(user => {
          user.myEvents.push(event._id)
          user.save()
          console.log(user.myEvents)
        })
        .catch(err => console.error(err))
      res.json(event)
    })
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
  EventModel
    .findByIdAndUpdate(req.params.eventId, { $inc: { views: 1 } }, { new:   true })
    .then(event => res.json(event))
    .catch(err => console.error(err))
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
  getEventByCategory,
  getEventsBySearch,
  createEvent,
  updateEvent,
  addEventSaves,
  addEventsAttendance,
  addEventsViews,
  deleteEvent
}
