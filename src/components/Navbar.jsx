function Navbar({ featuresRef, pricingRef, faqRef, setPage, darkMode, setDarkMode }) {
  const scrollToFeatures = () => {
    setPage("home")

    setTimeout(() => {
      featuresRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 0)
  }

  const scrollToPricing = () => {
    setPage("home")

    setTimeout(() => {
      pricingRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 0)
  }

  const scrollToFaq = () => {
    setPage("home")

    setTimeout(() => {
      faqRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }, 0)
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-4 md:px-8 shadow-md border-b border-slate-700">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="text-2xl font-bold cursor-pointer"
        >
          FlowStaticAI
        </button>

        <div className="hidden md:flex items-center gap-6">
          <button onClick={scrollToFeatures}>Features</button>
          <button onClick={scrollToPricing}>Pricing</button>
          <button onClick={scrollToFaq}>FAQ</button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hidden md:inline-flex bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 text-xl hover:bg-slate-600 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar