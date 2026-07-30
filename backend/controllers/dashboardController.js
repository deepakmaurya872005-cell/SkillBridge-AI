const Resume = require("../models/Resume");
const SkillGap = require("../models/SkillGap");

const getDashboard = async (req, res) => {
    try {

        const totalResumes = await Resume.countDocuments({
            user: req.user.id
        });

        const totalAnalysis = await SkillGap.countDocuments({
            user: req.user.id
        });

        const latestResume = await Resume.findOne({
            user: req.user.id
        }).sort({ createdAt: -1 });

        const latestAnalysis = await SkillGap.findOne({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({

            totalResumes,

            totalAnalysis,

            latestResume,

            latestAnalysis

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    getDashboard
};