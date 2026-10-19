import { useEffect, useState } from "react";

import { analyzeResume } from "../services/analysisService";
import { getMyResumes } from "../services/resumeService";
import { getHistory } from "../services/analysisHistoryService";
import { generatePDF } from "../utils/pdfGenerator";

import ATSCard from "../components/analysis/ATSCard";
import PackageCard from "../components/analysis/PackageCard";
import SkillCard from "../components/analysis/SkillCard";
import RecommendationCard from "../components/analysis/RecommendationCard";
import RoadmapCard from "../components/analysis/RoadmapCard";
import LearningResourceCard from "../components/analysis/LearningResourceCard";
import ImprovementCard from "../components/analysis/ImprovementCard";
import HistoryCard from "../components/analysis/HistoryCard";

const Analysis = ({ selectedResumeId }) => {
  const [resumes, setResumes] = useState([]);
  const [history, setHistory] = useState([]);
  const [resumeId, setResumeId] = useState("");
  const [targetJob, setTargetJob] = useState("MERN Stack Developer");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  // ================= LOAD HISTORY =================

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data.history || []);
      } catch (error) {
        console.error("History Error:", error);
      }
    };

    loadHistory();
  }, []);

  // ================= LOAD RESUMES =================

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const data = await getMyResumes();

        const resumeList = data.resumes || [];

        setResumes(resumeList);

        // Automatically select latest uploaded resume
        if (selectedResumeId) {
          setResumeId(selectedResumeId);
        } else if (resumeList.length > 0) {
          setResumeId(resumeList[0]._id);
        }
      } catch (error) {
        console.error("Resume Loading Error:", error);
      }
    };

    loadResumes();
  }, [selectedResumeId]);

  // ================= SELECTED RESUME =================

  useEffect(() => {
    if (selectedResumeId) {
      setResumeId(selectedResumeId);
    }
  }, [selectedResumeId]);

  // ================= ANALYZE =================

