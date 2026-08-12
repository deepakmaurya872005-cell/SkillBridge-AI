const detectWeaknesses = (resumeText = "") => {

    const weaknesses = [];

    const text = resumeText.toLowerCase();

    if (!text.includes("github")) {
        weaknesses.push("GitHub profile is missing.");
    }

    if (!text.includes("linkedin")) {
        weaknesses.push("LinkedIn profile is missing.");
    }

    if (
        !text.includes("internship") &&
        !text.includes("experience")
    ) {
        weaknesses.push("No internship or work experience found.");
    }

    if (!text.includes("project")) {
        weaknesses.push("No projects mentioned.");
    }

    if (
        !text.includes("certificate") &&
        !text.includes("certification")
    ) {
        weaknesses.push("No certifications found.");
    }

    if (
        !text.includes("summary") &&
        !text.includes("objective") &&
        !text.includes("profile")
    ) {
        weaknesses.push("Resume summary/objective is missing.");
    }

    return weaknesses;
};

module.exports = {
    detectWeaknesses
};