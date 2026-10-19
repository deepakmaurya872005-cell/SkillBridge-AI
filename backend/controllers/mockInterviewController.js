const MockInterview = require("../models/MockInterview");

const {
  evaluateAnswer
} = require("../services/mockInterviewEvaluationService");

// ================= START MOCK INTERVIEW =================

const startMockInterview = async (req, res) => {
  try {
    const { targetJob } = req.body;

    if (!targetJob) {
      return res.status(400).json({
        message: "Target job is required"
      });
    }

    const interview = await MockInterview.create({
      user: req.user.id,
      targetJob,
      answers: [],
      totalScore: 0,
      status: "in-progress"
    });

    res.status(201).json({
      message: "Mock interview started",
      interview
    });
  } catch (error) {
    console.error("Start Mock Interview Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// ================= SAVE + EVALUATE ANSWER =================

const submitMockAnswer = async (req, res) => {
  try {
    const { interviewId } = req.params;

    const {
      question,
      answer
    } = req.body;

    if (!question || !answer) {
      return res.status(400).json({
        message: "Question and answer are required"
      });
    }

    const interview = await MockInterview.findOne({
      _id: interviewId,
      user: req.user.id
    });

    if (!interview) {
      return res.status(404).json({
        message: "Mock interview not found"
      });
    }

    // Rule-based evaluation
    const evaluation = evaluateAnswer(
      question,
      answer,
      interview.targetJob
    );

    interview.answers.push({
      question,
      answer,

      technicalAccuracy:
        evaluation.technicalAccuracy,

      communication:
        evaluation.communication,

      relevance:
        evaluation.relevance,

      overallScore:
        evaluation.overallScore,

      feedback:
        evaluation.feedback,

      improvement:
        evaluation.improvement
    });

    await interview.save();

    res.status(200).json({
      message: "Answer evaluated and saved successfully",

      evaluation,

      interview
    });
  } catch (error) {
    console.error("Submit Mock Answer Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// ================= COMPLETE INTERVIEW =================

const completeMockInterview = async (req, res) => {
  try {
    const { interviewId } = req.params;

    const interview = await MockInterview.findOne({
      _id: interviewId,
      user: req.user.id
    });

    if (!interview) {
      return res.status(404).json({
        message: "Mock interview not found"
      });
    }

    const answers = interview.answers || [];

    if (answers.length > 0) {
      const total = answers.reduce(
        (sum, item) => {
          return sum + (item.overallScore || 0);
        },
        0
      );

      interview.totalScore = Math.round(
        total / answers.length
      );
    } else {
      interview.totalScore = 0;
    }

    interview.status = "completed";
    interview.completedAt = new Date();

    await interview.save();

    res.status(200).json({
      message: "Mock interview completed",
      interview
    });
  } catch (error) {
    console.error("Complete Mock Interview Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// ================= GET INTERVIEW HISTORY =================

const getMockInterviewHistory = async (req, res) => {
  try {
    const history = await MockInterview.find({
      user: req.user.id
    }).sort({ createdAt: -1 });

    res.status(200).json({
      count: history.length,
      history
    });
  } catch (error) {
    console.error("Mock Interview History Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

// ================= DELETE INTERVIEW =================

const deleteMockInterview = async (req, res) => {
  try {
    const interview = await MockInterview.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!interview) {
      return res.status(404).json({
        message: "Mock interview not found"
      });
    }

    res.status(200).json({
      message: "Mock interview deleted successfully"
    });
  } catch (error) {
    console.error("Delete Mock Interview Error:", error);

    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  startMockInterview,
  submitMockAnswer,
  completeMockInterview,
  getMockInterviewHistory,
  deleteMockInterview
};