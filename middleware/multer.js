const multer = require("multer");
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "uploads");
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg all format allowed!'));
      }
  }
});



module.exports = {upload}