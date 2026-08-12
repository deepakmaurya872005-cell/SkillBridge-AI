import { useEffect, useState } from "react";

import { analyzeResume } from "../services/analysisService";
import { getMyResumes } from "../services/resumeService";

import ATSCard from "../components/analysis/ATSCard";
import PackageCard from "../components/analysis/PackageCard";
import SkillCard from "../components/analysis/SkillCard";
import RecommendationCard from "../components/analysis/RecommendationCard";
import RoadmapCard from "../components/analysis/RoadmapCard";

import ImprovementCard from "../components/analysis/ImprovementCard";
import HistoryCard from "../components/analysis/HistoryCard";
import { getHistory } from "../services/analysisHistoryService";
import { generatePDF } from "../utils/pdfGenerator";

const Analysis = () => {

    const [resumes, setResumes] = useState([]);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const historyData = await getHistory();
                setHistory(historyData.history);
            } catch (error) {
                console.error(error);
            }
        };

        loadHistory();
    }, []);

    const [resumeId, setResumeId] = useState("");

    const [targetJob, setTargetJob] = useState("MERN Stack Developer");

    const [analysis, setAnalysis] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const loadResumes = async () => {

            try {

                const data = await getMyResumes();

                setResumes(data.resumes || []);

            } catch (error) {

                console.error(error);

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

            const data = await analyzeResume(
                resumeId,
                targetJob
            );

            setAnalysis(data.analysis);

        } catch (error) {

            alert(
                error.response?.data?.message ||
                "Analysis Failed"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 py-10 px-5">

            <div className="max-w-7xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <h1 className="text-4xl font-extrabold text-center text-slate-800">

                        🤖 AI Resume Analyzer

                    </h1>

                    <p className="text-center text-slate-500 mt-3">

                        Upload your resume and get AI-powered career insights.

                    </p>

                    <div className="mt-10 space-y-5">

                        <select
                            value={resumeId}
                            onChange={(e) => setResumeId(e.target.value)}
                            className="w-full p-4 rounded-2xl border"
                        >

                            <option value="">
                                Select Resume
                            </option>

                            {
                                resumes.map((resume) => (

                                    <option
                                        key={resume._id}
                                        value={resume._id}
                                    >
                                        {resume.originalName}
                                    </option>

                                ))
                            }

                        </select>

                        <select
                            value={targetJob}
                            onChange={(e) => setTargetJob(e.target.value)}
                            className="w-full p-4 rounded-2xl border"
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
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-4 font-bold transition"
                        >

                            {
                                loading
                                    ? "Analyzing Resume..."
                                    : "🚀 Analyze Resume"
                            }

                        </button>
                          </div>{
                        analysis && (

                            <div className="mt-10 space-y-8">

                                {/* Top Cards */}

                                <div className="grid lg:grid-cols-2 gap-6">

                                    <ATSCard
                                        atsScore={analysis.atsScore}
                                    />

                                    <PackageCard
                                        packagePrediction={analysis.packagePrediction}
                                    />

                                </div>

                                {/* Skill Match */}

                                <div className="bg-white rounded-3xl shadow-xl p-8">

                                    <h2 className="text-2xl font-bold text-slate-800">

                                        🎯 Skill Match

                                    </h2>

                                    <div className="w-full bg-gray-200 rounded-full h-5 mt-6">

                                        <div
                                            className="bg-blue-600 h-5 rounded-full transition-all duration-700"
                                            style={{
                                                width: `${analysis.skillMatch}%`
                                            }}
                                        ></div>

                                    </div>

                                    <p className="mt-5 text-xl font-bold text-blue-700">

                                        {analysis.skillMatch}% Match

                                    </p>

                                </div>

                                {/* Skills */}

                                <SkillCard
                                    existingSkills={analysis.existingSkills}
                                    missingSkills={analysis.missingSkills}
                                />
                                                                {/* AI Recommendations */}

                                <RecommendationCard
                                    recommendations={analysis.recommendations}
                                />

                                {/* AI Roadmap */}

                                <RoadmapCard
                                    roadmap={analysis.roadmap}
                                />
                              
                              <button
    onClick={() => generatePDF(analysis)}
    className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl"
>
    📥 Download AI Report
      </button>


                                <ImprovementCard
                                 improvements={analysis.improvements}
                                 />

                                 <HistoryCard
                                  history={history}
                                 />  

                            </div>

                        )
                    }

                </div>

            </div>

        </div>

    );

};

export default Analysis;