const User = require("./user.model");


exports.getAllUsersService = async () => {
    const result = await User.find({});
    return result;
}

// get total active users count service
exports.getActiveUsersService = async () => {
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
exports.getAverageAgeGenderBasedService = async () => {
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

// Favorite fruits and total number with sorting
exports.getFavoriteFruitService = async () => {
    const result = await User.aggregate([
        {
            $group: {
                _id: "$favoriteFruit", // _id variable name
                count: {
                    $sum: 1 // increment by 1. If you provide 2, it will increment by 2.
                }
            }
        },
        {
            $sort: {
                count: -1 // descending -1, ascending 1
            }
        },
        {
            $limit: 2 // for top 2 only
        }
    ]);
    console.log(result);

    return result;
}

// Drilling down and finding top registered users based on countries
exports.getTopUsersByCountryService = async () => {
    const result = await User.aggregate([
        {
            $group: {
                _id: "$company.location.country", // Drilling the object
                count: {
                    $sum: 1
                }
            }
        }

    ]);
    console.log(result);

    return result;
}

// Average of tags count of all user
exports.getAverageTagsCountService = async () => {
    // method 1
    const result1 = await User.aggregate(
        [
            {
                $addFields: {
                    numberOfTags: {
                        $size: { $ifNull: ["$tags", []] } // if there is no tags array property in any document it will be treated as an empty array
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    average: {
                        $avg: "$numberOfTags"
                    }
                }
            }
        ]
    );

    //  method 2
    const result2 = await User.aggregate([
        {
            $unwind: "$tags"
        },
        {
            $group: {
                _id: "$_id",
                tagCount: {
                    $sum: 1
                }
            }
        },
        {
            $group: {
                _id: null,
                averageTags: {
                    $avg: "$tagCount"
                }
            }
        }
    ]);
    // console.log(result);

    return { result1, result2 };
}

// Filtering with tags array element
exports.getArrayElementFilteringService = async () => {
    const result = await User.aggregate(
        [
            {
                $match: {
                    tags: "enim"
                }
            },
            {
                $count: 'totalUserWithEnimTag'
            }
        ]
    );

    return result;
}
// Filtering with tags array element and isActive false and using project
// for multiple element filtering 
// [
//     {
//         $match: {
//             "tags": {
//                 $all: ["enim", "id"]
//             }
//         }
//     }
// ]
exports.getMultipleFIlteringService = async () => {
    const result = await User.aggregate(
        [
            {
                $match: {
                    isActive: false,
                    tags: "velit",
                },
            },

            {
                $project: {
                    name: 1,
                    age: 1,
                },
            },
        ]
    );

    return result;
}
// Filtering with regex query
exports.getRegexQueryService = async () => {
    const result = await User.aggregate(
        [
            {
                $match: {
                    "company.phone": /\+1\s?\(940\)/  // regex query for +1 (940)
                },
            }
        ]
    );

    return result;
}

exports.getAllUsersService = async () => {
    const result = await User.find({});
    return result;
}

// Sorting method - Last 5 registered users
exports.getLastFiveUsersWithSortingService = async () => {
    const result = await User.aggregate(
        [
            {
                $sort: {
                    registered: -1
                }
            },
            {
                $limit: 5
            },
            {
                $project: {
                    name: 1,
                    age: 1,
                    registered: 1
                }
            }
        ]
    );

    return result;
}

// Sorting method - Last 5 registered users
exports.getCategorizedUsersService = async () => {
    const result = await User.aggregate(
        [
            {
                $group: {
                    _id: "$favoriteFruit",
                    users: {
                        $push: {             // ($push : "$name") for single element 
                            name: "$name",
                            age: "$age"
                        }
                    }
                }
            }
        ]
    );

    return result;
}

// Find the elements which has ad in the second position of tags array
exports.getFilteringWithArrayPositionService = async () => {
    const result = await User.aggregate(
        [
            {
                $match: {
                    "tags.1": "ad"
                }
            }
        ]
    );

    return result;
}


