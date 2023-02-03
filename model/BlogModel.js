const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const AutherSchema = new mongoose.Schema({

    title: {
        type: String,
    },
    body: {
        type: String,
        
    },
   authorId: {

        type: ObjectId,         
    },
    tags: [String], 

    category: {
        type: String,
    },
    subcategory: [String],

    deletedAt: {
        type: Date,
        default: null
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: null 
    },
    isPublished: {
        type: Boolean,
        default: false
    },
   
    created_at : {
        type:Number
    },
    updated_at :{
       type : Number
    }
})


exports. BlogModel = mongoose.model("Blog",AutherSchema)