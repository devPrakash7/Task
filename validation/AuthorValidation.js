
const {check , validationResult} = require("express-validator");


const SignIn = [

    check("Fname")
    .notEmpty()
    .withMessage("Fname is required")
    .isString()
    .withMessage("Fname must be string")
    .trim()
    .isLength({min:3})
    .withMessage("Fname length should be 3"),

    check("Lname")
    .notEmpty()
    .withMessage("Lname is required")
    .isString()
    .withMessage("Lname must be string")
    .trim()
    .isLength({min:4})
    .withMessage("Lname length should be 4"),

    check("Title")
    .notEmpty()
    .withMessage("Title_name is required")
    .isString()
    .withMessage("Title must be string")
    .trim()
    .isLength({min:2})
    .withMessage("Title length should be 2"),

    check("Email")
    .notEmpty()
    .withMessage("email is required")
    .isString()
    .withMessage("email must be string")
    .isEmail()
    .trim(),

    check("password")
    .notEmpty()
    .withMessage("password is required")
    .isString()
    .withMessage("password is string")
    .trim()
    .isLength({min:8})
    .withMessage("password length should be 8")

]

const Login = [

   
  check("Email")
  .notEmpty()
  .withMessage("email is required")
  .isString()
  .withMessage("email must be string")
  .isEmail()
  .trim(),

  check("password")
  .notEmpty()
  .withMessage("password is required")
  .isString()
  .withMessage("password must be string")
  .trim()
  .isLength({min:8})
  .withMessage("password length should be 8")

]

const BlogValidation = [

      check("title")
      .notEmpty()
      .withMessage("title is required")
      .isString()
      .withMessage("title must be string")
      .trim(),

      check("body")
      .notEmpty()
      .withMessage("body is required")
      .isString()
      .withMessage("body must be string")
      .trim(),

      check("category")
      .notEmpty()
      .withMessage("body is required")
      .isString()
      .withMessage("body must be string")
      .trim(),

      check("tags").isArray(),
      check("subcategory").isArray(),
     
]


  const result = (req,res,next) => {

        const result = validationResult(req);
        const haserror = !result.isEmpty();
   
        if(haserror){
   
           const err = result.array()[0].msg;
           res.send({sucess:false , message:err});
        }
   
        next();
   };


   module.exports = {SignIn, Login , BlogValidation, result}