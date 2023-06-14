
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    userId: {
      type : Number,
    },
    profilepic :{
        type: String,
    },
    name : {
      type : String ,
    },
    slug:{
     type : String,
    },
    created_at : {
        type:String
    },
    updated_at :{
       type :String
    }
})


exports.User = mongoose.model("user",userSchema)