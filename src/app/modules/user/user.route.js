const express = require("express");
const { createUser, getUser } = require("./user.controller");
const { checkUserName } = require("../../middlewares/checkUserName");

const router = express.Router();

router.get("/", getUser);
router.post("/", checkUserName, createUser);

module.exports = router;
