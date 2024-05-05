//configuring dotenv
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const movie_routes = require("./routes/movieRoutes");

app.get("/", (req, res) => {
  res.send(
    `API is running successfully and app name = ${process.env.APP_NAME}`
  );
});

//setting up the endpoints for the app
app.get("/allmovies", movie_routes);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`App is running in port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
