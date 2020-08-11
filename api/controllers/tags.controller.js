const TagModel = require("../models/tags.model");

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
          .then((response) => {
            res.json(response);
          })
          .catch((err) => res.json(err));
      } else {
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
