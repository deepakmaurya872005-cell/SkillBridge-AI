const learningResources = require("../utils/learningResources");

const getLearningResources = (missingSkills) => {

    const resources = [];

    missingSkills.forEach((skill) => {

        if (learningResources[skill]) {

            resources.push({

                skill,

                ...learningResources[skill]

            });

        }

    });

    return resources;

};

module.exports = {

    getLearningResources

};