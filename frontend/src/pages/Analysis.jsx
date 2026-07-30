import { useEffect, useState } from "react";
import { analyzeResume } from "../services/analysisService";
import { getMyResumes } from "../services/resumeService";

const Analysis = () => {

  const [resumes, setResumes] = useState([]);

  const [resumeId, setResumeId] = useState("");

  const [targetJob, setTargetJob] = useState("MERN Developer");

  const [analysis, setAnalysis] = useState(null);

  const [loading, setLoading] = useState(false);

 useEffect(() => {
  const loadResumes = async () => {
    try {
     const data = await getMyResumes();

console.log("Resume API Response:", data);
console.log("Resumes Array:", data.resumes);

setResumes(data.resumes || []);
    } catch (error) {
      console.error("Load Resume Error:", error);
    }
  };

  loadResumes();
}, []);

  const handleAnalyze = async () => {

    if (!resumeId) {

      alert("Please select a Resume");

      return;

    }

    try {

      setLoading(true);

      const data = await analyzeResume(resumeId, targetJob);

      setAnalysis(data.analysis);

    } catch (error) {

      alert(error.response?.data?.message || "Analysis Failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-slate-100 p-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl mb-8">

  <h1 className="text-4xl font-extrabold">
    🤖 AI Skill Gap Analysis
  </h1>

  <p className="mt-3 text-blue-100 text-lg">
    Upload your resume, compare your skills with your dream job, and discover what you need to learn.
  </p>

</div>
<select
  className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 text-slate-700 font-medium outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all mb-5"
  value={resumeId}
  onChange={(e) => setResumeId(e.target.value)}
>

            <option value="">Select Resume</option>

            {
              resumes.map((resume) => (

                <option key={resume._id} value={resume._id}>

                  {resume.originalName}

                </option>

              ))
            }

          </select>

          <select
           className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 text-slate-700 font-medium outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all mb-6"
            value={targetJob}
            onChange={(e) => setTargetJob(e.target.value)}
          >
            <option>MERN Stack Developer</option>
<option>Java Developer</option>
<option>Python Developer</option>
<option>Frontend Developer</option>
<option>Backend Developer</option>
<option>Full Stack Developer</option>
<option>AI / ML Engineer</option>
<option>Data Analyst</option>
<option>Android Developer</option>
<option>DevOps Engineer</option>
          

          </select>
<button
  onClick={handleAnalyze}
  disabled={loading}
  className={`w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-lg ${
    loading
      ? "bg-blue-400 cursor-not-allowed"
      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.02] hover:shadow-xl"
  }`}
>
  {loading ? "🤖 Analyzing Resume..." : "🚀 Analyze Resume"}
</button>

        </div>

        {
          analysis && (

            <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">

              {/* ATS Score & Skill Match */}

<div className="grid md:grid-cols-2 gap-6 mb-8">

  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-6 shadow-xl">

    <h3 className="text-xl font-bold">
      📄 ATS Resume Score
    </h3>

    <h1 className="text-5xl font-extrabold mt-4">
      {analysis.atsScore}%
    </h1>

    <p className="mt-3 text-green-100">
      {
        analysis.atsScore >= 80
          ? "Excellent Resume ⭐"
          : analysis.atsScore >= 60
          ? "Good Resume 👍"
          : "Needs Improvement 📈"
      }
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-xl p-6">

    <h3 className="text-xl font-bold mb-4">
      🎯 Skill Match
    </h3>

    <div className="w-full bg-gray-200 rounded-full h-5">

      <div
        className="bg-blue-600 h-5 rounded-full transition-all duration-700"
        style={{
          width: `${analysis.skillMatch}%`
        }}
      ></div>

    </div>

    <p className="mt-4 text-lg font-semibold text-blue-700">
      {analysis.skillMatch}% Match
    </p>

  </div>

</div>

              <div className="mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-xl">

  <div className="flex items-center justify-between">

    <div>
      <h3 className="text-2xl font-bold">
        🎯 Overall Job Match
      </h3>

      <p className="text-blue-100 mt-2">
        Based on your resume and selected job role
      </p>
    </div>

    <div className="text-5xl font-extrabold">
      {analysis.skillMatch}%
    </div>

  </div>

  <div className="mt-6 w-full h-4 bg-white/20 rounded-full overflow-hidden">

    <div className="h-full style={{
  width: `${analysis.skillMatch}%`
}} bg-gradient-to-r from-green-400 to-green-300 rounded-full"></div>

  </div>

  <p className="mt-3 text-green-200 font-semibold">
    ✅ Good Match – Improve missing skills to reach 100%.
  </p>

</div>

             

          <div className="grid gap-6">

  {/* Existing Skills */}
  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-md">
    <h3 className="text-xl font-bold text-blue-700 mb-4">
      ✅ Existing Skills
    </h3>

    <div className="flex flex-wrap gap-3">
      {analysis.existingSkills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium shadow"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Missing Skills */}
  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 shadow-md">
    <h3 className="text-xl font-bold text-red-700 mb-4">
      ❌ Missing Skills
    </h3>

    <div className="flex flex-wrap gap-3">
      {analysis.missingSkills.map((skill) => (
        <span
          key={skill}
          className="px-4 py-2 rounded-full bg-red-500 text-white font-medium shadow"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>

  {/* Recommendations */}
  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-md">
    <h3 className="text-xl font-bold text-green-700 mb-4">
      📚 Recommendations
    </h3>

    {/* AI Learning Roadmap */}

<div className="mt-10 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl p-6 shadow-md">

  <h3 className="text-2xl font-bold text-indigo-700 mb-6">
    🗺️ AI Learning Roadmap
  </h3>

  <div className="space-y-4">

    {analysis.recommendations.map((item, index) => (

      <div
        key={index}
        className="flex items-center gap-4 bg-white rounded-xl p-4 shadow"
      >

        <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">

          {index + 1}

        </div>

        <div>

          <h4 className="font-bold text-slate-800">

            Week {index + 1}

          </h4>

          <p className="text-slate-600">

            {item}

          </p>

        </div>

      </div>

    ))}

  </div>

</div>

    <div className="mt-8 grid md:grid-cols-3 gap-6">

  <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md">
    <div className="text-4xl mb-3">✅</div>

    <h3 className="text-xl font-bold text-green-700">
      Existing Skills
    </h3>

    <p className="mt-2 text-3xl font-extrabold">
      {analysis.existingSkills.length}
    </p>

    <p className="text-slate-600 mt-2">
      Skills already available in your resume.
    </p>
  </div>

  <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-md">
    <div className="text-4xl mb-3">❌</div>

    <h3 className="text-xl font-bold text-red-700">
      Missing Skills
    </h3>

    <p className="mt-2 text-3xl font-extrabold">
      {analysis.missingSkills.length}
    </p>

    <p className="text-slate-600 mt-2">
      Skills you should learn.
    </p>
  </div>

  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-md">
    <div className="text-4xl mb-3">📚</div>

    <h3 className="text-xl font-bold text-blue-700">
      Recommendations
    </h3>

    <p className="mt-2 text-3xl font-extrabold">
      {analysis.recommendations.length}
    </p>

    <p className="text-slate-600 mt-2">
      Personalized learning suggestions.
    </p>
  </div>

</div>

    <div className="space-y-3">
      {analysis.recommendations.map((item) => (
        <div
          key={item}
          className="bg-white rounded-xl p-4 shadow border border-green-200"
        >
          ✅ {item}
        </div>
      ))}
    </div>
  </div>

</div>         </div>

          )
        }

      </div>

    </div>

  );

};

export default Analysis;