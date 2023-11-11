const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    shortid:{type:String,
    required:true
},
MainUrl:{
    type:String,
    required:true
}
,
Urlclicks:{
    timestamp:{
    type:Number
}}


},
{timestamps:true
})
const UrlModel = mongoose.model("Url_Self",UrlSchema)
module.exports = UrlModel