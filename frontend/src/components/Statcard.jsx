const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white">

      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-gray-500 text-sm font-medium">
            {title}
          </h3>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
          </h2>
        </div>

        <div className="text-5xl">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;