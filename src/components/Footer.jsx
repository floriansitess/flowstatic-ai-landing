function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">FlowStaticAI</h2>
          <p className="text-slate-400 max-w-sm">
            AI-powered project management for modern teams.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Product</h3>
          <a className="text-slate-400 hover:text-white" href="#">Features</a>
          <a className="text-slate-400 hover:text-white" href="#">Pricing</a>
          <a className="text-slate-400 hover:text-white" href="#">FAQ</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold mb-2">Company</h3>
          <a className="text-slate-400 hover:text-white" href="#">About</a>
          <a className="text-slate-400 hover:text-white" href="#">Contact</a>
          <a className="text-slate-400 hover:text-white" href="#">Privacy</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-700 mt-10 pt-6 text-center text-slate-500">
        © 2026 FlowStaticAI. All rights reserved.
      </div>
      <div className="max-w-3xl mx-auto mt-5 pt-3 text-center text-slate-500">
        Disclaimer: This is a front-end reference/portfolio work!
      </div>
    </footer>
  )
}

export default Footer