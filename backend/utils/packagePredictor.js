function predictPackage(skillMatch, atsScore) {

    const average = Math.round((skillMatch + atsScore) / 2);

    if (average >= 90) {
        return {
            range: "20 - 25 LPA",
            probability: "Excellent"
        };
    }

    if (average >= 80) {
        return {
            range: "15 - 20 LPA",
            probability: "Very High"
        };
    }

    if (average >= 70) {
        return {
            range: "12 - 15 LPA",
            probability: "High"
        };
    }

    if (average >= 60) {
        return {
            range: "10 - 12 LPA",
            probability: "Medium"
        };
    }

    return {
        range: "4 - 8 LPA",
        probability: "Needs Improvement"
    };

}

module.exports = predictPackage;