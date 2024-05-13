const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  addMovie,
  getSingleMovie,
  updateMovie,
} = require("../controllers/movieControllers");

//defining the endpoints
router.get("/allmovies", getAllMovies);
router.post("/addmovie", addMovie);
router.get("/singlemovie/:movieID", getSingleMovie);
router.patch("/update/:movieID", updateMovie);

module.exports = router;
