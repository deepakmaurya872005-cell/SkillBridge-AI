import {
  FaHome,
  FaFileUpload,
  FaRobot,
  FaHistory,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};
  return (
   <div className="w-72 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col shadow-2xl">

     <div className="p-8 border-b border-slate-700">

  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-3xl shadow-xl">
    🤖
  </div>

  <h1 className="text-2xl font-extrabold text-center mt-4">
    SkillBridge AI
  </h1>

  <p className="text-center text-slate-400 text-sm mt-2">
    AI Career Assistant
  </p>

</div>
      {/* Menu */}
      <div className="flex-1 p-5">

       <ul className="space-y-3 mt-2">

          <NavLink
  to="/dashboard"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-600"
    }`
  }
>
  <FaHome />
  Dashboard
</NavLink>

         <NavLink
  to="/resume"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-600"
    }`
  }
>
  <FaFileUpload />
  Upload Resume
</NavLink>

          <NavLink
  to="/analysis"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
  : "hover:bg-slate-700"
    }`
  }
>
  <FaRobot />
  AI Analysis
</NavLink>

        <NavLink
  to="/history"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "hover:bg-blue-600"
    }`
  }
>
  <FaHistory />
  History
</NavLink>

          <NavLink
  to="/profile"
  className={({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition ${
      isActive
        ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
        : "hover:bg-slate-700"
    }`
  }
>
  <FaUser />
  Profile
</NavLink>

        </ul>

      </div>

      {/* Logout */}
      <div className="p-5 border-t border-slate-700">

        <button
  onClick={handleLogout}
  className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"
>
  <FaSignOutAlt />
  Logout
</button>

      </div>

    </div>
  );
};

export default Sidebar;