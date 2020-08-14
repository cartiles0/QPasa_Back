const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
  eventDate: {
    type: Date,
    required: [true, "Event Date is required!"],
  },
  capacity: {
    type: Number,
    required: [true, "Capacity is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  photo: {
    type: String,
    required: [true, "Photo is required!"],
  },
  category: {
    type: String,
    required: [true, "Category is required!"],
    enum: [
      "Concerts",
      "Conferences-Workshops",
      "Expo-Fairs",
      "Festivals",
      "For Kids",
      "Gastronomy",
      "Parties",
      "Retreats",
      "Shows",
      "Sports",
      "Theater-Film",
    ],
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  address: {
    type: String,
  },
  mapLocation: {
    type: String,
    default: "",
  },
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  attendance: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tag",
    },
  ],
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

eventSchema.index({ title: "text", description: "text", category: "text" });

const eventModel = mongoose.model("event", eventSchema);
module.exports = eventModel;
