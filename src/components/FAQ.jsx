import { useState } from "react"

const faqList = [
  {
    id: 1,
    title: "What is FlowStaticAI?",
    desc: "FlowStaticAI is an AI-powered project management tool designed to help teams organize tasks and move faster.",
  },
  {
    id: 2,
    title: "Is FlowStaticAI easy to use?",
    desc: "Yes. The interface is simple, clean, and built for teams who want to get started quickly.",
  },
  {
    id: 3,
    title: "Can I use FlowStaticAI with my team?",
    desc: "Yes. FlowStaticAI is designed for collaboration, shared workspaces, and team-based project tracking.",
  },
  {
    id: 4,
    title: "Does FlowStaticAI replace project managers?",
    desc: "No. FlowStaticAI helps automate repetitive work, but humans still make the important decisions.",
  },
  {
    id: 5,
    title: "Is there a free trial?",
    desc: "Yes. You can start with a free trial and upgrade when your team is ready.",
  },
]

function FAQ( { darkMode } ) {
  const [openId, setOpenId] = useState(null)

  return (
    <section className={`py-20 px-6 ${darkMode
      ? " bg-slate-950"
      : " bg-gradient-to-b from-blue-50 to-white"
     }`}
     >
      
      <div className={`max-w-2xl mx-auto text-center backdrop-blur rounded-3xl p-8 border shadow-sm mb-12 ${darkMode 
      ?"bg-slate-900 border-white" 
      :"bg-white/70 border-white/70" 
      }`}
      >
        <p className="text-sm font-semibold text-blue-600 mb-3">
          SUPPORT
        </p>

        <h2 className={`text-4xl font-bold text-gray-900 mb-4 
        ${darkMode 
          ?"text-white"
          :"text-gray-900"
        }`}>
          Frequently Asked Questions
        </h2>

        <p className={` ${darkMode ?"text-slate-300" :"text-gray-500" }`}>
          Everything you need to know before getting started.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqList.map((faq) => (
          <div
            key={faq.id}
            className={`
              border border-gray-200
              rounded-2xl
              p-6
              shadow-sm
              hover:shadow-lg
              hover:border-blue-300
              transition
              duration-300
            ${darkMode 
            ? "bg-slate-900" 
            : "bg-white" 
            }`}
          >
            <button
              onClick={() =>
                setOpenId(openId === faq.id ? null : faq.id)
              }
              className="w-full flex justify-between items-center text-left"
            >
              <span className={`text-lg font-semibold 
              ${darkMode ? "text-white" : "text-gray-900" }`}>
                {faq.title}
              </span>

              <span className="text-2xl text-blue-600">
                {openId === faq.id ? "−" : "+"}
              </span>
            </button>

            {openId === faq.id && (
              <p className="text-gray-500 mt-4">
                {faq.desc}
              </p>
            )}
          </div>
        ))}
      </div>

    </section>
  )
}

export default FAQ