const mongoose = require("mongoose");
require('dotenv').config();

const memberSchema = mongoose.Schema({
    image: String,
    name: String,
    job: String,
    facebook: String,
    twitter: String,
    linkedin: String,
});

const Member = mongoose.model("member", memberSchema);


exports.createMembere = async (date) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let member =  await new Member(date);
        return member.save()
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

exports.getAllMemberes = async (date) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let members = await Member.find()
        return members
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

exports.deleteMembereById = async (membereId) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Member.deleteOne({ _id: membereId })
        return "dlete succsul"
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

