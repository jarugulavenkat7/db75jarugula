const mongoose = require("mongoose")
const mobilePhoneSchema = mongoose.Schema({
    brand: String,
    model: String,
    cost: {
        type:Number,
        min:1,
        max:1000},
    color:String
})
module.exports = mongoose.model("MobilePhone", mobilePhoneSchema)