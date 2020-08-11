const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Tag Name is required"],
  },
  clicks: {
    type: Number,
    default: 0,
  },
  useCount: {
    type: Number,
    default: 0,
  },
  eventsWithTag: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});

const tagModel = mongoose.model("tag", tagSchema);
module.exports = tagModel;
