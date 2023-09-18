const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: String,
    chatId: String,
    senderId: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("room", messageSchema);

module.exports = Message;