const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  addMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  getSpecificGenreMovies,
} = require("../controllers/movieControllers");

//defining the endpoints
router.get("/allmovies", getAllMovies);
router.post("/addmovie", addMovie);
router.get("/singlemovie/:movieID", getSingleMovie);
router.patch("/update/:movieID", updateMovie);
router.delete("/delete/:movieID", deleteMovie);
router.get("/genre/:genrename",getSpecificGenreMovies);

module.exports = router;
