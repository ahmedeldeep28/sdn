const service_Model = require("../model/services.model");

exports.getServices = async (req, res, next) => {
    try {
        let services = await service_Model.getAllServices();
        res.render("manag_services", {
            services: services
        });
    } catch (error) {
        console.log(error)
    }
}

exports.getServicesById = async (req, res, next) => {
    try {
        let service = await service_Model.getServiceById(req.params.id);
        res.render("add_logo_services", {
            service: service
        });
    } catch (error) {
        console.log(error)
    }
}

exports.postServices = async (req, res, next) => {
    try {
        await service_Model.createService(req.body);
        res.redirect("/dashbord/services")
    } catch (error) {
        res.redirect("/dashbord/services")
    }
}
exports.postLogoToService = async (req, res, next) => {
    req.body.image = req.file.filename;
    try {
        await service_Model.addLogoToService(req.body);
        res.redirect("/dashbord/service/" + req.body.serviceId)
    } catch (error) {
        res.redirect("/dashbord/service/" + req.body.serviceId)
    }
}
exports.deleteServices = async (req, res, next) => {
    try {
        await service_Model.deleteService(req.body.serviceId);
        res.redirect("/dashbord/services")
    } catch (error) {
        res.redirect("/dashbord/services")
    }
}
