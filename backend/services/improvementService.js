const generateImprovements = (weaknesses) => {

    const improvements = [];

    weaknesses.forEach(item => {

        if (item.includes("GitHub")) {

            improvements.push(
                "Add your GitHub profile link and upload your projects."
            );

        }

        if (item.includes("LinkedIn")) {

            improvements.push(
                "Create a professional LinkedIn profile."
            );

        }

        if (item.includes("internship")) {

            improvements.push(
                "Try completing at least one internship."
            );

        }

        if (item.includes("projects")) {

            improvements.push(
                "Add 2-3 real-world projects with descriptions."
            );

        }

        if (item.includes("certifications")) {

            improvements.push(
                "Complete certifications from Coursera, AWS, Google or Microsoft."
            );

        }

        if (item.includes("summary")) {

            improvements.push(
                "Write a professional resume summary in 3-4 lines."
            );

        }

    });

    return improvements;

};

module.exports = {
    generateImprovements
};
