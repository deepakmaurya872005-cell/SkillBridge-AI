const calculateATS = (
    skillMatch,
    resumeText = ""
) => {

    let score = 0;

    // ---------------------
    // Skill Match (60)
    // ---------------------

    score += skillMatch * 0.60;

    // ---------------------
    // Projects (15)
    // ---------------------

    const projectCount =
        (resumeText.match(/project/gi) || []).length;

    score += Math.min(projectCount * 5, 15);

    // ---------------------
    // Certifications (10)
    // ---------------------

    const certificationCount =
        (
            resumeText.match(
                /certificate|certification|coursera|udemy|aws|google|microsoft/gi
            ) || []
        ).length;

    score += Math.min(certificationCount * 5, 10);

    // ---------------------
    // GitHub
    // ---------------------

    if (resumeText.includes("github")) {

        score += 5;

    }

    // ---------------------
    // LinkedIn
    // ---------------------

    if (resumeText.includes("linkedin")) {

        score += 5;

    }

    // ---------------------
    // Experience
    // ---------------------

    if (
        resumeText.includes("experience") ||
        resumeText.includes("internship")
    ) {

        score += 5;

    }

    return Math.min(
        100,
        Math.round(score)
    );

};

module.exports = {
    calculateATS
};