const generateSuggestions = (
    missingSkills,
    skillMatch,
    atsScore
) => {

    const suggestions = [];

    // Missing Skills
    missingSkills.forEach(skill => {
        suggestions.push(
            `Learn ${skill}`
        );
    });

    // ATS Suggestions
    if (atsScore < 70) {

        suggestions.push(
            "Improve your ATS score by adding more technical skills."
        );

        suggestions.push(
            "Add more real-world projects to your resume."
        );

    }

    // Skill Match Suggestions
    if (skillMatch < 70) {

        suggestions.push(
            "Build projects related to your target job role."
        );

        suggestions.push(
            "Practice coding interview questions regularly."
        );

    }

    suggestions.push(
        "Keep your GitHub profile updated."
    );

    suggestions.push(
        "Add certifications to improve your profile."
    );

    return suggestions;

};

module.exports = {
    generateSuggestions
};