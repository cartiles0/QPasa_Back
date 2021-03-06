const UserModel = require("../models/users.model");

function getOwnProfile(req, res) {
  UserModel.findById(res.locals.user._id)
    .populate("myEvents")
    .populate("savedEvents")
    .populate("attendingEvents")
    .then((user) => {
      res.json(user);
    })
    .catch((err) => console.error(err));
}

function getUserProfile(req, res) {
  UserModel.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
}

function getSavedEvents(req, res) {
  UserModel.findById(res.locals.user._id)
    .populate("savedEvents")
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
}

function getAttendingEvents(req, res) {
  UserModel.findById(res.locals.user._id)
    .populate("attendingEvents")
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
}

function editOwnProfile(req, res) {
  UserModel.findByIdAndUpdate(res.locals.user._id, req.body, { new: true })
    .then((user) => res.json(user))
    .catch((err) => console.error(err));
}

function editOwnPhoto() {
  console.log("editPhoto");
}

function deleteUserAccount(req, res) {
  UserModel.findByIdAndDelete(res.locals.user._id)
    .populate("myEvents")

    .then((user) => res.json(user))
    .catch((err) => res.json(err));
}

module.exports = {
  getOwnProfile,
  getUserProfile,
  getSavedEvents,
  getAttendingEvents,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount,
};
