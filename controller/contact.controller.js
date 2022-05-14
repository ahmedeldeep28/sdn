const contact_Model = require("../model/contact.model");


exports.getMessage = async (req, res, next) => {
    try {
        let messages = await contact_Model.getAllMessage();
        res.render("manag_message", {
            messages: messages
        });
    } catch (error) {
        console.log(error)
    }
}

exports.postMessage = async (req, res, next) => {
    try {
        await contact_Model.createMessage(req.body);
        res.redirect("/contact")
    } catch (error) {
        res.redirect("/contact")
    }
}

exports.deleteMessage = async (req, res, next) => {
    console.log(req.body);
    try {
        await contact_Model.deleteMessageById(req.body.messageId);
        res.redirect("/dashbord/messages")
    } catch (error) {
        res.redirect("/dashbord/messages")
    }
}
