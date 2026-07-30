import { Link } from "react-router-dom";
import { FaArrowRight, FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen flex items-center">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <FaRobot className="text-blue-300" />
            <span className="text-sm font-medium">AI Powered Career Assistant</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Bridge the Gap
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Between Skills & Jobs
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
            Upload your resume, get AI-powered skill gap analysis, discover missing technologies, and receive a personalized learning roadmap to become job-ready faster.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl"
            >
              Get Started Free
              <FaArrowRight />
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
            >
              Login
            </Link>
          </div>

</div>

        {/* Right Visual */}
        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Analysis</h3>
                  <p className="text-slate-300 text-sm">Resume processing completed</p>
                </div>
              </div>

              <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                Live
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">React</span>
                  <span className="text-blue-300 text-sm font-semibold">95%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full w-[95%]"></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Node.js</span>
                  <span className="text-yellow-300 text-sm font-semibold">40%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full w-[40%]"></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">MongoDB</span>
                  <span className="text-red-300 text-sm font-semibold">20%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-400 to-pink-500 h-2 rounded-full w-[20%]"></div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-xl">
                  🎯
                </div>
                <div>
                  <div className="font-semibold text-green-200">Job Readiness Score</div>
                  <div className="text-2xl font-bold text-green-300">78%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;