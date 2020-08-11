const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
    unique: [true, "Username already exists in our database!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    unique: [true, "Email already exists in our database"],
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      "Email is not valid!",
    ],
  },
  password: {
    type: String,
    select: false,
    required: [true, "Password is required!"],
  },
  areaPreference: {
    type: String,
    required: [true, "Area of Preference is required!"],
  },
  address: {
    type: String,
  },
  photo: {
    type: String,
    default:
      "https://firebasestorage.googleapis.com/v0/b/qpasagc.appspot.com/o/userProfile.png?alt=media&token=f4f73ada-5d3b-48cd-8298-84588ed5f0a6",
  },
  rating: {
    type: Number,
    default: 0,
  },
  aboutMe: {
    type: String,
    maxlength: [500, "Max character allowed 500"],
    default: "",
  },
  myEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
  savedEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
  attendingEvents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
