const express = require("express");
const router = express.Router();
const {
  getAllMessage,
  postMessage,
  deleteSingleMessage,
} = require("../controllers/messageControllers");

router.route("/").get(getAllMessage).post(postMessage);
router.delete("/delete/:messageID", deleteSingleMessage);

module.exports = router;
