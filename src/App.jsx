import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import LiveInteraction from './components/LiveInteraction'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_10%_10%,#0b1220,#0b1323,#0b1220)] text-slate-100">
      {/* Glow backdrop */}
      <div className="fixed inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[40rem] h-[40rem] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-teal-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-slate-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-extrabold text-lg tracking-tight">
            <span className="text-slate-50">Security</span>
            <span className="text-teal-300"> People</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-slate-300">
            <a href="#how" className="hover:text-teal-300">How it works</a>
            <a href="#features" className="hover:text-teal-300">Features</a>
            <a href="#reviews" className="hover:text-teal-300">Reviews</a>
            <a href="#faq" className="hover:text-teal-300">FAQ</a>
            <a href="#contact" className="rounded-lg bg-teal-500/20 border border-teal-400/40 px-3 py-1 text-teal-200 hover:bg-teal-500/30">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TrustBar />
        <section id="how"><HowItWorks /></section>
        <section id="features"><Features /></section>
        <LiveInteraction />
        <section id="reviews"><Testimonials /></section>
        <section id="faq"><FAQ /></section>
      </main>

      <section id="contact"><Footer /></section>
    </div>
  )
}

export default App
