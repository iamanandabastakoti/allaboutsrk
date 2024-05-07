const Admin = require("../models/adminModel");

const getAdmin = (req, res) => {
  res.status(200).json({
    message: "This endpoint gives all the admin data",
  });
};

const registerAdmin = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const newAdmin = await Admin.create({
      name,
      username,
      password,
    });
    res.status(200).json(newAdmin);
    console.log("Admin registered successfully");
  } catch (error) {
    res.status(400).json("Unable to register admin");
    console.log("Unable to register admin");
    console.log(error);
  }
};

module.exports = { getAdmin, registerAdmin };
