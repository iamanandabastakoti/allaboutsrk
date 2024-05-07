const express = require("express");
const router = express.Router();
const { getAdmin, registerAdmin } = require("../controllers/adminControllers");

router.get("/", getAdmin);
router.post("/register", registerAdmin);

module.exports = router;
