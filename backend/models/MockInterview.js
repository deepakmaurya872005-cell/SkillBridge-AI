const mongoose = require("mongoose");

const interviewAnswerSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true
    },

    answer: {
      type: String,
      default: ""
    },

    technicalAccuracy: {
      type: Number,
      default: 0
    },

    communication: {
      type: Number,
      default: 0
    },

    relevance: {
      type: Number,
      default: 0
    },

    overallScore: {
      type: Number,
      default: 0
    },

    feedback: {
      type: String,
      default: ""
    },

    improvement: {
      type: String,
      default: ""
    }
  },
  { _id: false }
);

const mockInterviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    targetJob: {
      type: String,
      required: true
    },

    answers: {
      type: [interviewAnswerSchema],
      default: []
    },

    totalScore: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ["in-progress", "completed"],
      default: "in-progress"
    },

    completedAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "MockInterview",
  mockInterviewSchema
);