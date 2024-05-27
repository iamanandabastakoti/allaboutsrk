const express = require("express");
const router = express.Router();
const {
  getAllMessage,
  postMessage,
  deleteSingleMessage,
  getSingleMessage,
  deleteAllMessages,
  readMessage,
} = require("../controllers/messageControllers");

router
  .route("/")
  .get(getAllMessage)
  .post(postMessage)
  .delete(deleteAllMessages);
router.delete("/delete/:messageID", deleteSingleMessage);
router.route("/:messageID").get(getSingleMessage).patch(readMessage);

module.exports = router;
