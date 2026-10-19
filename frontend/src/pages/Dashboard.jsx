import { useEffect, useState } from "react";


import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard";

import { Link } from "react-router-dom";
import Resume from "./Resume";
import Analysis from "./Analysis";
import MockInterview from "./MockInterview";
import VideoInterview from "./VideoInterview";

import {
  FaFileAlt,
  FaRobot,
  
  FaHistory,
} from "react-icons/fa";

import { getDashboard } from "../services/dashboardService";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);
  const [selectedResumeId, setSelectedResumeId] = useState("");

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
        <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-3xl p-8 border border-blue-100 shadow-lg mb-8">

 <h1 className="text-4xl font-extrabold text-slate-900">
  👋 Welcome to SkillBridge AI
</h1>

 <p className="mt-3 text-slate-600 text-lg">
  Upload your resume, analyze your skills, and become placement-ready with AI guidance.
</p>
</div>

            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-8">



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

          <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

              <h2 className="text-xl font-bold mb-4">
                📄 Latest Resume
              </h2>

              <p className="text-gray-700">
                {dashboard.latestResume?.originalName || "No Resume Uploaded"}
              </p>

            </div>
           

              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

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
       <p className="text-sm text-slate-500">
       Career Readiness
      </p>
    </div>

  </div>

</div>
<div className="mt-8">
  <Resume
    onUploadSuccess={(resume) => {
      setSelectedResumeId(resume._id);
    }}
  />
</div>

<div className="mt-10 mb-4">
  <h2 className="text-3xl font-extrabold text-slate-800">
    📄 Step 1: Upload Your Resume
  </h2>

  <p className="text-slate-500 mt-2">
    Upload your latest PDF resume to begin your SkillBridge AI journey.
  </p>
</div>

<div className="mt-10 mb-4">
  <h2 className="text-3xl font-extrabold text-slate-800">
    🤖 Step 2: AI Resume Analysis
  </h2>

  <p className="text-slate-500 mt-2">
    Select your target job and analyze your uploaded resume to get
    personalized career insights.
  </p>
</div>

<div className="mt-6">
  <Analysis selectedResumeId={selectedResumeId} />
</div>

<div className="mt-10">
  <MockInterview />
</div>

<div className="mt-10">
  <VideoInterview />
</div>


          <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

  <h2 className="text-2xl font-bold text-slate-800 mb-6">
    👥 About Project
  </h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* ================= DATA SOURCES & AI FLOW ================= */}

<div className="mt-10 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

  <h2 className="text-2xl font-bold text-slate-800 mb-2">
    🔄 Data Sources & AI Processing Flow
  </h2>

  <p className="text-slate-500 mb-8">
    SkillBridge AI processes user-provided resume data and profile information
    to generate personalized career insights.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">

    {/* Step 1 */}
    <div className="bg-blue-50 rounded-2xl p-5 text-center">
      <div className="text-4xl mb-3">👤</div>
      <h3 className="font-bold text-slate-800">
        User Profile
      </h3>
      <p className="text-sm text-slate-500 mt-2">
        Projects, certifications and GitHub profile
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-purple-50 rounded-2xl p-5 text-center">
      <div className="text-4xl mb-3">📄</div>
      <h3 className="font-bold text-slate-800">
        Resume PDF
      </h3>
      <p className="text-sm text-slate-500 mt-2">
        Resume uploaded by the logged-in student
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-green-50 rounded-2xl p-5 text-center">
      <div className="text-4xl mb-3">🧠</div>
      <h3 className="font-bold text-slate-800">
        Skill Analysis
      </h3>
      <p className="text-sm text-slate-500 mt-2">
        Resume skills compared with target job skills
      </p>
    </div>

    {/* Step 4 */}
    <div className="bg-orange-50 rounded-2xl p-5 text-center">
      <div className="text-4xl mb-3">🤖</div>
      <h3 className="font-bold text-slate-800">
        AI Processing
      </h3>
      <p className="text-sm text-slate-500 mt-2">
        ATS, skill gap, recommendations and roadmap
      </p>
    </div>

    {/* Step 5 */}
    <div className="bg-pink-50 rounded-2xl p-5 text-center">
      <div className="text-4xl mb-3">📊</div>
      <h3 className="font-bold text-slate-800">
        Career Insights
      </h3>
      <p className="text-sm text-slate-500 mt-2">
        Personalized results stored in MongoDB
      </p>
    </div>

  </div>

  <div className="mt-8 bg-slate-50 rounded-2xl p-5 border border-slate-200">

    <p className="text-center font-semibold text-slate-700">
      User Profile + Resume PDF → Skill Detection → AI Analysis →
      Personalized Career Recommendations
    </p>

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