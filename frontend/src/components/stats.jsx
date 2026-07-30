const stats = [
  {
    icon: "🤖",
    title: "AI Powered",
    description: "Smart resume analysis using AI."
  },
  {
    icon: "📄",
    title: "Resume Analysis",
    description: "Upload and analyze PDF resumes."
  },
  {
    icon: "🎯",
    title: "Skill Gap Detection",
    description: "Find missing skills for your dream job."
  },
  {
    icon: "🛣️",
    title: "Learning Roadmap",
    description: "Get personalized career guidance."
  }
];

const Stats = () => {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-8">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-slate-800 p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 text-center"
            >

              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-white">
                {item.title}
              </h2>

              <p className="text-slate-400 mt-4 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;