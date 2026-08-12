const RoadmapCard = ({ roadmap }) => {

    return (

        <div className="bg-white rounded-3xl shadow-xl p-6">

            <h2 className="text-2xl font-bold text-purple-700 mb-6">
                🗺️ AI Career Roadmap
            </h2>

            <div className="space-y-5">

                {
                    roadmap.map((step) => (

                        <div
                            key={step.week}
                            className="flex gap-4 items-start"
                        >

                            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold flex-shrink-0">

                                {step.week}

                            </div>

                            <div className="bg-purple-50 rounded-2xl p-4 w-full border border-purple-100">

                                <h3 className="font-bold text-lg text-slate-800">

                                    {step.title}

                                </h3>

                                <p className="text-slate-600 mt-2">

                                    {step.description}

                                </p>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

};

export default RoadmapCard;