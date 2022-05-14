const router = require("express").Router()
const multer = require("multer");
const guardAuth = require("./guards/guard.auth")
const team_controller = require("../controller/team.controller")
const contact_controller = require("../controller/contact.controller")
const technology_controller = require("../controller/technology.controller")
const services_controller = require("../controller/services.controller")

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "images/")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        },
    })
});

router.get("/dashbord", guardAuth.isAdmin, (req, res) => {
    res.render("dashbord");
})

//routes dashbord team
router.get("/dashbord/team", guardAuth.isAdmin, team_controller.getTeam)
router.post("/dashbord/team/delete", guardAuth.isAdmin, team_controller.deleteMember)
router.post("/dashbord/team/create", guardAuth.isAdmin,
    upload.single("image"), team_controller.postMember)

//routes dashbord team
router.get("/dashbord/messages", guardAuth.isAdmin, contact_controller.getMessage)
router.post("/dashbord/messages/create", guardAuth.isAdmin, contact_controller.postMessage)
router.post("/dashbord/messages/delete", guardAuth.isAdmin, contact_controller.deleteMessage)


//routes dashbord technology
router.get("/dashbord/technology", guardAuth.isAdmin, technology_controller.getTechnology)
router.post("/dashbord/technology/create", guardAuth.isAdmin, technology_controller.postTechnology)
router.post("/dashbord/technology/delete", guardAuth.isAdmin, technology_controller.deleteTechnology)

//routes dashbord service
router.get("/dashbord/services", guardAuth.isAdmin, services_controller.getServices)
router.get("/dashbord/service/:id", guardAuth.isAdmin, services_controller.getServicesById)
router.post("/dashbord/services/create", guardAuth.isAdmin, services_controller.postServices)
router.post("/dashbord/services/delete", guardAuth.isAdmin, services_controller.deleteServices)
router.post("/dashbord/services/logo", guardAuth.isAdmin, upload.single("image"), services_controller.postLogoToService)

module.exports = router