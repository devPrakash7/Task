
const express = require("express");
const app = express();
require("./config/database")
const swagger_ui_express = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const {PORT} = require('./keys/development_key')
const apiRouter = require('./v1/routes/rout')


//All midddleware
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/api' , apiRouter)


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Blog Api',
        version: '1.0.0',
        description:"All Blogs Api"
      },
      servers:[
        {
          url:'http://localhost:5001'
        }
      ]
    },
    apis: ['./v1/routes/routes*.js'], // files containing annotations as above
  };
  
  const specs = swaggerJSDoc(options)
  app.use('/api-doc' , swagger_ui_express.serve , swagger_ui_express.setup(specs))
  
  app.get("/" , (req , res) => {
  
      res.status(200).send("welcome to my Home pages")
  })


// my Port
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
