const generateRoadmap = (missingSkills) => {

    const roadmap = [];

    missingSkills.forEach((skill, index) => {

        roadmap.push({

            week: index + 1,

            title: `Learn ${skill}`,

            description: `Complete fundamentals and build one mini project using ${skill}.`

        });

    });

    return roadmap;

};

module.exports = {
    generateRoadmap
};