const EventModel = require("../models/events.model");
const UserModel = require("../models/users.model");

function getAllEvents(req, res) {
  EventModel.find(req.query)
    .then((events) => {
      res.json(events);
    })
    .catch((err) => res.json(err));
}

function getEvent(req, res) {
  EventModel.findById(req.params.eventId)
    .populate("creator")
    .populate("tag")
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
}

function getEventsByTag(req, res) {
  EventModel.find({ tags: req.params.tagId })
    .populate("tag")
    .then((events) => res.json(events))
    .catch((err) => console.error(err));
}

function getEventByCategory(req, res) {
  EventModel.find({ category: req.params.categoryId })
    .then((events) => res.json(events))
    .catch((err) => console.error(err));
}

function getEventsBySearch(req, res) {
  EventModel.find(
    { $text: { $search: req.params.term } },
    { score: { $meta: "textScore" } }
  )
    .populate("tags")
    .populate("creator")
    .then((events) => res.json(events))
    .catch((err) => console.error(err));
}

function createEvent(req, res) {
  const eventInput = req.body;
  eventInput.creator = res.locals.user._id;
  EventModel.create(eventInput)
    .then((event) => {
      UserModel.findById(eventInput.creator)
        .then((user) => {
          user.myEvents.push(event._id);
          user.save();
        })
        .catch((err) => console.error(err));
      res.json(event);
    })
    .catch((err) => res.json(err));
}

function updateEvent(req, res) {
  EventModel.findByIdAndUpdate(req.params.eventId, req.body, { new: true })
    .then((event) => res.json(event))
    .catch((err) => console.error(err));
}

function addEventSaves(req, res) {
  EventModel.findById(req.params.eventId)
    .then((event) => {
      if (event.saved.includes(res.locals.user._id)) {
        event.saved.remove(res.locals.user._id);
        UserModel.findById(res.locals.user._id)
          .then((user) => {
            user.savedEvents.remove(event._id);
            user.save();
          })
          .catch((err) => console.error(err));
      } else {
        event.saved.push(res.locals.user._id);
        UserModel.findById(res.locals.user._id)
          .then((user) => {
            user.savedEvents.push(event._id);
            user.save();
          })
          .catch((err) => console.error(err));
      }
      event
        .save()
        .then((event) => res.json(event))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}

function addEventsAttendance(req, res) {
  EventModel.findById(req.params.eventId)
    .then((event) => {
      if (event.attendance.includes(res.locals.user._id)) {
        event.attendance.remove(res.locals.user._id);
        UserModel.findById(res.locals.user._id)
          .then((user) => {
            user.attendingEvents.remove(event._id);
            user.save();
          })
          .catch((err) => console.error(err));
      } else {
        event.attendance.push(res.locals.user._id);
        UserModel.findById(res.locals.user._id)
          .then((user) => {
            user.attendingEvents.push(event._id);
            user.save();
          })
          .catch((err) => console.error(err));
      }
      event
        .save()
        .then((event) => res.json(event))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}

function addEventsViews(req, res) {
  EventModel.findByIdAndUpdate(
    req.params.eventId,
    { $inc: { views: 1 } },
    { new: true }
  )
    .then((event) => res.json(event))
    .catch((err) => console.error(err));
}

function deleteEvent(req, res) {
  const eventID = req.params.eventId;
  EventModel.findByIdAndDelete(req.params.eventId)
    .then((event) => {
      UserModel.findById(res.locals.user._id)
        .then((user) => {
          user.myEvents.remove(eventID);
          user.save();
        })
        .catch((err) => console.error(err));
      res.json(event);
    })
    .catch((err) => res.json(err));
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
  deleteEvent,
};

// tagInput
// .forEach((data, idx) => {
//   TagModel.find({ name: data })
//     .then((tag) => {
//       let isNewtag = true;
//       tag.forEach((tagName) => {
//         if (data === tagName.name) {
//           isNewtag = false;
//         }
//       });

//       if (isNewtag === true) {
//         TagModel.create(data)
//           .then((response) => {
//             console.log(response);
//             eventInput.tags.push(response._id);
//           })
//           .catch((err) => res.json(err));
//       } else {
//         // console.log(eventInput);
//         // console.log(tag[0]);
//         eventInput.tags.push(tag[0]._id);
//         tag[0].useCount += 1;
//         tag[0].save();
//       }
//     })
//     .catch((err) => res.json(err));
