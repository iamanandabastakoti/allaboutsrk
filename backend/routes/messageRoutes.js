const express = require("express");
const router = express.Router();
const {
  getAllMessage,
  postMessage,
  deleteSingleMessage,
  getSingleMessage,
  deleteAllMessages,
} = require("../controllers/messageControllers");

router
  .route("/")
  .get(getAllMessage)
  .post(postMessage)
  .delete(deleteAllMessages);
router.delete("/delete/:messageID", deleteSingleMessage);
router.get("/:messageID", getSingleMessage);

module.exports = router;
