const router = require("express").Router();
const { authUser } = require("../utils");

const {
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
} = require("../controllers/events.controller");

router
  .get("/", getAllEvents)
  .get("/:eventId", getEvent)
  .get("/tags/:tagId", getEventsByTag)
  .get("/category/:categoryId", getEventByCategory)
  .get("/search/:term", getEventsBySearch)
  .post("/me", authUser, createEvent)
  .put("/me/:eventId", authUser, updateEvent)
  .put("/me/:eventId/save", authUser, addEventSaves)
  .put("/me/:eventId/attendance", authUser, addEventsAttendance)
  .put("/:eventId/views", addEventsViews)
  .delete("/me/:eventId", authUser, deleteEvent);

module.exports = router;
