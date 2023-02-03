
const expres = require("express");
const router = expres.Router();
const { SignIn,Login, BlogValidation ,result }= require("../../validation/AuthorValidation");
const userSignIn = require("../Controller/Author_SignIn");
const userLogin = require("../Controller/Author_Login");
const Blog = require("../Controller/createBlog");
const userAuth = require("../../middleware/Auth");
const getBlog = require("../Controller/getBlog");
const userAuthorization = require("../../middleware/Auth")



// user Signup and Login
router.post("/api/userSignUp", SignIn,result,  userSignIn.SignIn);
router.post("/api/userLogin", Login,result,  userLogin.Login);

// All Blogs routes
router.post("/api/createBlog", userAuth.authentication, BlogValidation,result, Blog.createBlog);
router.get("/api/getAllBlog", userAuth.authentication, getBlog.getBlog);

module.exports = router;