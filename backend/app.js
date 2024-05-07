//configuring dotenv
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const connectDb = require("./db/connect");
//helps to destructure the input json data
app.use(express.json());

//all app routes
const movie_routes = require("./routes/movieRoutes");
const admin_routes = require("./routes/adminRoutes");

app.get("/", (req, res) => {
  res.send(
    `API is running successfully and app name = ${process.env.APP_NAME}`
  );
});

//setting up the endpoints for the app
app.use("/allmovies", movie_routes);
app.use("/admin", admin_routes);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`App is running in port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
