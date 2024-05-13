const express = require("express");
const router = express.Router();
const { getAllMovies, addMovie } = require("../controllers/movieControllers");

//defining the endpoints
router.get("/allmovies", getAllMovies);
router.post("/addmovie", addMovie);

module.exports = router;
