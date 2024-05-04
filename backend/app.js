const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

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
