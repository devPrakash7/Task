const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({

     blogid : {
        type: Number,
    },
    blogimage: {
      type: String,
    },
    blogslug: {
        type: String,
    },
    blogcontent: {
        type: String,
    },
    created_at : {
        type:String
    },
    updated_at :{
       type : String
    }
})


exports.BlogModel = mongoose.model("Blog", blogSchema)