
const {AuthorModel} = require("../../model/AuthorModel");
const {BlogModel} = require("../../model/BlogModel");
const jwt = require("jsonwebtoken");
const moment = require("moment")



const createBlog = async (req,res) => {

    try{

    const reqBody = req.body;
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
  
    const SearchId = await AuthorModel.findOne({userId});
  
    if (!SearchId) {
      return res
        .status(400)
        .send({ status: false, message: `user does not exists.` });
    }

    const { title, body, authorId, tags, category, subcategory, isPublished } = reqBody;


    const blogData = {
      title,
      body,
      authorId:userId,
      category,
      isPublished: isPublished ? isPublished : false,
      publishedAt:moment().format("DD MM YYYY hh:mm:ss")

    };

    const Tag = [...new Set(tags)];
    blogData["tags"] = Tag; 

    const Subcategory = [...new Set(subcategory)];
    blogData["subcategory"] = Subcategory;

    const newBlog = await BlogModel.create(blogData);

    return res.status(201).send({
      status: true,
      message: "New blog created successfully",
      data: newBlog,
    });

  } catch (error) {

    console.log("createBlog" , error)
    res.status(500).send({ status: false, message: error.message });
  }

}

module.exports = {createBlog}