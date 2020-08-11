const router = require("express").Router();

const { getAllTags, createTag } = require("../controllers/tags.controller");

router.get("/", getAllTags).post("/createTag", createTag);

module.exports = router;
