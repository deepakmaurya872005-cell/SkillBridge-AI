import { useEffect, useState } from "react";


import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard";
import ResumeChart from "../components/ResumeChart";
import { Link } from "react-router-dom";


import {
  FaFileAlt,
  FaRobot,
  FaUpload,
  FaHistory,
} from "react-icons/fa";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const data = await getDashboard();

        setDashboard(data);

      } catch (error) {

        console.log(error);

      }

    };

    loadDashboard();

  }, []);

    if (!dashboard) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">

      <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="mt-6 text-2xl font-bold text-slate-700">
        Loading Dashboard...
      </h2>

      <p className="text-slate-500 mt-2">
        Please wait while we prepare your workspace.
      </p>

    </div>
  );
}

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl mb-8">

  <h1 className="text-4xl font-extrabold">
    👋 Welcome to SkillBridge AI
  </h1>

  <p className="mt-3 text-blue-100 text-lg">
    Upload your resume, analyze your skills, and become placement-ready with AI guidance.
  </p>

</div>

            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-8">

  <Link
    to="/resume"
    className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
  >
   <FaUpload className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-all duration-500" /> 
    <h2 className="text-xl font-bold">Upload Resume</h2>
    <p className="text-gray-500 mt-2">
      Upload your latest resume for AI analysis.
    </p>
  </Link>

  <Link
    to="/analysis"
     className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
  >
   <FaHistory className="text-4xl text-purple-600 mb-4 group-hover:scale-110 transition-all duration-500" />
    <h2 className="text-xl font-bold">AI Analysis</h2>
    <p className="text-gray-500 mt-2">
      Analyze your skills and find missing technologies.
    </p>
  </Link>

  <Link
    to="/history"
   className="group bg-white/80 backdrop-blur-xl rounded-3xl border border-white/30 shadow-xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
  >
    <FaHistory className="text-4xl text-purple-600 mb-4 group-hover:scale-110 transition-all duration-500" />
    <p className="text-gray-500 mt-2">
      View your previous AI analyses.
    </p>
  </Link>

</div>
         <div className="grid lg:grid-cols-2 gap-6">
            <StatCard
              title="Total Resumes"
              value={dashboard.totalResumes}
              icon={<FaFileAlt className="text-blue-600" />}
              color="text-blue-600"
            />

            <StatCard
              title="AI Analysis"
              value={dashboard.totalAnalysis}
              icon={<FaRobot className="text-green-600" />}
              color="text-green-600"
            />

          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 border border-blue-100">

              <h2 className="text-xl font-bold mb-4">
                📄 Latest Resume
              </h2>

              <p className="text-gray-700">
                {dashboard.latestResume?.originalName || "No Resume Uploaded"}
              </p>

            </div>
           

            <div className="bg-gradient-to-br from-white to-green-50 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 p-6 border border-green-100">

              <h2 className="text-xl font-bold mb-4">
                🎯 Latest Target Job
              </h2>

              <p className="text-gray-700">
               {dashboard.latestAnalysis?.targetJob || "No Analysis Yet"}
              </p>

            </div>

          </div>

         <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

  <h2 className="text-2xl font-bold text-slate-800 mb-6">
    📊 Quick Summary
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-blue-50 rounded-2xl p-5 text-center">
      <p className="text-sm text-slate-500">Resume</p>
      <h3 className="text-xl font-bold text-blue-600 mt-2">
        {dashboard.totalResumes > 0 ? "✅ Uploaded" : "❌ Not Uploaded"}
      </h3>
    </div>

    <div className="bg-green-50 rounded-2xl p-5 text-center">
      <p className="text-sm text-slate-500">AI Analysis</p>
      <h3 className="text-xl font-bold text-green-600 mt-2">
        {dashboard.totalAnalysis > 0 ? "✅ Completed" : "❌ Pending"}
      </h3>
    </div>

    <div className="bg-purple-50 rounded-2xl p-5 text-center">
      <p className="text-sm text-slate-500">Target Job</p>
      <h3 className="text-lg font-bold text-purple-600 mt-2">
        {dashboard.latestAnalysis?.targetJob || "Not Selected"}
      </h3>
    </div>

    <div className="bg-orange-50 rounded-2xl p-5 text-center">
      <p className="text-sm text-slate-500">Status</p>
      <h3 className="text-lg font-bold text-orange-600 mt-2">
        {dashboard.totalAnalysis > 0
          ? "🟢 Placement Ready"
          : "🟡 Analyze Resume"}
      </h3>
    </div>

  </div>

</div>
          <ResumeChart />

          <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

  <h2 className="text-2xl font-bold text-slate-800 mb-6">
    👥 About Project
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* Project Details */}
    <div>
      <h3 className="text-xl font-semibold text-blue-700 mb-4">
        🚀 SkillBridge AI v1.0
      </h3>

      <p className="text-slate-600 leading-7">
        SkillBridge AI is an AI-powered Career Guidance System that helps
        students upload resumes, analyze skill gaps, calculate ATS Resume
        Score, compare skills with target jobs, and receive personalized
        learning recommendations and roadmaps.
      </p>

      <div className="mt-5 space-y-2">
        <p><strong>Department:</strong> Computer Science</p>
        <p><strong>Academic Session:</strong> 2026–27</p>
        <p><strong>Project Version:</strong> 1.0</p>
      </div>
    </div>

    {/* Team */}
    <div>

      <h3 className="text-xl font-semibold text-green-700 mb-4">
        👨‍💻 Project Team
      </h3>

      <div className="space-y-3">

        <div className="bg-slate-100 rounded-xl p-4">
          👤 <strong>Deepak</strong>
        </div>

        <div className="bg-slate-100 rounded-xl p-4">
          👤 <strong>Mohit</strong>
        </div>

        <div className="bg-slate-100 rounded-xl p-4">
          👤 <strong>Krishna Raghav</strong>
        </div>

      </div>

    </div>

  </div>

</div>

        <Footer />
        </div>

      </div>

    </div>

  );

}

export default Dashboard;