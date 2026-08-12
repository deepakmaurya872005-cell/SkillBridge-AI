const SkillCard = ({ existingSkills, missingSkills }) => {

    return (

        <div className="grid md:grid-cols-2 gap-6">

            {/* Existing Skills */}

            <div className="bg-white rounded-3xl shadow-xl p-6">

                <h2 className="text-2xl font-bold text-green-700 mb-5">
                    ✅ Existing Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                    {
                        existingSkills.map((skill) => (

                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold"
                            >
                                {skill}
                            </span>

                        ))
                    }

                </div>

            </div>

            {/* Missing Skills */}

            <div className="bg-white rounded-3xl shadow-xl p-6">

                <h2 className="text-2xl font-bold text-red-700 mb-5">
                    ❌ Missing Skills
                </h2>

                <div className="flex flex-wrap gap-3">

                    {
                        missingSkills.map((skill) => (

                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold"
                            >
                                {skill}
                            </span>

                        ))
                    }

                </div>

            </div>

        </div>

    );

};

export default SkillCard;