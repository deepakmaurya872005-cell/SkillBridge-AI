import { useEffect, useState } from "react";

import { getHistory } from "../services/analysisHistoryService";

import {
  getMockInterviewHistory,
} from "../services/mockInterviewService";

const History = () => {
  const [history, setHistory] = useState([]);
  const [mockHistory, setMockHistory] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const [analysisData, mockInterviewData] =
          await Promise.all([
            getHistory(),
            getMockInterviewHistory(),
          ]);

        setHistory(analysisData.history || []);
        setMockHistory(mockInterviewData.history || []);
      } catch (error) {
        console.error("History Error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHistory();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-lg font-semibold text-slate-700">
            Loading History...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl p-8 shadow-2xl mb-8">
          <h1 className="text-4xl font-extrabold">
            📜 SkillBridge AI History
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            View your previous AI analyses and mock interview attempts.
          </p>
        </div>

        {/* ================================================= */}
        {/* ================= AI ANALYSIS =================== */}
        {/* ================================================= */}

        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-slate-800">
              📊 AI Analysis History
            </h2>

            <p className="text-slate-500 mt-2">
              Your previous resume analysis results.
            </p>
          </div>

          {history.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <div className="text-6xl mb-4">
                📄
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                No Analysis Found
              </h3>

              <p className="text-slate-500 mt-2">
                Upload a resume and complete an AI analysis to
                see your history here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {history.map((item, index) => (
                <div
                  key={item._id || index}
                  className="bg-white rounded-3xl shadow-xl p-6 border border-slate-200 hover:shadow-2xl transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* Analysis Details */}

                    <div>
                      <h2 className="text-xl font-bold text-slate-800">
                        🎯 {item.targetJob || "Target Job"}
                      </h2>

                      <p className="text-slate-500 mt-2">
                        📄 Resume:{" "}
                        {item.resume?.originalName || "Resume"}
                      </p>

                      <p className="text-sm text-slate-400 mt-1">
                        🕒{" "}
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "Date not available"}
                      </p>
                    </div>

                    {/* Scores */}

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                      <div className="bg-blue-50 rounded-xl px-4 py-3 text-center">
                        <p className="text-sm text-slate-500">
                          ATS Score
                        </p>

                        <p className="text-xl font-bold text-blue-600">
                          {item.atsScore ?? 0}%
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-xl px-4 py-3 text-center">
                        <p className="text-sm text-slate-500">
                          Skill Match
                        </p>

                        <p className="text-xl font-bold text-green-600">
                          {item.skillMatch ?? 0}%
                        </p>
                      </div>

                      <div className="bg-purple-50 rounded-xl px-4 py-3 text-center col-span-2 md:col-span-1">
                        <p className="text-sm text-slate-500">
                          Package
                        </p>

                        <p className="text-lg font-bold text-purple-600">
                          {item.packagePrediction || "N/A"}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ================================================= */}
        {/* ================ MOCK INTERVIEW ================= */}
        {/* ================================================= */}

        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-slate-800">
              🤖 Mock Interview History
            </h2>

            <p className="text-slate-500 mt-2">
              Your previous mock interview attempts and scores.
            </p>
          </div>

          {mockHistory.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-xl p-10 text-center">
              <div className="text-6xl mb-4">
                🤖
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                No Mock Interviews Found
              </h3>

              <p className="text-slate-500 mt-2">
                Complete a mock interview to see your attempts here.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {mockHistory.map((item, index) => (
                <div
                  key={item._id || index}
                  className="bg-white rounded-3xl shadow-xl p-6 border border-slate-200 hover:shadow-2xl transition"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                    {/* Interview Information */}

                    <div>
                      <h2 className="text-xl font-bold text-slate-800">
                        🎯 {item.targetJob}
                      </h2>

                      <p className="text-sm text-slate-400 mt-2">
                        🕒{" "}
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "Date not available"}
                      </p>

                      <div className="mt-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.status === "completed"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {item.status === "completed"
                            ? "✅ Completed"
                            : "⏳ In Progress"}
                        </span>
                      </div>
                    </div>

                    {/* Interview Stats */}

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                      <div className="bg-blue-50 rounded-xl px-5 py-4 text-center">
                        <p className="text-sm text-slate-500">
                          Questions
                        </p>

                        <p className="text-2xl font-bold text-blue-600">
                          {item.answers?.length || 0}
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-xl px-5 py-4 text-center">
                        <p className="text-sm text-slate-500">
                          Score
                        </p>

                        <p className="text-2xl font-bold text-green-600">
                          {item.totalScore ?? 0}/100
                        </p>
                      </div>

                      <div className="bg-purple-50 rounded-xl px-5 py-4 text-center col-span-2 md:col-span-1">
                        <p className="text-sm text-slate-500">
                          Answers
                        </p>

                        <p className="text-2xl font-bold text-purple-600">
                          {item.answers?.length || 0}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Individual Answer Summary */}

                  {item.answers &&
                    item.answers.length > 0 && (
                      <div className="mt-6 border-t border-slate-200 pt-5">

                        <h3 className="font-bold text-slate-700 mb-4">
                          📝 Answer Performance
                        </h3>

                        <div className="space-y-3">
                          {item.answers.map(
                            (answer, answerIndex) => (
                              <div
                                key={answerIndex}
                                className="bg-slate-50 rounded-xl p-4"
                              >
                                <p className="font-semibold text-slate-700">
                                  Q{answerIndex + 1}.{" "}
                                  {answer.question}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-3 text-sm">

                                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    Technical:{" "}
                                    {answer.technicalAccuracy ?? 0}
                                  </span>

                                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    Communication:{" "}
                                    {answer.communication ?? 0}
                                  </span>

                                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    Relevance:{" "}
                                    {answer.relevance ?? 0}
                                  </span>

                                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                                    Score:{" "}
                                    {answer.overallScore ?? 0}
                                  </span>

                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default History;