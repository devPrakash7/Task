
const dateFormat = require("../../helper/dateFormate");
const constants = require("../../config/constants");
const {BlogModel} = require('../../models/blog.model')



exports.create_new_Blog = async (req, res) => {

    try {

      const reqBody = req.body;
      let file = req.file
      reqBody.blogimage = file.filename
      reqBody.blogid = Math.floor(Math.random() * 900) + 100;
      reqBody.created_at = dateFormat.getDateFormatFromTimeStamp();
      reqBody.updated_at = dateFormat.getDateFormatFromTimeStamp();
      let Blog = await BlogModel.create(reqBody)

      return res
        .status(constants.WEB_STATUS_CODE.CREATED)
        .send({ status:constants.STATUS_CODE.STATUS_SUCESS, message: " new Blog created sucessfully" , Blog});

    } catch (err) {
      
      console.log("Error(create_new_blog): ", err);
      return res
        .status(constants.WEB_STATUS_CODE.SERVER_ERROR)
        .send({ status:constants.STATUS_CODE.STATUS_FAILED, message: err });
    }

  };
  

  exports.getBlog = async (req, res) => {

    try {

      let Blog = await BlogModel.find()

      for(let i=0; i<Blog.length; i++){

        Blog[i].created_at = undefined;
        Blog[i].updated_at = undefined;
        Blog[i].__v = undefined;
      }

      return res
        .status(constants.WEB_STATUS_CODE.OK)
        .send({ status:constants.STATUS_CODE.STATUS_SUCESS, message: "sucessfully get all Blog" , Blog})

    } catch (err) {
      
      console.log("Error(getBlog): ", err);
      return res
        .status(constants.WEB_STATUS_CODE.SERVER_ERROR)
        .send({ status:constants.STATUS_CODE.STATUS_FAILED, message: err });
    }

  };

  exports.Update_Blog = async (req , res) => {

    try {
        
         const blogid = req.params.blogid;
    
         const Blog = await BlogModel.findOneAndUpdate({blogid : blogid} , req.body , {new:true})
         Blog.updated_at = await dateFormat.getDateFormatFromTimeStamp();
         return res.status(constants.WEB_STATUS_CODE.OK).send({status:constants.STATUS_CODE.STATUS_SUCESS, message:'user update successfully' , Blog});

   } catch (err) {
       console.log('Error(Update_Blog): ', err)
       return res.status(constants.WEB_STATUS_CODE.SERVER_ERROR).send({status:constants.STATUS_CODE.STATUS_FAILED , message:err});
   }
    
}

exports.delete_Blog = async (req , res) => {

    try {
        
         const blogid = req.query.blogid;

         const Blog = await BlogModel.findOneAndDelete({blogid:blogid});
         return res.status(constants.WEB_STATUS_CODE.OK).send({status:constants.STATUS_CODE.STATUS_SUCESS, message:'user delete successfully' , Blog});

   } catch (err) {
       console.log('Error(delete_Blog): ', err)
       return res.status(constants.WEB_STATUS_CODE.SERVER_ERROR).send({status:constants.STATUS_CODE.STATUS_FAILED , message:err});
   }
    
}