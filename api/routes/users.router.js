const router = require("express").Router();
const { authUser } = require("../utils");

const {
  getOwnProfile,
  getUserProfile,
  getSavedEvents,
  getAttendingEvents,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount,
} = require("../controllers/users.controller");

router
  .get("/me", authUser, getOwnProfile)
  .get("/:id", getUserProfile)
  .get("/me/savedEvents", authUser, getSavedEvents)
  .get("/me/attendingEvents", authUser, getAttendingEvents)
  .put("/me", authUser, editOwnProfile)
  .put("/me/photo", authUser, editOwnPhoto)
  .delete("/me", authUser, deleteUserAccount);

module.exports = router;
