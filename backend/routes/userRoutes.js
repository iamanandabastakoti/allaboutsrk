const express = require("express");
const router = express.Router();
const { getAllUsers, registerUser } = require("../controllers/userControllers");

router.get("/all", getAllUsers);
router.post("/register", registerUser);

module.exports = router;
