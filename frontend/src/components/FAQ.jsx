const faqs = [
  {
    question: "What is SkillBridge AI?",
    answer:
      "SkillBridge AI is an AI-powered career guidance platform that analyzes resumes and suggests missing skills.",
  },
  {
    question: "Which resume format is supported?",
    answer:
      "Currently, PDF resumes are supported for AI analysis.",
  },
  {
    question: "Is SkillBridge AI free?",
    answer:
      "Yes. This academic version is free to use.",
  },
  {
    question: "Can I track my previous analyses?",
    answer:
      "Yes. Every analysis is saved in your dashboard history.",
  },

    {
    question: "How do I create an account?",
    answer:
      "You can create an account by opening the Register page and entering your details.",
  },
  {
    question: "How do I log in?",
    answer:
      "Open the Login page and enter your registered email and password.",
  },
  {
    question: "How do I upload my resume?",
    answer:
      "Open the Resume section and upload your resume in PDF format.",
  },
  {
    question: "What does the ATS score show?",
    answer:
      "The ATS score gives an indication of how well your resume matches the selected job requirements.",
  },
  {
    question: "What is skill gap analysis?",
    answer:
      "Skill gap analysis identifies skills you may need to develop for your selected target job.",
  },
  {
    question: "How does the learning roadmap help me?",
    answer:
      "The learning roadmap organizes suggested learning steps to help you work toward your career goal.",
  },
  {
    question: "Can I select a target job?",
    answer:
      "Yes. You can select a target job to receive job-related resume analysis and skill recommendations.",
  },
  {
    question: "Can I view my profile?",
    answer:
      "Yes. Open the Profile section to view your account information.",
  },
  {
    question: "What is package prediction?",
    answer:
      "Package prediction provides an estimated salary package based on the available profile and analysis information. It is not a guarantee of an actual offer.",
  },
  {
    question: "Can I improve my resume after analysis?",
    answer:
      "Yes. Review the analysis and improvement suggestions to identify areas where your resume may be strengthened.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-8">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 mt-3">
            Everything you need to know.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <details
              key={index}
              className="group bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
            >

              <summary className="cursor-pointer text-lg font-semibold">
                {faq.question}
              </summary>

              <p className="mt-4 text-slate-600">
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;