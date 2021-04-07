const mongoose = require("mongoose")
const mobilePhoneSchema = mongoose.Schema({
    brand: String,
    model: String,
    cost: Number,
    color:String
})
module.exports = mongoose.model("MobilePhone", mobilePhoneSchema)