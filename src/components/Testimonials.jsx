import { useEffect, useState } from 'react'

const reviews = [
  { name: 'Aarav Mehta', role: 'Facilities Head, FinServe', text: 'We filled a weekend night shift within 90 minutes. Professional and smooth.' },
  { name: 'Sarah Lee', role: 'Ops Director, EventPro', text: 'Background checks and certifications were visible instantly. Great peace of mind.' },
  { name: 'Daniel Carter', role: 'Admin, TechHub Campus', text: 'Reliable, responsive, and the team looks sharp on-site.' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 3500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Trusted by operations leaders</h2>
        <div className="mt-8 relative">
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md shadow-2xl p-8 min-h-[180px] overflow-hidden">
            {reviews.map((r, idx) => (
              <div key={r.name} className={`transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0 absolute inset-8'}`}>
                <p className="text-slate-200 text-lg">“{r.text}”</p>
                <div className="mt-4 text-sm text-slate-400">{r.name} • {r.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
