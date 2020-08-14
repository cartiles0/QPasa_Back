const TagModel = require("../models/tags.model");
const UserModel = require("../models/users.model");
const EventModel = require("../models/events.model");

function getAllTags(req, res) {
  TagModel.find(req.query)
    .then((tags) => {
      res.json(tags);
    })
    .catch((err) => res.json(err));
}

function addTag(req, res) {
  const tagInput = req.body;
  TagModel.find({ name: tagInput.name })
    .then((tag) => {
      if (tag.length === 0) {
        TagModel.create(tagInput)
          .then((tagCreate) => {
            const tagId = tagCreate._id;
            EventModel.findById(tagInput.eventId).then((event) => {
              event.tags.push(tagId);
              event.save();
            });
            res.json(response);
          })
          .catch((err) => res.json(err));
      } else {
        EventModel.findById(tagInput.eventId).then((event) => {
          event.tags.push(tag[0]._id);
          console.log(event.tags);
          event.save();
        });
        tag[0].useCount += 1;
        tag[0].save();
        res.json(tag);
      }
    })
    .catch((err) => res.json(err));
}

module.exports = {
  getAllTags,
  addTag,
};

// function addTag(req, res) {
//   const tagInput = req.body;
//   TagModel.findOneAndUpdate({ name: tagInput.name }, {}, { upsert: true })
//     .then((tag) => {
//       EventModel.findById(tagInput.eventId)
//         .then((event) => {
//           event.tags.push(tagId);
//           event.save();
//         })
//         .catch((err) => res.json(err));
//     })
//     .catch((err) => res.json(err));
// }
