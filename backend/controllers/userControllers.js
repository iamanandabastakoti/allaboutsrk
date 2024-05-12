const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  const userData = await User.find({});
  res.status(200).json(userData);
};

const registerUser = async (req, res) => {
  try {
    const { name, username, password, profilePic } = req.body;
    const newUser = await User.create({
      name,
      username,
      password,
      profilePic,
    });
    res.status(200).json(newUser);
    console.log("User registered successfully");
  } catch (error) {
    res.status(400).json({ message: "Unable to register user" });
    console.log(error);
  }
};

module.exports = { getAllUsers, registerUser };
