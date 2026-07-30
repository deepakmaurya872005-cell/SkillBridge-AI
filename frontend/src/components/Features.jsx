import { Link } from "react-router-dom";

const features = [
  {
    icon: "📄",
    title: "Resume Upload",
    description: "Upload your resume securely in PDF format.",
    link: "/resume",
  },
  {
    icon: "🤖",
    title: "AI Skill Analysis",
    description: "Identify missing skills for your target job.",
    link: "/analysis",
  },
  {
    icon: "🗺️",
    title: "Learning Roadmap",
    description: "Receive a personalized roadmap to improve.",
    link: "/dashboard",
  },
  {
    icon: "📊",
    title: "Dashboard",
    description: "Track your resume, analysis and overall progress.",
    link: "/dashboard",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose SkillBridge AI?
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to become placement ready in one platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-5xl shadow-lg group-hover:rotate-6 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              <span className="mt-6 inline-block text-blue-600 font-semibold group-hover:translate-x-2 transition-all duration-300">
                Learn More →
              </span>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;