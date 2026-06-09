const howItWorksList = [
  {
    title: "Create your workspace",
    desc: "Set up your team, projects, and workflows in seconds.",
    icon: "🙌",
  },
  {
    title: "Let AI organize tasks",
    desc: "FlowStaticAI helps prioritize work and reduce manual planning.",
    icon: "✍️",
  },
  {
    title: "Track progress in real time",
    desc: "See what is moving, what is blocked, and what needs attention.",
    icon: "🕑",
  },
]

function HowItWorks({ darkMode }) {
  return (
    <section className={`py-24 px-6 ${darkMode
      ? "bg-slate-950"
      : "bg-gradient-to-b from-blue-100 to-blue-50"
    }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`max-w-2xl mx-auto text-center backdrop-blur rounded-3xl p-8 shadow-sm mb-16 ${darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white"
        }`}
      >
          <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide">
            SIMPLE WORKFLOW
          </p>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode
          ? "text-white"
          : "text-blue-600"
          }`}
          >
            How it works
          </h2>

          <p className={`text-lg ${darkMode ? "text-slate-300" : "text-slate-500" }`}>
            From setup to execution, FlowStaticAI helps your team move faster in three simple steps.
          </p>
        </div>

        <div className="relative flex flex-col md:flex-row items-stretch justify-between gap-8">
          <div className={`hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 ${darkMode ? "bg-slate-400" : "bg-blue-200"
          }`}></div>

          {howItWorksList.map((step, index) => (
            <div
              key={step.title}
              className="relative z-10 flex flex-col items-center text-center flex-1"
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 mb-6 ${darkMode
                ? "bg-slate-700 text-slate-950 border-slate-400"
                : "bg-blue-600 text-white border-white"
              }`}
              >
                {index + 1}
              </div>

              <div className={`rounded-3xl p-8 shadow-sm border hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full h-full ${darkMode 
                ? "bg-slate-900 border-slate-500  " 
                : "bg-white border-slate-100" 
                }`}
                >
                <div className="text-4xl mb-5">{step.icon}</div>

                <h3 className={`text-xl font-bold mb-3
                ${ darkMode
                  ? "text-white"
                  : "text-blue-600"
                }`}
                >
                  {step.title}
                </h3>

                <p className={`leading-relaxed ${
                darkMode 
                ?"text-slate-200 " 
                :"text-slate-500 "
                
                }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks