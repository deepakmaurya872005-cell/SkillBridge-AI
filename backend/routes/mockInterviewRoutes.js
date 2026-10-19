const express = require("express");

const auth = require("../middleware/authMiddleware");

const {
  startMockInterview,
  submitMockAnswer,
  completeMockInterview,
  getMockInterviewHistory,
  deleteMockInterview
} = require("../controllers/mockInterviewController");

const router = express.Router();

// All Mock Interview routes require login
router.use(auth);

// Start mock interview
router.post("/start", startMockInterview);

// Save one answer
router.post("/:interviewId/answer", submitMockAnswer);

// Complete interview
router.put("/:interviewId/complete", completeMockInterview);

// Get interview history
router.get("/history", getMockInterviewHistory);

// Delete interview
router.delete("/:id", deleteMockInterview);

module.exports = router;