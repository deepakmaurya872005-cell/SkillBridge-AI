import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-extrabold text-blue-600"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md">
            SB
          </div>

          <span>
            SkillBridge <span className="text-indigo-600">AI</span>
          </span>
        </Link>

        {/* Login / Register */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login / Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default HomeNavbar;
