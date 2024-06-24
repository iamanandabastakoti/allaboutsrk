const Movie = require("../models/movieModel");

//definig the functions
const getAllMovies = async (req, res) => {
  const movieData = await Movie.find().sort({ createdAt: "desc" });
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

const getSingleMovie = async (req, res) => {
  try {
    const { movieID } = req.params;
    const oldMovie = await Movie.findById({ _id: movieID });
    res.status(200).json(oldMovie);
    console.log("Movie found");
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Unable to find the movie of the given movieID" });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { movieID } = req.params;
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
    await Movie.findByIdAndUpdate(
      { _id: movieID },
      {
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
      }
    );
    console.log("Movie updated successfully");
    res.status(200).json({ message: "Movie updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to update the movie" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { movieID } = req.params;
    await Movie.findByIdAndDelete({ _id: movieID });
    console.log("Movie deleted successfully");
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to delete the movie" });
  }
};

const getSpecificGenreMovies = async (req, res) => {
  try {
    const { genrename } = req.params;
    const movieData = await Movie.find({ "genre.name": genrename });
    res.status(200).json(movieData);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Unable to find the movies of this genre" });
  }
};

module.exports = {
  getAllMovies,
  addMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
  getSpecificGenreMovies,
};
