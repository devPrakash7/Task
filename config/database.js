
const mongoose = require("mongoose");



// mongoDb connnected

mongoose
    .connect("mongodb+srv://root:akki909@cluster0.sm3rshd.mongodb.net/Blog_Management", {

        useNewUrlParser: true,
    })
    .then(() => {
        console.log("running port........");
    })
    .catch((error) => {

        console.log(error);
    });

    
