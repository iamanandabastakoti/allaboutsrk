const express = require("express");
const router = express.Router();
const {
  getAdmin,
  registerAdmin,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/adminControllers");

router.get("/", getAdmin);
router.post("/register", registerAdmin);
router.patch("/update/:id", updateAdmin);
router.delete("/delete/:id", deleteAdmin);

module.exports = router;
