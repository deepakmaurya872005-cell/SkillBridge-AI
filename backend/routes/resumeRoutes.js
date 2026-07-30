const express = require("express");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
    uploadResume,
    getMyResumes,
    deleteResume
} = require("../controllers/resumeController");

const router = express.Router();

// Upload Resume
router.post("/upload", auth, upload.single("resume"), uploadResume);

// Get My Resumes
router.get("/my-resumes", auth, getMyResumes);

// Delete Resume
router.delete("/:id", auth, deleteResume);

module.exports = router;