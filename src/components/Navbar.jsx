function Navbar({ featuresRef, pricingRef, faqRef,setPage, darkMode, setDarkMode }) {
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
        block: "start"
      })
    })
  }

  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white px-6 py-5 md:px-8 shadow-md border-b border-slate-700">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          onClick={() => setPage("home")}
          className="text-2xl font-bold cursor-pointer"
        >
          FlowStaticAI
        </button>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <button onClick={scrollToFeatures}>Features</button>
          <button onClick={scrollToPricing}>Pricing</button>
          <button onClick={scrollToFaq}>FAQ</button>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-slate-700 text-white px-4 py-2 rounded-lg">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  )
}

export default Navbar