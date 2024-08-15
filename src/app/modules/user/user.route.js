const express = require("express");
const { getActiveUsers, getAllUsers, getAverageAgeGenderBased, getFavoriteFruit, getTopUsersByCountry, getAverageTagsCount } = require("./user.controller");

const router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/active-users", getActiveUsers);
router.get("/gender-average-age", getAverageAgeGenderBased);
router.get("/favorite-fruit", getFavoriteFruit);
router.get("/country-users", getTopUsersByCountry);
router.get("/average-tags-count", getAverageTagsCount);

module.exports = router;
