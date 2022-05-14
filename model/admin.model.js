const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require('dotenv').config();

const adminSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const Admin = mongoose.model("admin", adminSchema);


exports.createAcounte = async (username, email, password ) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let findAdmin = await Admin.findOne({ email });
        if (findAdmin) {
            await mongoose.disconnect();
            throw "this is email alread acount"
        }
        else {
            let hashpassword = await bcrypt.hash(password, 10)
            let admin = await Admin.create({
                username,
                email,
                password: hashpassword,
            });
            await mongoose.disconnect();
            return admin
        }


    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
}

exports.login = async ({ email, password }) => {
    try {
        await mongoose.connect(process.env.DB_URL);
        let findAdmin = await Admin.findOne({ email });

        if (findAdmin) {
            let same = await bcrypt.compare(password, findAdmin.password);
            if (same) {
                await mongoose.disconnect();
                return { id: findAdmin._id }

            } else {
                await mongoose.disconnect();
                throw "this is password not found"
            }
        } else {
            await mongoose.disconnect();
            throw "this is email not found"
        }
    } catch (error) {
        await mongoose.disconnect();
        throw error
    }
}
