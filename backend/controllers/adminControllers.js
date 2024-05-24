const Admin = require("../models/adminModel");

const getAdmin = async (req, res) => {
  const adminData = await Admin.find({});
  res.status(200).json(adminData);
};

const registerAdmin = async (req, res) => {
  try {
    const { name, username, password, profilePic } = req.body;
    const newAdmin = await Admin.create({
      name,
      username,
      password,
      profilePic,
    });
    res.status(200).json(newAdmin);
    console.log("Admin registered successfully");
  } catch (error) {
    res.status(400).json("Unable to register admin");
    console.log("Unable to register admin");
    console.log(error);
  }
};

const updateAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, username, password, profilePic } = req.body;
    await Admin.findByIdAndUpdate(
      { _id: id },
      {
        name,
        username,
        password,
        profilePic,
      }
    );
    res.status(200).json({ message: "Admin updated successfully" });
    console.log("Admin updated successfully");
  } catch (error) {
    res.status(400).json({ message: "Unable to update admin" });
    console.log(error);
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    await Admin.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Admin deleted successfully" });
    console.log("Admin deleted successfully");
  } catch (error) {
    res.status(400).json({ message: "Unable to delete admin" });
    console.log(error);
  }
};

const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      res.json({ message: "Username not found" });
    } else {
      if (password === admin.password) {
        res.json("Authorized");
      } else {
        res.json("NotAuthorized");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAdmin,
  registerAdmin,
  updateAdmin,
  deleteAdmin,
  adminLogin,
};
