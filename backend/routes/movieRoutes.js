const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  addMovie,
  getSingleMovie,
} = require("../controllers/movieControllers");

//defining the endpoints
router.get("/allmovies", getAllMovies);
router.post("/addmovie", addMovie);
router.get("/singlemovie/:movieID", getSingleMovie);

module.exports = router;
