const Resume = require("../models/Resume");

// Upload Resume
const uploadResume = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "Please upload a PDF resume."
            });
        }

        const resume = await Resume.create({
            user: req.user.id,
            originalName: req.file.originalname,
            fileName: req.file.filename,
            filePath: req.file.path,
            fileSize: req.file.size
        });

        res.status(201).json({
            message: "Resume uploaded successfully",
            resume
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Resumes of Logged-in User
const getMyResumes = async (req, res) => {
    try {

        const resumes = await Resume.find({
            user: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            count: resumes.length,
            resumes
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Resume
const deleteResume = async (req, res) => {
    try {

        const resume = await Resume.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            });
        }

        await Resume.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Resume deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    uploadResume,
    getMyResumes,
    deleteResume
};
