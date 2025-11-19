import { useState } from 'react'

const steps = [
  { title: 'Submit Enquiry', desc: 'Tell us your needs, timing, and coverage.', glow: 'from-emerald-400/30' },
  { title: 'Background Check', desc: 'We verify IDs, skills, and past deployments.', glow: 'from-teal-400/30' },
  { title: 'Deployment Ready', desc: 'We match and mobilize within minutes.', glow: 'from-cyan-400/30' },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">How it works</h2>
        <p className="text-slate-300/90 mt-2">Three steps from enquiry to deployment</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setActive(i)}
              className={`relative group rounded-2xl p-6 border border-slate-700/60 bg-slate-900/50 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-1`}
            >
              <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b ${s.glow} to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity`} />
              <div className="relative z-10">
                <div className="text-sm text-teal-300/90">Step {i + 1}</div>
                <h3 className="text-xl font-semibold text-slate-50 mt-1">{s.title}</h3>
                <p className="text-slate-300/90 mt-2">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
