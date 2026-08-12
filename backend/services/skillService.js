const domainDatabase = require("../utils/domainDatabase");

// Compare Resume Skills with Target Job Skills
const analyzeSkills = (resumeSkills, targetJob) => {

    const domain = domainDatabase[targetJob];

    if (!domain) {
        return {
            existingSkills: [],
            missingSkills: [],
            skillMatch: 0
        };
    }

    const existingSkills = [];
    const missingSkills = [];

    // Normalize Resume Skills
    const normalizedResumeSkills = resumeSkills.map(skill =>
        skill.toLowerCase().trim()
    );

    // Compare Required Skills
    domain.requiredSkills.forEach(skill => {

        if (
            normalizedResumeSkills.includes(
                skill.toLowerCase()
            )
        ) {
            existingSkills.push(skill);
        } else {
            missingSkills.push(skill);
        }

    });

    // Skill Match Percentage
    const skillMatch = Math.round(
        (existingSkills.length / domain.requiredSkills.length) * 100
    );

    return {
        existingSkills,
        missingSkills,
        skillMatch
    };

};

module.exports = {
    analyzeSkills
};