const mongoose = require("mongoose")
const mobilePhoneSchema = mongoose.Schema({
    brand: {
        type:String,
        minLength:2,
        maxLength:10
    },
    model: String,
    cost: {
        type:Number,
        min:1,
        max:1000},
    color:String
})
module.exports = mongoose.model("MobilePhone", mobilePhoneSchema)