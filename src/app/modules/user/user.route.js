const express = require("express");
const { getActiveUsers, getAllUsers, getAverageAgeGenderBased } = require("./user.controller");

const router = express.Router();

router.get("/all-users", getAllUsers);
router.get("/active-users", getActiveUsers);
router.get("/gender-average-age", getAverageAgeGenderBased);

module.exports = router;
