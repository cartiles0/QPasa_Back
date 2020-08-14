const router = require("express").Router();
const { authUser } = require("../utils");

const { getAllTags, addTag } = require("../controllers/tags.controller");

router.get("/", getAllTags).post("/createTag", authUser, addTag);

module.exports = router;
