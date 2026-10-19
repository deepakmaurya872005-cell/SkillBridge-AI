
import { FaArrowRight, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-2 shadow-sm">
            <FaRobot className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">
              AI Powered Career Assistant
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-slate-900">
              Bridge the Gap
            </span>

            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Between Skills & Jobs
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Upload your resume, get AI-powered skill gap analysis,
            discover missing technologies, and receive a personalized
            learning roadmap to become job-ready faster.
          </p>

          {/* Button */}
          <Link
            to="/login"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Get Started
            <FaArrowRight />
          </Link>

          {/* Features */}
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <span className="rounded-xl border border-blue-100 bg-white/90 px-4 py-3">
              Resume Analysis
            </span>

            <span className="rounded-xl border border-indigo-100 bg-white/90 px-4 py-3">
              Skill Gap Analysis
            </span>

            <span className="rounded-xl border border-green-100 bg-white/90 px-4 py-3">
              Learning Roadmap
            </span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Image Glow */}
          <div className="absolute inset-6 rounded-[2rem] bg-blue-400/20 blur-3xl" />

          {/* Project Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-3 shadow-2xl">
            <img
              src="/skillbridge-hero.png"
              alt="SkillBridge AI Career Platform"
              className="block h-auto max-h-[620px] w-full rounded-2xl object-contain"
            />
          </div>

          {/* Floating Feature Card */}
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-xl sm:-left-8">
            <div className="flex items-center gap-3">
             

              <div>
                

              
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;