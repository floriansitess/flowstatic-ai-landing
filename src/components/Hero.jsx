function Hero({ darkMode }) {
  return (
    <section
      className={`text-center py-32 px-6 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-b from-blue-100 to-blue-50 text-slate-900"
      }`}
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Manage Projects 10x Faster With AI
      </h1>

      <p
        className={`text-xl max-w-2xl mx-auto mb-8 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        AI-powered project management for modern teams.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
          Start Free Trial
        </button>

        <button
          className={`border px-6 py-3 rounded-lg transition ${
            darkMode
              ? "border-slate-600 text-white hover:bg-slate-800"
              : "border-slate-300 text-slate-900 hover:bg-white"
          }`}
        >
          Book Demo
        </button>
      </div>
    </section>
  )
}

export default Hero