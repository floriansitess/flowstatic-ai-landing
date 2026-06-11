const pricingList = [
  {
    title: "Free",
    price: "$0",
    desc: "Perfect for individuals getting started.",
  },
  {
    title: "Plus",
    price: "$10",
    desc: "For growing teams that need more power.",
    featured: true,
  },
  {
    title: "Professional",
    price: "$50",
    desc: "Advanced features for serious businesses.",
  },
]

function Pricing({ darkMode }) {
  return (
    <section
      className={`py md:py-24 px-6 ${
        darkMode
          ? "bg-slate-950"
          : "bg-gradient-to-b from-slate-50 to-blue-100"
      }`}
    >
      <div
        className={`max-w-2xl mx-auto text-center backdrop-blur rounded-3xl p-8 shadow-sm border mb-16 ${
          darkMode
            ? "bg-slate-900/80 border-slate-700"
            : "bg-white/70 border-white/60"
        }`}
      >
        <p className="text-sm font-semibold text-blue-600 mb-3 tracking-wide">
          PRICING
        </p>

        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          Service Plans
        </h2>

        <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
          Find the perfect plan for your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingList.map((pricing) => {
          const isFeatured = pricing.featured

          return (
            <div
              key={pricing.title}
              className={`
                rounded-3xl
                p-8
                transition
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                ${
                  isFeatured
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : darkMode
                      ? "bg-slate-900 text-white border border-slate-700 shadow-sm"
                      : "bg-white text-slate-900 border border-slate-100 shadow-sm"
                }
              `}
            >
              <h3 className="text-2xl font-bold mb-4">
                {pricing.title}
              </h3>

              <div className="text-5xl font-bold mb-4">
                {pricing.price}
                <span
                  className={`text-base font-normal ${
                    isFeatured
                      ? "text-blue-100"
                      : darkMode
                        ? "text-slate-400"
                        : "text-slate-500"
                  }`}
                >
                  /month
                </span>
              </div>

              <p
                className={`mb-8 leading-relaxed ${
                  isFeatured
                    ? "text-blue-100"
                    : darkMode
                      ? "text-slate-300"
                      : "text-slate-500"
                }`}
              >
                {pricing.desc}
              </p>

              <button
                className={`
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  ${
                    isFeatured
                      ? "bg-white text-blue-600 hover:bg-blue-50"
                      : darkMode
                        ? "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pricing