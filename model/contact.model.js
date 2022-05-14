const mongoose = require("mongoose");
require('dotenv').config();

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

const Message = mongoose.model("message", messageSchema);


exports.createMessage = async (date) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let message = await new Message(date);
        return message.save()
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

exports.getAllMessage = async (date) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let message = await Message.find()
        return message
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

exports.deleteMessageById = async (messageId) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Message.deleteOne({ _id: messageId })
        return "dlete succsul"
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};