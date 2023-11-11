const mongoose = require("mongoose")
function ConnecttoDB(Url){
    mongoose.connect(Url);
}
module.exports = {
    ConnecttoDB,
}


