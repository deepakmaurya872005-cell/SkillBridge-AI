const PackageCard = ({ packagePrediction }) => {

    return (

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl p-8 shadow-xl">

            <h2 className="text-2xl font-bold">
                💰 Expected Package
            </h2>

            <h1 className="text-5xl font-extrabold mt-6">
                {packagePrediction}
            </h1>

            <p className="mt-4 text-purple-100 text-lg">
                Predicted based on ATS score, skill match and selected domain.
            </p>

        </div>

    );

};

export default PackageCard;