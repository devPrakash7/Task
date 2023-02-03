
const {AuthorModel} = require("../../model/AuthorModel");
const {BlogModel} = require("../../model/BlogModel");
const jwt = require("jsonwebtoken");


const updatedBlog = async (req,res) => {

   
  try{

    const requestBody = req.body;
    const tokenId = req.headers.authorization;
    const BlogId = req.params.blogId;
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

  let UserId = object.userId;
  

  const {  Task, Desc, Title } = requestBody;

  const user = await AuthorModel.findOne({UserId});

  if (!user) {
    return res.status(400).send({ status: false, msg: "No such data found" });
  }

  const findDetalis = await BlogModel.findOne({UserId});

  if(!findDetalis){

     return res.status(400).send({ status: false, msg: "user data is not present can't be updated" });
  }

  const findBlogId = await BlogId.findOne({BlogId})
  console.log(findBlogId)

    if(UserId !== findBlogId.Aut){

    return res.status(400).send({status:false , msg:"userId and authorId is not match"});

  }
    const updatedUser = await BlogModel.findOneAndUpdate(
      { BlogId  },
      requestBody,
      { new: true}
    );
  
    return res.status(200).send({
      status: true,
      message: "Successfully updated user details",
      data: updatedUser,
    });
      
  }catch(err){

    console.error("Error(updateBlog)", err);
    es.status(500).send({status:false , msg:err.message});
  }
}


module.exports = {updatedBlog}