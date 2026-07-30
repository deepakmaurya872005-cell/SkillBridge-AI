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
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("SkillGap", skillGapSchema);