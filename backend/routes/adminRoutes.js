const express = require("express");
const router = express.Router();
const {
  getAdmin,
  registerAdmin,
  updateAdmin,
} = require("../controllers/adminControllers");

router.get("/", getAdmin);
router.post("/register", registerAdmin);
router.patch("/update/:id", updateAdmin);

module.exports = router;
