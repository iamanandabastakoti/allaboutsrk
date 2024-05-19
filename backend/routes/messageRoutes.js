const express = require("express");
const router = express.Router();
const {
  getAllMessage,
  postMessage,
} = require("../controllers/messageControllers");

router.route("/").get(getAllMessage).post(postMessage);

module.exports = router;
