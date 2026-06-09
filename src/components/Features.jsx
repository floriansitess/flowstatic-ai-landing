const featuresList = [
  {
    title: "AI Automation",
    desc: "Automate repetitive tasks with AI",
    icon: "🤖",
  },
  {
    title: "Analytics",
    desc: "Track your performance in real time",
    icon: "📊",
  },
  {
    title: "Team Collaboration",
    desc: "Work together seamlessly",
    icon: "🤝",
  },
]

function Features( {darkMode} ) {
  return (
    <section
      className={`py-24 px-6 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-blue-50 via-white to-slate-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">

         <div 
         className={`max-w-2xl mx-auto text-center  backdrop-blur rounded-3xl p-8 shadow-sm border mb-16 ${
          darkMode
	          ? "bg-slate-900 border-slate-700"
	          : "bg-white/80 border-slate-100"
        }`}
      >
          <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide">
            FEATURES
          </p>

          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
		      darkMode ? "text-white" : "text-slate-900"
	        }`}
	      >
          Everything you need
          </h2>

          <p className={`text-lg ${darkMode ? "text-slate-300" : "text-slate-500"
           }`}
          >
            FlowStaticAI gives your team the tools to move faster.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature) => (
            <div
              key={feature.title}
              className={`
                rounded-3xl
                p-8
                border
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition
                duration-300
		            ${darkMode 
			          ? "bg-slate-900 border-slate-700"
			          : "bg-white border-slate-100"
		
                }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 ${darkMode ? "bg-slate-800" : "bg-blue-100"
              }`}
                >
                {feature.icon}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-slate-900" }`}>
                {feature.title}
              </h3>

              <p className={`leading-relaxed ${darkMode ? "text-slate-300" : "text-slate-500" }`}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Features