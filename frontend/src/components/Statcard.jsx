const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

      <div className="flex items-center justify-between">

        {/* Text */}

        <div>
          <h3 className="text-slate-500 text-sm font-semibold">
            {title}
          </h3>

          <h2 className={`text-4xl font-extrabold mt-2 ${color}`}>
            {value}
          </h2>
        </div>

        {/* Icon */}

         <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-4xl">
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;