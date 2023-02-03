
const express = require("express");
const app = express();
require("dotenv").config();
require("./config/database")
const port = process.env.PORT || 5000;

//All midddleware
app.use(express.json());
app.use(require("./v1/routes/rout"))




// my Port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
