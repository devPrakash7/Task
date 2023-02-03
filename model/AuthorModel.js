
const mongoose = require("mongoose");


const AutherSchema = new mongoose.Schema({

    Fname : {
        type : String
    },
    Lname :{
        type: String
    },
    Title : {
        type : String ,
        enum : ["Mr","Mrs","Miss"]
    },
    Email : {
        type : String,
        unique : true,
    },
    password : {
        type : String,
    },
    created_at : {
        type:Number
    },
    updated_at :{
       type : Number
    }
})

exports. AuthorModel = mongoose.model("user",AutherSchema)