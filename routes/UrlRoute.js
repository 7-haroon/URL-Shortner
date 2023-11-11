const express  = require('express')
const router= express.Router()
const { HandleCreateuser }= require("../Controllers/UrlControl")

router.post("/",HandleCreateuser)
module.exports  = router