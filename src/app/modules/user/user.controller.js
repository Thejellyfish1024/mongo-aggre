const { getActiveUsersService, getAllUsersService, getAverageAgeGenderBasedService } = require("./user.service");

exports.getActiveUsers= async (req, res) =>{
    try {
       
        const result = await getActiveUsersService();
        return res.status(200).json({
            status: "Success",
            message: "User fetched successful",
            data: result,
          });

    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
          });
    }
}

exports.getAllUsers= async (req, res) =>{
    try {
       
        const result = await getAllUsersService();
        return res.status(200).json({
            status: "Success",
            message: "User fetched successful",
            data: result,
          });

    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
          });
    }
}

exports.getAverageAgeGenderBased= async (req, res) =>{
    try {
       
        const result = await getAverageAgeGenderBasedService();
        return res.status(200).json({
            status: "Success",
            message: "User fetched successful",
            data: result,
          });

    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Something went wrong!!",
            error: error,
          });
    }
}