const jwt = require('jsonwebtoken');
let User = require('../models/user.model');
let constants = require('../config/constants')
const { JWT_SECRET } = require('../keys/keys')
const lang = require("../lang/en/message")




exports.authenticate = async (req, res, next) => {
    
    try {

        if (!req.header('Authorization')) return res.status(constants.WEB_STATUS_CODE.BAD_REQUEST).send({status:constants.STATUS_CODE.STATUS_FAILED , message:lang.GENERAL.UNAUTHORIZED_USER})

        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) return res.status(constants.WEB_STATUS_CODE.BAD_REQUEST).send({status:constants.STATUS_CODE.STATUS_FAILED , message:"NOT TOKEN"})

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens': token }).lean();

        if (!user) return res.status(constants.WEB_STATUS_CODE.UNAUTHORIZED).send({status:constants.STATUS_CODE.STATUS_FAILED , message:lang.GENERAL.UNAUTHORIZED_USER})

        req.token = token;
        req.user = user;

        next();
    } catch (err) {
        console.log('Error(authenticate): ', err)
        return res.status(constants.WEB_STATUS_CODE.SERVER_ERROR).send({constants.STATUS_CODE.STATUS_FAILED , message:err}); 
    }
}


// ----------------------------------------Authorization-------------------------------------------------------------
exports. authorization = async (req, res, next) => {

    try {

        let userId = req.params.userId;
        let userIdfromToken = req.decodedToken.userId;

        if (!userId){

            return res.status(constants.WEB_STATUS_CODE.BAD_REQUEST).send({ status: constants.STATUS_CODE.STATUS_FAILED, message: "Please enter vaild User id in params." });
        }

        let findUser = await userModel.findOne({ _id: userId });

        if (!findUser) {

            return res.status(constants.WEB_STATUS_CODE.BAD_REQUEST).send({ status: constants.STATUS_CODE.STATUS_FAILED, message: "User not found." });
        }

        if (findUser._id.toString() !== userIdfromToken) {
            
            res.status(constants.WEB_STATUS_CODE.UNAUTHORIZED).send({ status: constants.STATUS_CODE.STATUS_FAILED, message: "Unauthorized access!!" });
        }

        next();

    } catch (err) {

        console.log('Error(authorization): ', err)
        return res.status(constants.WEB_STATUS_CODE.SERVER_ERROR).send({constants.STATUS_CODE.STATUS_FAILED , message:err}); 
    }
};


