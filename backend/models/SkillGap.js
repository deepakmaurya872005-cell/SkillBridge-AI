const mongoose = require("mongoose");

const skillGapSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        resume: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Resume",
            required: true
        },

        targetJob: {
            type: String,
            required: true
        },
        atsScore: {
    type: Number,
    default: 0
},

skillMatch: {
    type: Number,
    default: 0
},

        existingSkills: [
            {
                type: String
            }
        ],

        missingSkills: [
            {
                type: String
            }
        ],

        recommendations: [
            {
                type: String
            }
        ],

        learningResources: [
    {
        skill: String,

        youtube: {
            title: String,
            url: String
        },

        documentation: String,

        practiceProject: String,

        quiz: String,

        notes: String,

        difficulty: String,

        duration: String
    }
],
   packagePrediction: {
    type: String,
    default: ""
},

projects: {
    type: Number,
    default: 0
},

certifications: {
    type: Number,
    default: 0
},

githubAvailable: {
    type: Boolean,
    default: false
},

roadmap: [
    {
        week: Number,
        title: String,
        description: String
    }
],
weaknesses: [
    {
        type: String
    }
],


improvements: [
    {
        type: String
    }
]

    },
   
    {
        timestamps: true
    }
);

module.exports = mongoose.model("SkillGap", skillGapSchema);