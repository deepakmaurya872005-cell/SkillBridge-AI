const HistoryCard = ({ history }) => {

    return (

        <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-2xl font-bold mb-6">

                📄 Previous Analysis

            </h2>

            <div className="space-y-5">

                {history.length === 0 ? (

                    <div className="text-slate-500">

                        No previous analysis found.

                    </div>

                ) : (

                    history.map(item => (

                        <div
                            key={item._id}
                            className="border rounded-2xl p-5"
                        >

                            <h3 className="font-bold text-lg">

                                {item.resume?.originalName}

                            </h3>

                            <p>

                                Target Job :
                                {item.targetJob}

                            </p>

                            <p>

                                ATS :
                                {item.atsScore}%

                            </p>

                            <p>

                                Package :
                                {item.packagePrediction}

                            </p>

                            <p>

                                Skill Match :
                                {item.skillMatch}%

                            </p>

                        </div>

                    ))

                )}

            </div>

        </div>

    );

};

export default HistoryCard;