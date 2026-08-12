const packageDatabase = require("../utils/packageDatabase");

const predictPackage = (
    targetJob,
    atsScore,
    skillMatch,
    projectCount = 0,
    certificationCount = 0,
    githubScore = 0
) => {

    const domain = packageDatabase[targetJob];

    if (!domain) {
        return "Package Not Available";
    }

    // Normalize Scores

    const projectScore = Math.min(projectCount * 20, 100);

    const certificationScore = Math.min(certificationCount * 20, 100);

    const github = githubScore ? 100 : 0;

    // Overall Employability Score

    const overallScore = Math.round(

        atsScore * 0.40 +

        skillMatch * 0.35 +

        projectScore * 0.10 +

        certificationScore * 0.10 +

        github * 0.05

    );

    console.log("========== PACKAGE SCORE ==========");
    console.log("ATS:", atsScore);
    console.log("Skill Match:", skillMatch);
    console.log("Projects:", projectScore);
    console.log("Certificates:", certificationScore);
    console.log("GitHub:", github);
    console.log("Overall:", overallScore);
    console.log("===================================");

    if (overallScore >= 85) {
        return domain.expert;
    }

    if (overallScore >= 70) {
        return domain.advanced;
    }

    if (overallScore >= 55) {
        return domain.intermediate;
    }

    return domain.beginner;
};

module.exports = {
    predictPackage
};