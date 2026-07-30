const steps = [
  {
    icon: "📄",
    title: "Upload Resume",
    description: "Upload your resume in PDF format.",
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    description: "AI analyzes your resume and identifies missing skills.",
  },
  {
    icon: "🎯",
    title: "Skill Gap Report",
    description: "Compare your current skills with your target job.",
  },
  {
    icon: "🗺️",
    title: "Learning Roadmap",
    description: "Receive a personalized roadmap to become job-ready.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            How SkillBridge AI Works
          </h2>

          <p className="text-slate-500 mt-3">
            Complete your career journey in four simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition"
            >

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="text-6xl mt-6">
                {step.icon}
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;