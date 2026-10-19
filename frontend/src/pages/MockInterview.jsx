
import { useState } from "react";

import {
  startMockInterview,
  submitMockAnswer,
  completeMockInterview,
} from "../services/mockInterviewService";

const mockQuestions = {
  "MERN Stack Developer": [
    "Tell me about yourself and your experience with MERN stack.",
    "What is the difference between MongoDB and a relational database?",
    "Explain how authentication works in your project.",
    "What is the purpose of Express.js in a MERN application?",
    "How would you improve the performance of a React application?",
  ],

  "Java Developer": [
    "Tell me about yourself and your Java experience.",
    "What is the difference between JDK, JRE and JVM?",
    "Explain object-oriented programming concepts in Java.",
    "What is the difference between ArrayList and LinkedList?",
    "How do you handle exceptions in Java?",
  ],

  "Python Developer": [
    "Tell me about yourself and your Python experience.",
    "What are lists, tuples and dictionaries in Python?",
    "Explain the difference between a list and a tuple.",
    "What is exception handling in Python?",
    "How would you optimize a Python application?",
  ],

  "Frontend Developer": [
    "Tell me about yourself and your frontend experience.",
    "What is the difference between state and props in React?",
    "Explain the virtual DOM.",
    "How do you make a responsive web application?",
    "How do you improve frontend performance?",
  ],

  "Backend Developer": [
    "Tell me about yourself and your backend experience.",
    "What is REST API?",
    "How does JWT authentication work?",
    "What is middleware in Express.js?",
    "How would you secure a backend API?",
  ],

  "Full Stack Developer": [
    "Tell me about yourself and your full-stack experience.",
    "Explain the architecture of a full-stack web application.",
    "How does frontend communicate with backend?",
    "How would you design authentication for a full-stack application?",
    "How would you deploy a full-stack application?",
  ],

  "AI / ML Engineer": [
    "Tell me about yourself and your AI/ML experience.",
    "What is the difference between supervised and unsupervised learning?",
    "Explain overfitting and how you prevent it.",
    "What is the purpose of train-test splitting?",
    "How do you evaluate a machine learning model?",
  ],

  "Data Analyst": [
    "Tell me about yourself and your data analysis experience.",
    "What is the difference between mean, median and mode?",
    "How do you handle missing data?",
    "What is data visualization and why is it useful?",
    "How would you explain an insight from a dataset to a non-technical person?",
  ],

  "Android Developer": [
    "Tell me about yourself and your Android development experience.",
    "What is an Activity in Android?",
    "Explain the Android application lifecycle.",
    "What is the purpose of RecyclerView?",
    "How do you handle data persistence in Android?",
  ],

  "DevOps Engineer": [
    "Tell me about yourself and your DevOps experience.",
    "What is CI/CD?",
    "What is Docker and why is it used?",
    "What is the difference between a container and a virtual machine?",
    "How would you deploy an application on AWS?",
  ],
};

