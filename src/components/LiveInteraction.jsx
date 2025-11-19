import { useEffect, useRef, useState } from 'react'

const sample = [
  { role: 'user', text: 'Need 4 corporate guards for HQ lobby & parking.' },
  { role: 'system', text: 'Verifying background & availability…' },
  { role: 'system', text: 'Matched 4 vetted guards. ETA: 2 hours.' },
  { role: 'user', text: 'Include one supervisor and radio sets.' },
  { role: 'system', text: 'Supervisor assigned. Equipment confirmed.' },
]

export default function LiveInteraction() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % (sample.length + 2)), 1800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [index])

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Live interaction preview</h2>
        <p className="text-slate-300/90 mt-2">A simulated chat showing how quickly matches happen</p>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md shadow-xl">
            <div ref={containerRef} className="h-80 overflow-y-auto p-4 space-y-3">
              {sample.slice(0, index).map((m, i) => (
                <div key={i} className={`max-w-[85%] rounded-xl px-4 py-2 text-sm ${m.role === 'user' ? 'ml-auto bg-teal-500/20 text-teal-200 border border-teal-400/30' : 'bg-slate-800/80 text-slate-200 border border-slate-700/60'}`}>
                  {m.text}
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none" />
          </div>

          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-md shadow-xl p-6">
            <ol className="space-y-3 text-slate-300/90 text-sm">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(16,185,129,0.8)]" /> Enquiry received</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-teal-400" /> Background verification</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-cyan-400" /> Matching and ETA</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-emerald-300" /> Deployment ready</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
