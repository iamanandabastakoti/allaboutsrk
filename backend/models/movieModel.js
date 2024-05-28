const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  poster: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  cast: [
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        default: "",
      },
      role: {
        type: String,
        default: "",
      },
    },
  ],
  release_date: [
    {
      date: {
        type: Number,
        required: true,
      },
      month: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
    },
  ],
  runtime: {
    type: Number,
  },
  genre: [
    {
      name: {
        type: String,
      },
    },
  ],
  producer: [
    {
      name: {
        type: String,
      },
    },
  ],
  production_company: [
    {
      name: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Movie", MovieSchema);
