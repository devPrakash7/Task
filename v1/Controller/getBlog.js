
const {AuthorModel} = require("../../model/AuthorModel");
const {BlogModel} = require("../../model/BlogModel");
const jwt = require("jsonwebtoken");


const getBlog = async (req,res) => {

try{

    const tokenId = req.headers.authorization;
    const token = tokenId.substring("Bearer ".length);
     
    let object;

    if (!token) {
      throw new Error("Authorization token is required");
    } 
   jwt.verify(token, "prakash123", function (err, decoded) {
      if (err) {
        throw new Error("Error : " + err);
      }
       object = decoded;
    });

  let userId = object.userId;

  const getBlogId = await AuthorModel.findOne({userId});
  
    if (!getBlogId) {
      return res
        .status(400)
        .send({ status: false, message: `user does not exists.` });
    }

    const findData = await BlogModel.findOne({userId})

    if(!findData){

        return res.status(400).send({status:false , msg:"have not present any blog"});
    }

  let queryParams = req.query;

  const { authorId } = queryParams;

  if(userId !== authorId){

    return res.status(400).send({status:false , msg:"userId and authorId is not match"});

  }

 const blog = await BlogModel.find(queryParams);
 
 return res.status(200).send({status:true , data:blog})
    
}catch(err){

      console.log("getBlog", err)
      res.status(500).send({ status: false, message: err.message });
   }
}

module.exports = {getBlog}