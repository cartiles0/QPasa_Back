const UserModel = require('../models/users.model')

function getOwnProfile (req, res) {
  UserModel
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.error(err))
}

function getUserProfile (req, res) {
  UserModel
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.error(err))
}

function createProfile (req, res) {
  UserModel
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => console.error(err))
}

function editOwnProfile (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => console.error(err))
}

function editOwnPhoto () {
  console.log('editPhoto')
}

function deleteUserAccount (req, res) {
  UserModel
    .findByIdAndDelete(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

module.exports = {
  getOwnProfile,
  getUserProfile,
  createProfile,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount
}
