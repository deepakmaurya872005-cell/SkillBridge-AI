const SkillGap = require("../models/SkillGap");
const Resume = require("../models/Resume");

// Analyze Resume
const analyzeResume = async (req, res) => {
    try {

        const { resumeId, targetJob } = req.body;

        // Check Resume
        const resume = await Resume.findOne({
            _id: resumeId,
            user: req.user.id
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            });
        }

        let existingSkills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ];

        let missingSkills = [];
        let recommendations = [];

       switch (targetJob) {

    case "MERN Stack Developer":

        missingSkills = [
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "REST API"
        ];

        recommendations = [
            "Learn Node.js",
            "Build REST APIs",
            "Practice MongoDB",
            "Learn Authentication using JWT",
            "Deploy a MERN Stack Project"
        ];

        break;

    case "Java Developer":

        missingSkills = [
            "Core Java",
            "Spring Boot",
            "Hibernate",
            "MySQL",
            "Microservices"
        ];

        recommendations = [
            "Practice Core Java",
            "Learn Spring Boot",
            "Build CRUD Projects",
            "Master SQL",
            "Practice DSA"
        ];

        break;

    case "Python Developer":

        missingSkills = [
            "Python",
            "Django",
            "Flask",
            "REST API",
            "PostgreSQL"
        ];

        recommendations = [
            "Master Python Basics",
            "Learn Django Framework",
            "Build Flask Projects",
            "Practice SQL",
            "Create REST APIs"
        ];

        break;

    case "Frontend Developer":

        missingSkills = [
            "TypeScript",
            "Redux",
            "Next.js",
            "Tailwind CSS",
            "Responsive Design"
        ];

        recommendations = [
            "Learn TypeScript",
            "Master Tailwind CSS",
            "Build Responsive Websites",
            "Practice Redux",
            "Learn Next.js"
        ];

        break;

    case "Backend Developer":

        missingSkills = [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Authentication",
            "REST API"
        ];

        recommendations = [
            "Practice Backend APIs",
            "Master Express.js",
            "Learn MongoDB",
            "Implement JWT",
            "Deploy Backend Server"
        ];

        break;

            case "Full Stack Developer":

        missingSkills = [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Docker",
            "AWS"
        ];

        recommendations = [
            "Build Full Stack Projects",
            "Learn Docker",
            "Practice Deployment",
            "Master REST APIs",
            "Learn Cloud Basics"
        ];

        break;

    case "AI / ML Engineer":

        missingSkills = [
            "Python",
            "Machine Learning",
            "TensorFlow",
            "Pandas",
            "NumPy"
        ];

        recommendations = [
            "Master Python",
            "Learn Machine Learning",
            "Practice TensorFlow",
            "Work on AI Projects",
            "Study Data Processing"
        ];

        break;

    case "Data Analyst":

        missingSkills = [
            "Excel",
            "SQL",
            "Power BI",
            "Python",
            "Statistics"
        ];

        recommendations = [
            "Master Excel",
            "Practice SQL Queries",
            "Learn Power BI",
            "Study Statistics",
            "Analyze Real Datasets"
        ];

        break;

    case "Android Developer":

        missingSkills = [
            "Java",
            "Kotlin",
            "Android Studio",
            "Firebase",
            "SQLite"
        ];

        recommendations = [
            "Learn Kotlin",
            "Build Android Apps",
            "Practice Firebase",
            "Learn SQLite",
            "Publish Apps"
        ];

        break;

    case "DevOps Engineer":

        missingSkills = [
            "Docker",
            "Kubernetes",
            "AWS",
            "Linux",
            "CI/CD"
        ];

        recommendations = [
            "Learn Docker",
            "Practice Linux",
            "Study AWS",
            "Learn Kubernetes",
            "Build CI/CD Pipelines"
        ];

        break;

    default:
                break;
}

// ==========================
// ATS SCORE & SKILL MATCH
// ==========================

const totalSkills =
    existingSkills.length + missingSkills.length;

const skillMatch =
    totalSkills === 0
        ? 0
        : Math.round((existingSkills.length / totalSkills) * 100);

const atsScore = Math.min(
    100,
    Math.max(40, skillMatch + 15)
);

// ==========================

const analysis = await SkillGap.create({
    user: req.user.id,
    resume: resume._id,
    targetJob,
    atsScore,
    skillMatch,
    existingSkills,
    missingSkills,
    recommendations
});

res.status(201).json({
    message: "AI Analysis Completed",
    analysis
});

    } catch (error) {

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

        missingSkills = [
            "Problem Solving",
            "Communication",
            "Git",
            "GitHub"
        ];

        recommendations = [
            "Practice DSA",
            "Build Real Projects",
            "Improve Communication",
            "Use Git & GitHub Daily",
            "Keep Learning New Technologies"
        ];

module.exports = {
    analyzeResume,
    getAnalysisHistory
};