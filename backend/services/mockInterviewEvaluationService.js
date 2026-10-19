const stopWords = new Set([
    "the",
    "is",
    "are",
    "was",
    "were",
    "a",
    "an",
    "and",
    "or",
    "to",
    "of",
    "in",
    "on",
    "for",
    "with",
    "my",
    "i",
    "we",
    "it",
    "this",
    "that",
    "what",
    "how",
    "why"
]);

const normalizeText = (text = "") => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean);
};

const getKeywords = (text = "") => {
    return [...new Set(
        normalizeText(text).filter(
            (word) => word.length > 2 && !stopWords.has(word)
        )
    )];
};

const evaluateAnswer = (question, answer, targetJob) => {
    const questionWords = getKeywords(question);
    const answerWords = normalizeText(answer);

    if (!answer || !answer.trim()) {
        return {
            technicalAccuracy: 0,
            communication: 0,
            relevance: 0,
            overallScore: 0,
            feedback: "No answer was provided.",
            improvement: "Provide a clear and complete answer."
        };
    }

    // ================= RELEVANCE =================

    const matchedKeywords = questionWords.filter((word) =>
        answerWords.includes(word)
    );

    const relevance = Math.min(
        100,
        Math.round(
            (matchedKeywords.length /
                Math.max(questionWords.length, 1)) *
                100
        )
    );

    // ================= COMMUNICATION =================

    const wordCount = answerWords.length;

    let communication = 40;

    if (wordCount >= 20) communication = 60;
    if (wordCount >= 40) communication = 75;
    if (wordCount >= 70) communication = 85;
    if (wordCount >= 100) communication = 90;

    // ================= TECHNICAL ACCURACY =================

    let technicalAccuracy = relevance;

    if (targetJob === "MERN Stack Developer") {
        const technicalWords = [
            "react",
            "node",
            "express",
            "mongodb",
            "javascript",
            "api",
            "jwt",
            "mongoose"
        ];

        const technicalMatches = technicalWords.filter((word) =>
            answerWords.includes(word)
        ).length;

        technicalAccuracy = Math.min(
            100,
            Math.round(
                relevance * 0.6 +
                Math.min(40, technicalMatches * 10)
            )
        );
    } else {
        technicalAccuracy = Math.min(
            100,
            Math.round(relevance * 0.8 + communication * 0.2)
        );
    }

    // ================= OVERALL =================

    const overallScore = Math.round(
        technicalAccuracy * 0.4 +
        communication * 0.3 +
        relevance * 0.3
    );

    // ================= FEEDBACK =================

    let feedback = "";

    if (overallScore >= 80) {
        feedback =
            "Your answer is relevant and reasonably well structured.";
    } else if (overallScore >= 60) {
        feedback =
            "Your answer is acceptable but can be more specific and structured.";
    } else {
        feedback =
            "Your answer needs more relevant technical details and clearer explanation.";
    }

    // ================= IMPROVEMENT =================

    const improvements = [];

    if (relevance < 60) {
        improvements.push(
            "Keep the answer more directly related to the question."
        );
    }

    if (communication < 70) {
        improvements.push(
            "Give a more detailed and structured explanation."
        );
    }

    if (technicalAccuracy < 60) {
        improvements.push(
            "Include relevant technical concepts or examples."
        );
    }

    if (improvements.length === 0) {
        improvements.push(
            "Maintain the same clarity while adding practical examples."
        );
    }

    return {
        technicalAccuracy,
        communication,
        relevance,
        overallScore,
        feedback,
        improvement: improvements.join(" ")
    };
};

module.exports = {
    evaluateAnswer
};