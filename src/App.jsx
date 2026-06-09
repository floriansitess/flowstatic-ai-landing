import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import FAQ from "./components/FAQ"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import ToBeContinued from "./components/ToBeContinued"
import { useRef, useState } from "react"

function App() {
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)
  const faqRef = useRef(null)
  const [page, setPage] = useState("home")
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Navbar
        featuresRef={featuresRef}
        pricingRef={pricingRef}
        faqRef={faqRef}
        setPage={setPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {page === "home" && (
        <>
          <Hero darkMode={darkMode} />

          <div ref={featuresRef}>
            <Features darkMode={darkMode} />
          </div>

          <div ref={pricingRef}>
            <Pricing darkMode={darkMode} />
          </div>

          <HowItWorks darkMode={darkMode} />
          
          <div ref={faqRef}>
            <FAQ darkMode={darkMode} />
          </div>

          
          <Footer darkMode={darkMode} />
        </>
      )}

      
      {page === "faq" && <ToBeContinued />}
    </>
  )
}

export default App