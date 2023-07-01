const express = require("express");
const { getAllUsers } = require("./../controllers/user.controller");
const { signup } = require("./../controllers/auth.controller");

const router = express.Router();

router.route("/signup").post(signup);

router.route("/").get(getAllUsers);

module.exports = router;
