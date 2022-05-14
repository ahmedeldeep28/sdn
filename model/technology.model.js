const mongoose = require("mongoose");
require('dotenv').config();

const technologySchema = mongoose.Schema({
    icon: String,
    title: String,
    link: String,
});

const Technology = mongoose.model("technology", technologySchema);


exports.createTechnology = async (date) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let technology = await new Technology(date);
        return technology.save()
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

exports.getAllTechnology = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let technology = await Technology.find()
        return technology
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};

exports.deleteTechnologyById = async (technologyId) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Technology.deleteOne({ _id: technologyId })
        return "dlete succsul"
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};
