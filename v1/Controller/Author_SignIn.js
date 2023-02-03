
const mongoose = require("mongoose");
const {AuthorModel } = require("../../model/AuthorModel");
const bcrypt = require("bcrypt")
const dateFormat = require("../../helper/dateFormate")



const SignIn = async (req,res) => {

    try{

        const reqBody = req.body;
        
        const {Title,Fname,Lname,Email,password} = reqBody;
        console.log(reqBody)
        
          const duplicateEmail = await AuthorModel.findOne({Email:Email});

          if (duplicateEmail) {
            return res.status(400).send({
              status: false,
              message: `${Email} email address is already registered`,
            });
          }
    
        reqBody.password = await bcrypt.hash(password , 10);
        reqBody.created_at = await dateFormat.set_current_timestamp();
        reqBody.updated_at = await dateFormat.set_current_timestamp();
    
        const user = await AuthorModel.create(reqBody);
        user.password = undefined;
        return res.status(201).send({data:user});
        
      }catch(err){
           
           console.log("SignIn" , err)
           return res.status(500).send({error: err.message});
       }
    }

    module.exports = {SignIn}