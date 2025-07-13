const router = require("express").Router()
const team_Model = require("../model/team.model");
const technology_Model = require("../model/technology.model");
const service_Model = require("../model/services.model");

router.get("/", async (req, res) => {
    let memberTeams = await team_Model.getAllMemberes();
    let technologys = await technology_Model.getAllTechnology();
    res.render("index", {
        memberTeams: memberTeams,
        technologys: technologys,
        pageName: "home"
    });
})

router.get("/services", async (req, res) => {
    try {
        let services = await service_Model.getAllServices();
        res.render("services", {
            services: services,
            pageName: "services"
        });
    } catch (error) {
        console.log(error)
    }

})

router.get("/service/:id", async (req, res) => {
    try {
        let service = await service_Model.getServiceById(req.params.id);
        res.render("service_page", {
            service: service,
            pageName: "services"

        });
    } catch (error) {
        console.log(error)
    }

})

router.get("/docs", (req, res) => {
    res.render("docs", {
        pageName: "docs"
    });
})

router.get("/contact", (req, res) => {
    res.render("contact", {
        pageName: "contact"
    });
})

module.exports = router