const ATSCard = ({ atsScore }) => {

    const getStatus = () => {

        if (atsScore >= 80) {
            return "Excellent ⭐";
        }

        if (atsScore >= 60) {
            return "Good 👍";
        }

        return "Needs Improvement 📈";
    };

    return (

        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold">
                📄 ATS Resume Score
            </h2>

            <h1 className="text-6xl font-extrabold mt-6">
                {atsScore}%
            </h1>

            <p className="mt-4 text-green-100 text-lg">
                {getStatus()}
            </p>

        </div>

    );

};

export default ATSCard;