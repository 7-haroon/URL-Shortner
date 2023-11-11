const User = require("../models/UrlModel")
const ShortID = require("shortid")

 async function HandleCreateuser(req,res){
    const Shortid = ShortID(8)
    const body  = req.body;
 await User.create({
    
    shortid:Shortid,
    MainUrl:body.url,
    Urlclicks:[]
})
return res.render("index",{id:Shortid})
}
module.exports = {
    HandleCreateuser
}