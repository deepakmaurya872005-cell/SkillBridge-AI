const RecommendationCard = ({ recommendations }) => {

    return (

        <div className="bg-white rounded-3xl shadow-xl p-6">

            <h2 className="text-2xl font-bold text-blue-700 mb-6">
                💡 AI Recommendations
            </h2>

            <div className="space-y-4">

                {
                    recommendations.map((item, index) => (

                        <div
                            key={index}
                            className="flex items-center gap-4 bg-blue-50 rounded-2xl p-4 border border-blue-100"
                        >

                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                                {index + 1}

                            </div>

                            <p className="text-slate-700 font-medium">

                                {item}

                            </p>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};

export default RecommendationCard;