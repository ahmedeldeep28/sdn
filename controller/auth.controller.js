const auth_model = require("../model/admin.model");

exports.getLogin = async (req, res, next) => {
    try {
        await res.render("login", {
            pageName: "login"
        });
    } catch (error) {
        console.log(error)
    }
}

exports.postLogin = async (req, res, next) => {
    try {
        let adminId = await auth_model.login(req.body);
        req.session.adminId = String(adminId._id);
        res.redirect("/dashbord")
    } catch (error) {
        console.log(error);
        res.redirect("/")
    }
}


exports.logout = (req, res, next) => {
    req.session.destroy(() => {
        res.redirect("/")
    })
}