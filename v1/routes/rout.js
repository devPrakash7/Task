
const expres = require("express");
const { create_new_user, get_user, Update_user, delete_user } = require("../Controller/user.controller");
const router = expres.Router();
const {upload} = require('../../middleware/multer');
const { create_new_Blog, getBlog, Update_Blog, delete_Blog } = require("../Controller/blog.controller");

//user_modules ................................
router.post('/create_user' ,upload.single('file'), create_new_user)
router.get('/get_all_users' , get_user)
router.put('/update_user/:userId' , Update_user)
router.delete('/delete_user' , delete_user)

//Blog_modules.............................
router.post('/create_new_Blog' ,upload.single('file'), create_new_Blog)
router.get('/get_all_blog' , getBlog);
router.put('/update_Blog/:blogid' , Update_Blog)
router.delete('/delete_Blog' , delete_Blog)





module.exports = router;