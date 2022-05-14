const team_Model = require("../model/team.model");

exports.getTeam = async (req, res, next) => {
    try {
        let memberTeams = await team_Model.getAllMemberes();
        res.render("manag_team", {
            memberTeams: memberTeams
        });
    } catch (error) {
        console.log(error)
    }
}


exports.postMember = async (req, res, next) => {
    req.body.image = req.file.filename;
    try {
        await team_Model.createMembere(req.body);
        res.redirect("/dashbord/team")
    } catch (error) {
        res.redirect("/dashbord/team")
    }
}
exports.deleteMember = async (req, res, next) => {

    try {
        await team_Model.deleteMembereById(req.body.membereId);
        res.redirect("/dashbord/team")
    } catch (error) {
        res.redirect("/dashbord/team")
    }
}

