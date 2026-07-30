import { FaUserCircle, FaEnvelope, FaUserGraduate, FaFileAlt, FaRobot, FaEdit } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";

const Profile = () => {

    const [user, setUser] = useState(null);

useEffect(() => {
  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  loadProfile();
}, []);

if (!user) {
  return (
    <div className="flex justify-center items-center h-screen text-2xl font-bold">
      Loading Profile...
    </div>
  );
}

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 h-40"></div>

            {/* Profile */}
            <div className="px-10 pb-10">

              <div className="-mt-16 flex flex-col items-center">

                <FaUserCircle className="text-9xl text-white bg-white rounded-full" />

                <h2 className="text-3xl font-bold mt-4">
                  {user.name}
                </h2>

               <p className="text-slate-500 text-lg mt-2">
  🎓 Computer Science Student
</p>

<div className="mt-4 flex gap-3">

  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold">
    💻 MERN Stack
  </span>

  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
    🤖 AI Enthusiast
  </span>

</div>

              </div>

              {/* Info Cards */}

              <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                  <div className="flex items-center gap-3">

                    <FaEnvelope className="text-blue-600 text-xl" />

                    <div>

                      <h3 className="font-semibold">
                        Email
                      </h3>

                      <p className="text-slate-600">
                     {user.email}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                  <div className="flex items-center gap-3">

                    <FaUserGraduate className="text-green-600 text-xl" />

                    <div>

                      <h3 className="font-semibold">
                        Role
                      </h3>

                      <p className="text-slate-600">
                      {user.role}
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-slate-50 rounded-2xl p-6">

                  <div className="flex items-center gap-3">

                    <FaFileAlt className="text-orange-500 text-xl" />

                    <div>

                      <h3 className="font-semibold">
                        Resume Uploaded
                      </h3>

                      <p className="text-slate-600">
                        1 Resume
                      </p>

                    </div>

                  </div>

                </div>

                <div className="bg-slate-50 rounded-2xl p-6">

                  <div className="flex items-center gap-3">

                    <FaRobot className="text-purple-600 text-xl" />

                    <div>

                      <h3 className="font-semibold">
                        AI Analysis
                      </h3>

                      <p className="text-slate-600">
                        1 Completed
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="mt-10 flex justify-center">

                <button className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                 <p className="text-center text-slate-500 mt-4">
                   🚀 More profile customization features will be available in Version 2.0
                  </p>
                  
                  <FaEdit />

                  Edit Profile (Coming Soon)

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;