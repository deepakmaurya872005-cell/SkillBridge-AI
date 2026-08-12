const SkillGap = require("../models/SkillGap");
const Resume = require("../models/Resume");

const extractPdfText = require("../utils/pdfReader");
const skillDatabase = require("../utils/skillDatabase");

const { analyzeSkills } = require("../services/skillService");
const { calculateATS } = require("../services/atsService");
const { predictPackage } = require("../services/packageService");
const { generateSuggestions } = require("../services/suggestionService");
const { generateRoadmap } = require("../services/roadmapService");

const { detectWeaknesses } = require("../services/weaknessService");
const { generateImprovements } = require("../services/improvementService");

const fs = require("fs");


// Analyze Resume
const analyzeResume = async (req, res) => {
    try {

        const { resumeId, targetJob } = req.body;

        // Check Resume
        const resume = await Resume.findOne({
            _id: resumeId,
            user: req.user.id
        });

        if (!resume) 

            {
            return res.status(404).json({
                message: "Resume not found"
            });
        }

              // =============================
             // Read Resume PDF
             // =============================



 console.log("Resume Path:", resume.filePath);
console.log("File Exists:", fs.existsSync(resume.filePath));

if (fs.existsSync(resume.filePath)) {
    console.log("File Size:", fs.statSync(resume.filePath).size);
}

const resumeText = (
    await extractPdfText(resume.filePath)
).toLowerCase();


 console.log("Resume Length:", resumeText.length);

console.log("================================");
console.log("RESUME TEXT");
console.log("================================");
console.log(resumeText);
console.log("================================");

           // Resume Skills Detection
const resumeSkills = skillDatabase.filter(skill =>
    resumeText.includes(skill.toLowerCase())
);

console.log("Detected Resume Skills:", resumeSkills);

// Skill Analysis
const {
    existingSkills,
    missingSkills,
    skillMatch
} = analyzeSkills(
    resumeSkills,
    targetJob
);
       // Generate ATS Score
const atsScore = calculateATS(
    skillMatch,
    resumeText
);




// Predict Package
const packagePrediction = predictPackage(
    targetJob,
    atsScore,
    skillMatch,
    3,      // Projects
    2,      // Certifications
    1       // GitHub Available
);

// Generate Suggestions
const recommendations = generateSuggestions(
    missingSkills,
    skillMatch,
    atsScore
);

const weaknesses = detectWeaknesses(resumeText);
const improvements = generateImprovements(weaknesses);

// Generate AI Roadmap
const roadmap = generateRoadmap(
    missingSkills
);



       const analysis = await SkillGap.create({
    user: req.user.id,
    resume: resume._id,
    targetJob,

    atsScore,
    skillMatch,

    existingSkills,
    missingSkills,

    recommendations,

    packagePrediction,

    roadmap,
    weaknesses,
    improvements
});

res.status(201).json({
    message: "AI Analysis Completed",
    analysis
});

    } catch (error) {

    console.log("========== SKILL GAP ERROR ==========");
    console.error(error);
    console.log("====================================");

    res.status(500).json({
        message: error.message
    });

}
};

// Get AI Analysis History
const getAnalysisHistory = async (req, res) => {
    try {

        const history = await SkillGap.find({
            user: req.user.id
        })
            .populate("resume", "originalName uploadedAt")
            .sort({ createdAt: -1 });

        res.status(200).json({
            count: history.length,
            history
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    analyzeResume,
    getAnalysisHistory
};