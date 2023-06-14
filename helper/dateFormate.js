
const moment = require('moment');


//set current timestamp
exports.set_current_timestamp = function(){
    return moment().format("X");
}

//convert date to timestamp
exports.getDateFormatFromTimeStamp = function(){
    return moment().format("MM/DD/YYYY")    
}