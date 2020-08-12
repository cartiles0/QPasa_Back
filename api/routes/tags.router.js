const router = require("express").Router();
const { authUser } = require("../utils");

const { getAllTags, createTag } = require("../controllers/tags.controller");

router.get("/", getAllTags).post("/createTag", authUser, createTag);

module.exports = router;
