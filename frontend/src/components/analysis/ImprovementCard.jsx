const ImprovementCard = ({ improvements }) => {

    return (

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold text-indigo-700 mb-6">

                💡 AI Resume Improvement Report

            </h2>

            <div className="space-y-4">

                {improvements.length === 0 ? (

                    <div className="bg-green-100 text-green-700 p-4 rounded-xl font-semibold">

                        🎉 Excellent! Your resume doesn't need major improvements.

                    </div>

                ) : (

                    improvements.map((item, index) => (

                        <div
                            key={index}
                            className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-xl"
                        >
                            💡 {item}
                        </div>

                    ))

                )}

            </div>

        </div>

    );

};

export default ImprovementCard;