exports.isAdmin = (req,res,next)=>{
    if(req.session.adminId) return next()
    else res.redirect("/login")
}
exports.notAdmin = (req,res,next)=>{
    if(!req.session.adminId) return next()
    else res.redirect("/dashbord")
}