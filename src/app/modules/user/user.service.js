const User = require("./user.model");


exports.getUsersService = async(data)=>{
    const result = await User.find(data);
    return result;
}
