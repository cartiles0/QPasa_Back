const UserModel = require('../models/users.model')

function getOwnProfile (req, res) {
  console.log('getOwnProfile')
}

function getUserProfile (req, res) {
  console.log('getUserProfile')
}

function editOwnProfile (req, res) {
  console.log('editOwnProfile')
}

function editOwnPhoto () {
  console.log('editPhoto')
}

function deleteUserAccount (req, res) {
  console.log('deleteUserAccount')
}

module.exports = {
  getOwnProfile,
  getUserProfile,
  editOwnProfile,
  editOwnPhoto,
  deleteUserAccount
}
