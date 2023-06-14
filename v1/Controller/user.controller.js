
const dateFormat = require("../../helper/dateFormate");
const constants = require("../../config/constants");
const {User} = require('../../models/user.model')




exports.create_new_user = async (req, res) => {

    try {

      const reqBody = req.body;
      let file = req.file
      console.log(file)
      reqBody.profilepic = file.filename
      reqBody.userId = Math.floor(Math.random() * 900) + 100;
      reqBody.created_at = dateFormat.getDateFormatFromTimeStamp();
      reqBody.updated_at = dateFormat.getDateFormatFromTimeStamp();
      let user = await User.create(reqBody)

      return res
        .status(constants.WEB_STATUS_CODE.CREATED)
        .send({ status:constants.STATUS_CODE.STATUS_SUCESS, message: "user created sucessfully" , user});

    } catch (err) {
      
      console.log("Error(create_new_user): ", err);
      return res
        .status(constants.WEB_STATUS_CODE.SERVER_ERROR)
        .send({ status:constants.STATUS_CODE.STATUS_FAILED, message: err });
    }

  };
  

  exports.get_user = async (req, res) => {

    try {

      let user = await User.find()

      for(let i=0; i<user.length; i++){

         user[i].created_at = undefined;
         user[i].updated_at = undefined;
         user[i].__v = undefined;
      }

      return res
        .status(constants.WEB_STATUS_CODE.OK)
        .send({ status:constants.STATUS_CODE.STATUS_SUCESS, message: "sucessfully get all users" , user})

    } catch (err) {
      
      console.log("Error(get_user): ", err);
      return res
        .status(constants.WEB_STATUS_CODE.SERVER_ERROR)
        .send({ status:constants.STATUS_CODE.STATUS_FAILED, message: err });
    }

  };

  exports.Update_user = async (req , res) => {

    try {
        
         const userId = req.params.userId;
    
         const user = await User.findOneAndUpdate({userId : userId} , req.body , {new:true})
         user.updated_at = await dateFormat.getDateFormatFromTimeStamp();
         return res.status(constants.WEB_STATUS_CODE.OK).send({status:constants.STATUS_CODE.STATUS_SUCESS, message:'user update successfully' , user});

   } catch (err) {
       console.log('Error(Update_user): ', err)
       return res.status(constants.WEB_STATUS_CODE.SERVER_ERROR).send({status:constants.STATUS_CODE.STATUS_FAILED , message:err});
   }
    
}

exports.delete_user = async (req , res) => {

    try {
        
         const userId = req.query.userId;

         const user = await User.findOneAndDelete({userId:userId});
         return res.status(constants.WEB_STATUS_CODE.OK).send({status:constants.STATUS_CODE.STATUS_SUCESS, message:'user delete successfully' , user});

   } catch (err) {
       console.log('Error(delete_user): ', err)
       return res.status(constants.WEB_STATUS_CODE.SERVER_ERROR).send({status:constants.STATUS_CODE.STATUS_FAILED , message:err});
   }
    
}