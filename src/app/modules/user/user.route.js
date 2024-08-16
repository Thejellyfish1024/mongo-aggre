const express = require("express");
const { getActiveUsers, getAllUsers, getAverageAgeGenderBased, getFavoriteFruit, getTopUsersByCountry, getAverageTagsCount, getArrayElementFiltering, getMultipleFIltering, getRegexQuery, getLastFiveUsersWithSorting, getCategorizedUsers, getFilteringWithArrayPosition } = require("./user.controller");

const router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/active-users", getActiveUsers);
router.get("/gender-average-age", getAverageAgeGenderBased);
router.get("/favorite-fruit", getFavoriteFruit);
router.get("/country-users", getTopUsersByCountry);
router.get("/average-tags-count", getAverageTagsCount);
router.get("/array-element-filtering", getArrayElementFiltering);
router.get("/multiple-filtering-with-array-element", getMultipleFIltering);
router.get("/regex-filtering-for-number", getRegexQuery);
router.get("/sorting-last-registered-users", getLastFiveUsersWithSorting);
router.get("/get-categorized-users", getCategorizedUsers);
router.get("/get-filter-with-array-position", getFilteringWithArrayPosition);

module.exports = router;