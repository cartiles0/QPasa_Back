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

function createTag(req, res) {
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
  createTag,
};

// function createTag(req, res) {
//   const tagInput = req.body;
//   const userId = res.locals.user._id;
//   TagModel.find({ name: tagInput.name })
//     .then((tag) => {
//       if (tag.length === 0) {
//         TagModel.create(tagInput)
//           .then((tagCreate) => {
//             const tagId = tagCreate._id;
//             UserModel.findById(userId)
//               .populate("myEvents")
//               .then((user) => {
//                 user.myEvents.forEach((event) => {
//                   if (
//                     JSON.stringify(event._id) ===
//                     JSON.stringify(tagInput.eventId)
//                   ) {
//                     event.tags.push(tagId);
//                     console.log(event.tags);
//                   }
//                 });
//                 user.save();
//               });
//             res.json(response);
//           })
//           .catch((err) => res.json(err));
//       } else {
//         tag[0].useCount += 1;
//         tag[0].save();
//         res.json(tag);
//       }
//     })
//     .catch((err) => res.json(err));
// }
