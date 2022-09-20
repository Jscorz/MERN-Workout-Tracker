const express = require("express");

// controller functions
const {
	loginUser,
	signupUser,
	chooseUserPicture,
} = require("../controllers/userController");

const router = express.Router();

// login
router.post("/login", loginUser);

// signup
router.post("/signup", signupUser);

// user image
router.post("/userpicture", chooseUserPicture);

module.exports = router;
