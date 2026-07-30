import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200 px-8 py-5 flex justify-between items-center shadow-sm">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          Dashboard 👋
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back to <span className="font-semibold text-blue-600">SkillBridge AI</span>
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <button className="relative p-3 rounded-xl bg-slate-100 hover:bg-blue-100 transition cursor-pointer">
          <FaBell className="text-xl text-slate-700" />

          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-2 shadow-md border hover:shadow-xl transition-all duration-300">

          <FaUserCircle className="text-5xl text-blue-600" />

          <div>
            <h3 className="font-bold text-slate-800">
              Deepak 
            </h3>

            <p className="text-sm text-slate-500">
              Computer Science Student
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Navbar;