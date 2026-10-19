const express = require("express");

const auth = require("../middleware/authMiddleware");

const {
    analyzeResume,
    getAnalysisHistory,
    deleteAnalysis
} = require("../controllers/skillGapController");

const router = express.Router();

// AI Analysis
router.post("/analyze", auth, analyzeResume);

// AI Analysis History
router.get("/history", auth, getAnalysisHistory);

// Delete AI Analysis
router.delete("/history/:id", auth, deleteAnalysis);

module.exports = router;