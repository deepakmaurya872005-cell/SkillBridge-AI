const express = require("express");
const { registerUser, loginUser, getProfile } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

// Get Profile Route
router.get("/profile", auth, getProfile);




module.exports = router;