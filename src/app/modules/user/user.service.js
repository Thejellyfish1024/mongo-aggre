const User = require("./user.model");

// get total active users count service
exports.getActiveUsersService = async (data) => {
    const result = await User.aggregate([
        {
            $match: {
                isActive: true
            }
        },
        {
            $count: "count"
        }
    ]);
    console.log(result);

    return result[0];
}

// For the average of gender based documents based on age 
exports.getAverageAgeGenderBasedService = async (data) => {
    const result = await User.aggregate([
        {
            $group: {
                _id: "$gender", // _id variable name
                averageAge: { // averageAge variable name
                    $avg: "$age"
                }
            }
        }
    ]);
    console.log(result);

    return result;
}

exports.getAllUsersService = async (data) => {
    const result = await User.find({});
    return result;
}
