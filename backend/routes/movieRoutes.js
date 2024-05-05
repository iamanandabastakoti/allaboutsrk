const express = require("express");
const router = express.Router();
const { getAllMovies } = require("../controllers/movieControllers");

//defining the endpoints
router.get("/allmovies", getAllMovies);

module.exports = router;