const MockInterview = () => {
  const [targetJob, setTargetJob] = useState("MERN Stack Developer");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [interviewId, setInterviewId] = useState(null);
  const [finalInterview, setFinalInterview] = useState(null);
  const [currentEvaluation, setCurrentEvaluation] = useState(null);

  const [startingInterview, setStartingInterview] = useState(false);
  const [submittingAnswer, setSubmittingAnswer] = useState(false);

  const questions = mockQuestions[targetJob];

  // ================= START INTERVIEW =================

  const startInterview = async () => {
    try {
      setStartingInterview(true);

      const data = await startMockInterview(targetJob);

      if (!data?.interview?._id) {
        throw new Error("Interview ID not received from server.");
      }

      setInterviewId(data.interview._id);
      setStarted(true);
      setCurrentQuestion(0);
      setAnswer("");
      setAnswers([]);
      setCompleted(false);
    } catch (error) {
      console.error("Start Mock Interview Error:", error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Mock interview start nahi ho paaya."
      );
    } finally {
      setStartingInterview(false);
    }
  };

  // ================= SUBMIT ANSWER =================

  const submitAnswer = async () => {
    if (!answer.trim()) {
      alert("Please enter your answer first.");
      return;
    }

    if (!interviewId) {
      alert("Interview session not found. Please start again.");
      return;
    }

    try {
      setSubmittingAnswer(true);

      const newAnswer = {
        question: questions[currentQuestion],
        answer: answer.trim(),

        // AI evaluation next step mein connect hoga
        technicalAccuracy: 0,
        communication: 0,
        relevance: 0,
        overallScore: 0,
        feedback: "",
        improvement: "",
      };

      const evaluationData = await submitMockAnswer(
  interviewId,
  newAnswer
);

setCurrentEvaluation(evaluationData.evaluation || null);

      const updatedAnswers = [...answers, newAnswer];

      setAnswers(updatedAnswers);
      setAnswer("");

      // More questions remaining
      if (currentQuestion < questions.length - 1) {
  setCurrentEvaluation(null);
  setCurrentQuestion((prev) => prev + 1);
  return;
}

      // Final answer
    const completionData = await completeMockInterview(interviewId);

setFinalInterview(completionData.interview || null);

setCompleted(true);
    } catch (error) {
      console.error("Submit Answer Error:", error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Answer save nahi ho paaya."
      );
    } finally {
      setSubmittingAnswer(false);
    }
  };

  // ================= RESTART =================

  const restartInterview = () => {
    setStarted(false);
    setCompleted(false);
    setCurrentQuestion(0);
    setAnswer("");
    setAnswers([]);
    setInterviewId(null);
  };

  // ================= COMPLETED SCREEN =================

  if (completed) {
    return (
      <div className="w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10">
          <div className="text-center">
            <div className="text-6xl mb-5">🎉</div>

            <h1 className="text-3xl font-extrabold text-slate-800">
              Mock Interview Completed
            </h1>

            <p className="text-slate-500 mt-3">
              You completed all {questions.length} questions for{" "}
              <span className="font-semibold text-blue-600">
                {targetJob}
              </span>
              .
            </p>

            {finalInterview && (
  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">
    <p className="text-sm text-slate-500">
      Overall Interview Score
    </p>

    <p className="text-5xl font-extrabold text-blue-600 mt-2">
      {finalInterview.totalScore}/100
    </p>

    <p className="text-slate-500 mt-2">
      Based on your completed interview answers.
    </p>
  </div>
)}
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-500">
                Questions
              </p>

              <p className="text-3xl font-extrabold text-blue-600 mt-2">
                {questions.length}
              </p>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-500">
                Answers Submitted
              </p>

              <p className="text-3xl font-extrabold text-green-600 mt-2">
                {answers.length}
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
              <p className="text-sm text-slate-500">
                Target Role
              </p>

              <p className="text-lg font-extrabold text-purple-600 mt-2">
                {targetJob}
              </p>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-slate-800">
              🤖 AI Evaluation
            </h2>

            <p className="text-slate-500 mt-2 leading-6">
              Your answers have been successfully saved. AI-based
              technical evaluation, communication analysis, scoring
              and improvement suggestions will be connected in the
              next step.
            </p>
          </div>

          <button
            onClick={restartInterview}
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white py-4 rounded-2xl font-bold text-lg transition"
          >
            🔄 Start New Mock Interview
          </button>
        </div>
      </div>
    );
  }

  // ================= MAIN PAGE =================

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 p-8 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">
                AI Career Practice
              </p>

              <h1 className="text-3xl md:text-4xl font-extrabold mt-2">
                🤖 AI Mock Interview
              </h1>

              <p className="text-slate-300 mt-3 max-w-2xl">
                Practice realistic interview questions according to
                your selected target role.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl px-5 py-4">
              <p className="text-xs text-blue-200 uppercase">
                Target Role
              </p>

              <p className="font-bold mt-1">
                {targetJob}
              </p>
            </div>

          </div>
        </div>

        {!started ? (
          <div className="p-8">
            
            {/* Target Role */}
            <div className="max-w-2xl">
              <label className="block text-lg font-bold text-slate-700 mb-2">
                🎯 Select Target Job
              </label>

              <select
                value={targetJob}
                onChange={(e) => setTargetJob(e.target.value)}
                className="w-full p-4 rounded-2xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.keys(mockQuestions).map((job) => (
                  <option key={job} value={job}>
                    {job}
                  </option>
                ))}
              </select>
            </div>

            {/* Feature Cards */}
            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                <div className="text-4xl">🎯</div>

                <h3 className="text-lg font-bold text-slate-800 mt-4">
                  Job-Specific Questions
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  Questions are prepared according to the selected
                  career role.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
                <div className="text-4xl">🤖</div>

                <h3 className="text-lg font-bold text-slate-800 mt-4">
                  AI Interviewer
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  The platform will evaluate your answers using AI.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-6">
                <div className="text-4xl">📊</div>

                <h3 className="text-lg font-bold text-slate-800 mt-4">
                  Performance Feedback
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  Get technical and communication improvement
                  suggestions.
                </p>
              </div>

            </div>

            {/* Interview Info */}
            <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Ready for the interview?
                  </h2>

                  <p className="text-slate-500 mt-2">
                    You will answer {questions.length} questions for{" "}
                    <span className="font-semibold">
                      {targetJob}
                    </span>
                    .
                  </p>
                </div>

                <button
                  onClick={startInterview}
                  disabled={startingInterview}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-bold transition whitespace-nowrap"
                >
                  {startingInterview
                    ? "⏳ Starting..."
                    : "🚀 Start Mock Interview"}
                </button>

              </div>
            </div>

          </div>
        ) : (
          <div className="p-8">
            
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm font-semibold text-slate-600 mb-2">
                <span>
                  Question {currentQuestion + 1} of{" "}
                  {questions.length}
                </span>

                <span>
                  {Math.round(
                    ((currentQuestion + 1) /
                      questions.length) *
                      100
                  )}
                  %
                </span>
              </div>

              <div className="w-full bg-slate-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) /
                        questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Main Interview Area */}
            <div className="mt-8 grid lg:grid-cols-5 gap-6">
              
              {/* Interviewer */}
              <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-7">
                
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl">
                  🤖
                </div>

                <p className="text-sm font-bold text-blue-600 mt-6 uppercase tracking-wide">
                  AI Interviewer
                </p>

                <h2 className="text-2xl font-extrabold text-slate-800 mt-3 leading-relaxed">
                  {questions[currentQuestion]}
                </h2>

                <div className="mt-8 bg-white/80 rounded-2xl p-4 border border-blue-100">
                  <p className="text-sm text-slate-500 leading-6">
                    💡 Try to give a clear, structured and
                    job-relevant answer.
                  </p>
                </div>

              </div>

              {/* Answer Area */}
              <div className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-3xl p-7">
                
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-800">
                    ✍️ Your Answer
                  </h3>

                  <span className="text-sm text-slate-400">
                    {answer.length} characters
                  </span>
                </div>

                {currentEvaluation && (
  <div className="mt-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold text-slate-800">
        🤖 Answer Evaluation
      </h3>

      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">
        Score: {currentEvaluation.overallScore}/100
      </span>
    </div>

    <div className="grid md:grid-cols-3 gap-4 mt-5">
      <div className="bg-blue-50 rounded-xl p-4 text-center">
        <p className="text-sm text-slate-500">
          Technical Accuracy
        </p>

        <p className="text-2xl font-bold text-blue-600 mt-1">
          {currentEvaluation.technicalAccuracy}/100
        </p>
      </div>

      <div className="bg-purple-50 rounded-xl p-4 text-center">
        <p className="text-sm text-slate-500">
          Communication
        </p>

        <p className="text-2xl font-bold text-purple-600 mt-1">
          {currentEvaluation.communication}/100
        </p>
      </div>

      <div className="bg-green-50 rounded-xl p-4 text-center">
        <p className="text-sm text-slate-500">
          Relevance
        </p>

        <p className="text-2xl font-bold text-green-600 mt-1">
          {currentEvaluation.relevance}/100
        </p>
      </div>
    </div>

    <div className="mt-5 bg-slate-50 rounded-xl p-5">
      <p className="font-bold text-slate-700">
        💬 Feedback
      </p>

      <p className="text-slate-600 mt-2 leading-6">
        {currentEvaluation.feedback}
      </p>
    </div>

    <div className="mt-4 bg-orange-50 rounded-xl p-5">
      <p className="font-bold text-orange-700">
        📌 Improvement
      </p>

      <p className="text-orange-700 mt-2 leading-6">
        {currentEvaluation.improvement}
      </p>
    </div>
  </div>
)}

                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  rows={10}
                  placeholder="Type your interview answer here..."
                  className="mt-5 w-full p-5 rounded-2xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />

                <div className="mt-5 flex flex-col sm:flex-row gap-4">
                  
                  <button
                    onClick={() => setAnswer("")}
                    disabled={submittingAnswer}
                    className="sm:flex-1 border border-slate-300 text-slate-700 py-3 rounded-xl font-semibold hover:bg-white disabled:opacity-50 transition"
                  >
                    Clear Answer
                  </button>

                  <button
                    onClick={submitAnswer}
                    disabled={submittingAnswer}
                    className="sm:flex-[2] bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white py-3 rounded-xl font-bold transition"
                  >
                    {submittingAnswer
                      ? "⏳ Saving..."
                      : currentQuestion === questions.length - 1
                      ? "✅ Submit Final Answer"
                      : "➡️ Submit & Next"}
                  </button>

                </div>
              </div>

            </div>

            {/* Progress Steps */}
            <div className="mt-8 bg-white border border-slate-200 rounded-2xl p-5">
              
              <div className="flex items-center justify-between">
                <p className="font-bold text-slate-700">
                  Interview Progress
                </p>

                <p className="text-sm text-slate-500">
                  {currentQuestion + 1}/{questions.length}
                </p>
              </div>

              <div className="flex gap-2 mt-4">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 flex-1 rounded-full ${
                      index <= currentQuestion
                        ? "bg-blue-600"
                        : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default MockInterview;