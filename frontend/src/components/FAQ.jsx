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