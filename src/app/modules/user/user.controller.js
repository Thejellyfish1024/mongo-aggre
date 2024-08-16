const { getActiveUsersService, getAllUsersService, getAverageAgeGenderBasedService, getFavoriteFruitService, getTopUsersByCountryService, getAverageTagsCountService, getArrayElementFilteringService, getMultipleFIlteringService } = require("./user.service");

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
exports.getFavoriteFruit= async (req, res) =>{
    try {
       
        const result = await getFavoriteFruitService();
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

exports.getTopUsersByCountry= async (req, res) =>{
    try {
       
        const result = await getTopUsersByCountryService();
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

exports.getAverageTagsCount= async (req, res) =>{
    try {
       
        const result = await getAverageTagsCountService();
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

exports.getArrayElementFiltering= async (req, res) =>{
    try {
       
        const result = await getArrayElementFilteringService();
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
exports.getMultipleFIltering= async (req, res) =>{
    try {
       
        const result = await getMultipleFIlteringService();
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