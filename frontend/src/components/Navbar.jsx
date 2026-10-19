import {
  
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("User data error:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };

  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 px-8 py-5 flex justify-between items-center shadow-sm">

      {/* ================= LEFT ================= */}

      <div>
        <h1 className="text-3xl font-extrabold text-slate-800">
          Dashboard 👋
        </h1>

        <p className="text-slate-500 mt-1">
          Welcome back to{" "}
          <span className="font-semibold text-blue-600">
            SkillBridge AI
          </span>
        </p>
      </div>

      {/* ================= RIGHT ================= */}

      <div className="flex items-center gap-4">

       
        {/* User */}

        {user && (
          <>
            <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-2 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300">

              <FaUserCircle className="text-5xl text-blue-600" />

              <div>
                <h3 className="font-bold text-slate-800">
                  {user.name || "User"}
                </h3>

                <p className="text-sm text-slate-500">
                  {user.role || "Student"}
                </p>
              </div>

            </div>

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FaSignOutAlt />

              Logout
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Navbar;