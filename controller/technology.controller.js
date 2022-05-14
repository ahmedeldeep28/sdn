const technology_Model = require("../model/technology.model");

exports.getTechnology = async (req, res, next) => {
    try {
        let technologys = await technology_Model.getAllTechnology();
        res.render("manag_technology", {
            technologys: technologys
        });
    } catch (error) {
        console.log(error)
    }
}


exports.postTechnology = async (req, res, next) => {
    try {
        await technology_Model.createTechnology(req.body);
        res.redirect("/dashbord/technology")
    } catch (error) {
        res.redirect("/dashbord/technology")
    }
}
exports.deleteTechnology = async (req, res, next) => {

    try {
        await technology_Model.deleteTechnologyById(req.body.technologyId);
        res.redirect("/dashbord/technology")
    } catch (error) {
        res.redirect("/dashbord/technology")
    }
}