const handleAnalyze = async () => {
  if (!resumeId) {
    alert("Please select a Resume");
    return;
  }

  try {
    setLoading(true);
    setAnalysisStep(1);

    const stepTimer = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev < 4) {
          return prev + 1;
        }

        return prev;
      });
    }, 1200);

    const data = await analyzeResume(
      resumeId,
      targetJob
    );

    clearInterval(stepTimer);

    setAnalysisStep(4);
    setAnalysis(data.analysis);

    setTimeout(() => {
      setAnalysisStep(0);
    }, 1000);

  } catch (error) {
    console.error("Analysis Error:", error);

    alert(
      error.response?.data?.message ||
      "Analysis Failed"
    );

    setAnalysisStep(0);

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="w-full">
      {/* ================= ANALYSIS PANEL ================= */}

      <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">

        <h1 className="text-3xl font-extrabold text-slate-800">
          🤖 AI Resume Analyzer
        </h1>

        <p className="text-slate-500 mt-2">
          Select your resume and target job to generate personalized AI career insights.
        </p>

        {/* ================= CONTROLS ================= */}

        <div className="mt-8 grid md:grid-cols-2 gap-6">

          {/* Resume */}

          <div>
            <label className="block text-lg font-bold text-slate-700 mb-2">
              📄 Select Resume
            </label>

            <select
              value={resumeId}
              onChange={(e) => setResumeId(e.target.value)}
              className="w-full p-4 rounded-2xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">
                Select Resume
              </option>

              {resumes.map((resume) => (
                <option
                  key={resume._id}
                  value={resume._id}
                >
                  {resume.originalName}
                </option>
              ))}
            </select>
          </div>

          {/* Target Job */}

          <div>
            <label className="block text-lg font-bold text-slate-700 mb-2">
              🎯 Target Job
            </label>

            <select
              value={targetJob}
              onChange={(e) => setTargetJob(e.target.value)}
              className="w-full p-4 rounded-2xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="MERN Stack Developer">
                MERN Stack Developer
              </option>

              <option value="Java Developer">
                Java Developer
              </option>

              <option value="Python Developer">
                Python Developer
              </option>

              <option value="Frontend Developer">
                Frontend Developer
              </option>

              <option value="Backend Developer">
                Backend Developer
              </option>

              <option value="Full Stack Developer">
                Full Stack Developer
              </option>

              <option value="AI / ML Engineer">
                AI / ML Engineer
              </option>

              <option value="Data Analyst">
                Data Analyst
              </option>

              <option value="Android Developer">
                Android Developer
              </option>

              <option value="DevOps Engineer">
                DevOps Engineer
              </option>
            </select>
          </div>

        </div>

        {/* ================= ANALYZE BUTTON ================= */}

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 disabled:opacity-50 text-white rounded-2xl py-4 font-bold text-lg transition"
        >
          {loading
            ? "⏳ Analyzing Resume..."
            : "🚀 Analyze Resume"}
        </button>

        {loading && (
  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6">

    <h3 className="text-lg font-bold text-slate-800 mb-5">
      🤖 AI is processing your resume
    </h3>

    <div className="space-y-4">

      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            analysisStep >= 1
              ? "bg-blue-600 text-white"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          {analysisStep >= 1 ? "✓" : "1"}
        </div>

        <span className="font-medium text-slate-700">
          📄 Reading Resume
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            analysisStep >= 2
              ? "bg-blue-600 text-white"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          {analysisStep >= 2 ? "✓" : "2"}
        </div>

        <span className="font-medium text-slate-700">
          🧠 Detecting Skills
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            analysisStep >= 3
              ? "bg-blue-600 text-white"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          {analysisStep >= 3 ? "✓" : "3"}
        </div>

        <span className="font-medium text-slate-700">
          📊 Calculating ATS Score
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
            analysisStep >= 4
              ? "bg-green-600 text-white"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          {analysisStep >= 4 ? "✓" : "4"}
        </div>

        <span className="font-medium text-slate-700">
          🎯 Generating Career Roadmap
        </span>
      </div>

    </div>
  </div>
)}

      </div>

      {/* ================= RESULTS ================= */}

      {analysis && (
        <div className="mt-8 space-y-8">

          {/* ATS + PACKAGE */}

          <div className="grid lg:grid-cols-2 gap-6">

            <ATSCard
              atsScore={analysis.atsScore}
            />

            <PackageCard
              packagePrediction={
                analysis.packagePrediction
              }
            />

            {/* ================= PACKAGE PREDICTION BREAKDOWN ================= */}

<div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

  <h2 className="text-2xl font-bold text-slate-800">
    💰 Package Prediction Breakdown
  </h2>

  <p className="text-slate-500 mt-2 mb-8">
    Your estimated package is based on multiple career-readiness factors.
  </p>

  {/* ATS */}

  <div className="mb-6">

    <div className="flex justify-between mb-2">
      <span className="font-semibold text-slate-700">
        ATS Score
      </span>

      <span className="font-bold text-blue-600">
        {analysis.atsScore}% × 40%
      </span>
    </div>

    <div className="w-full bg-slate-200 rounded-full h-4">

      <div
        className="bg-blue-600 h-4 rounded-full transition-all duration-700"
        style={{
          width: `${analysis.atsScore}%`
        }}
      />

    </div>

  </div>

  {/* Skill Match */}

  <div className="mb-6">

    <div className="flex justify-between mb-2">
      <span className="font-semibold text-slate-700">
        Skill Match
      </span>

      <span className="font-bold text-green-600">
        {analysis.skillMatch}% × 35%
      </span>
    </div>

    <div className="w-full bg-slate-200 rounded-full h-4">

      <div
        className="bg-green-600 h-4 rounded-full transition-all duration-700"
        style={{
          width: `${analysis.skillMatch}%`
        }}
      />

    </div>

  </div>

  {/* Projects */}

  <div className="mb-6">

    <div className="flex justify-between mb-2">
      <span className="font-semibold text-slate-700">
        Projects
      </span>

      <span className="font-bold text-purple-600">
        Career Profile
      </span>
    </div>

    <div className="w-full bg-slate-200 rounded-full h-4">

      <div
        className="bg-purple-600 h-4 rounded-full"
        style={{
          width: `${Math.min(
            (analysis.projects || 0) * 20,
            100
          )}%`
        }}
      />

    </div>

  </div>

  {/* Certifications */}

  <div className="mb-6">

    <div className="flex justify-between mb-2">
      <span className="font-semibold text-slate-700">
        Certifications
      </span>

      <span className="font-bold text-orange-600">
        Career Profile
      </span>
    </div>

    <div className="w-full bg-slate-200 rounded-full h-4">

      <div
        className="bg-orange-500 h-4 rounded-full"
        style={{
          width: `${Math.min(
            (analysis.certifications || 0) * 20,
            100
          )}%`
        }}
      />

    </div>

  </div>

 {/* GitHub */}

<div>

  <div className="flex justify-between mb-2">
    <span className="font-semibold text-slate-700">
      GitHub Profile
    </span>

    <span className="font-bold text-pink-600">
      {analysis.githubAvailable
        ? "Available"
        : "Not Added"}
    </span>
  </div>

  <div className="w-full bg-slate-200 rounded-full h-4">

    <div
      className="bg-pink-500 h-4 rounded-full transition-all duration-700"
      style={{
        width: analysis.githubAvailable
          ? "100%"
          : "0%"
      }}
    />

  </div>

</div>

  {/* Final Explanation */}

  <div className="mt-8 bg-slate-50 rounded-2xl border border-slate-200 p-5">

    <p className="font-semibold text-slate-700">
      📌 How the prediction works
    </p>

    <p className="text-sm text-slate-500 mt-2 leading-6">
      ATS and Skill Match contribute the largest share of the
      prediction, while projects, certifications and GitHub
      provide additional career-profile signals.
    </p>

  </div>

</div>

          </div>

          {/* SKILL MATCH */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-slate-800">
              🎯 Skill Match
            </h2>

            <div className="w-full bg-gray-200 rounded-full h-5 mt-6">

              <div
                className="bg-blue-600 h-5 rounded-full transition-all duration-700"
                style={{
                  width: `${analysis.skillMatch}%`,
                }}
              />

            </div>

            <p className="mt-5 text-xl font-bold text-blue-700">
              {analysis.skillMatch}% Match
            </p>

          </div>

          {/* SKILLS */}

          <SkillCard
            existingSkills={analysis.existingSkills}
            missingSkills={analysis.missingSkills}
          />

          {/* RECOMMENDATIONS */}

          <RecommendationCard
            recommendations={analysis.recommendations}
          />

          {/* LEARNING RESOURCES */}

          {analysis.learningResources &&
            analysis.learningResources.length > 0 && (
              <div>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  📚 Personalized Learning Resources
                </h2>

                {analysis.learningResources.map(
                  (resource, index) => (
                    <LearningResourceCard
                      key={index}
                      resource={resource}
                    />
                  )
                )}

              </div>
            )}

          {/* ROADMAP */}

          <RoadmapCard
            roadmap={analysis.roadmap}
          />

          {/* PDF */}

          <button
            onClick={() => generatePDF(analysis)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl"
          >
            📥 Download AI Report
          </button>

          {/* IMPROVEMENTS */}

          <ImprovementCard
            improvements={analysis.improvements}
          />

          {/* HISTORY */}

          <HistoryCard
            history={history}
          />

        </div>
      )}
    </div>
  );
};

export default Analysis;