const express  = require('express')
const port = 3001;
const app = express();
const {ConnecttoDB}= require("./connect")
const path = require('path');
const UrlRoute= require('./routes/UrlRoute');
const mainroute = require('./routes/MainRoutes');
const urlModel= require("./models/UrlModel")
//Connection
ConnecttoDB("mongodb://127.0.0.1:27017/ShortYourUrl")

app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"))
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/url",UrlRoute)
app.use("/", mainroute)

//Route
app.get("/url/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await urlModel.findOneAndUpdate(
        {
   
            shortid:shortId },

    { $push: { Urlclicks: 
                  {  timestamp: Date.now()
               }} }   
 ) 
 res.redirect(entry.MainUrl)
})
     
//port Listening 
app.listen(port,(req,res)=>{
    console.log("Listening on port " + port)
})