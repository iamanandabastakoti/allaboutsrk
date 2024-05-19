const Message = require("../models/messageModel");

const getAllMessage = async (req, res) => {
  const allMessages = await Message.find({});
  res.status(200).json(allMessages);
};

const postMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await Message.create({
      name,
      email,
      message,
    });
    console.log("Message sent successfully");
    res.status(200).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to send the message" });
  }
};

module.exports = { getAllMessage, postMessage };
