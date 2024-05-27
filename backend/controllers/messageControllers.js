const Message = require("../models/messageModel");

const getAllMessage = async (req, res) => {
  const allMessages = await Message.find().sort({ date: "asc" });
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

const deleteSingleMessage = async (req, res) => {
  try {
    const { messageID } = req.params;
    await Message.findByIdAndDelete({ _id: messageID });
    console.log("Message deleted successfully");
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to delete the message" });
  }
};

const getSingleMessage = async (req, res) => {
  try {
    const { messageID } = req.params;
    const messageData = await Message.findById({ _id: messageID });
    res.status(200).json(messageData);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Unable to get the message of given messageID" });
  }
};

const deleteAllMessages = async (req, res) => {
  try {
    await Message.deleteMany({});
    res.status(200).json({ message: "All messages deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to delete all messages" });
  }
};

module.exports = {
  getAllMessage,
  postMessage,
  deleteSingleMessage,
  getSingleMessage,
  deleteAllMessages,
};
