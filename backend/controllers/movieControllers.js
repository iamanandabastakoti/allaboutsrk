const Movie = require("../models/movieModel");

//definig the functions
const getAllMovies = async (req, res) => {
  const movieData = await Movie.find({});
  res.status(200).json(movieData);
};

const addMovie = async (req, res) => {
  try {
    const {
      poster,
      title,
      overview,
      director,
      cast,
      release_date,
      runtime,
      genre,
      producer,
      production_company,
    } = req.body;
    const newMovie = await Movie.create({
      poster,
      title,
      overview,
      director,
      cast,
      release_date,
      runtime,
      genre,
      producer,
      production_company,
    });
    console.log("Movie added successfully");
    res.status(200).json(newMovie);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to add movie" });
  }
};

module.exports = { getAllMovies, addMovie };
