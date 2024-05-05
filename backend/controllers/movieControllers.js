//definig the functions
const getAllMovies = (req, res) => {
  res.status(200).json({
    message: "This endpoint provides all the movies data",
  });
};

module.exports = { getAllMovies };
