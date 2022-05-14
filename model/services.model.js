const mongoose = require("mongoose");
require('dotenv').config();

const serviceSchema = mongoose.Schema({
    title: String,
    icon: String,
    logos: {
        type: [{ image: String, link: String }],
        default: []
    }
});

const Service = mongoose.model("service", serviceSchema);

exports.createService = async (data) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let service = await new Service(data);
        return service.save()
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};
exports.getAllServices = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let services = await Service.find()
        return services
    } catch (error) {
        throw error
    } finally {
        await mongoose.disconnect();
    }
};
exports.getServiceById = async (serviceId) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let service = await Service.findById(serviceId)
        return service
    } catch (error) {
        throw error
    } finally {
        await mongoose.disconnect();
    }
};
exports.deleteService = async (serviceId) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Service.deleteOne({ _id: serviceId })
        return "dlete succsul"
    } catch (error) {
        throw error
    } finally {
        await mongoose.disconnect();
    }
};
exports.addLogoToService = async (data) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        await Service.updateOne({ _id: data.serviceId }, { $push: { logos: { image: data.image, link: data.link } } });
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
};
