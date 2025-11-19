import { useState } from 'react'

const faqs = [
  { q: 'How fast can you deploy?', a: 'Most corporate requests are matched within minutes; deployment can begin in 2-6 hours depending on location.' },
  { q: 'Are guards background verified?', a: 'Yes, ID, address, police, and certification checks are part of our onboarding with ongoing monitoring.' },
  { q: 'Do you cover events and VIP protection?', a: 'Yes, we support event security, executive protection, and ad-hoc emergency coverage.' },
  { q: 'Can you sign NDAs and MSAs?', a: 'Absolutely. We are enterprise-ready with NDAs, SOC practices, and ISO 27001 alignment.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">FAQs</h2>
        <div className="mt-6 divide-y divide-slate-700/60 rounded-2xl border border-slate-700/60 bg-slate-900/50 backdrop-blur-md">
          {faqs.map((f, i) => (
            <details key={f.q} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} className="group">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between">
                <span className="text-slate-200 font-medium">{f.q}</span>
                <span className="ml-4 w-6 h-6 rounded-full grid place-items-center text-teal-300 border border-teal-400/40">{open === i ? '-' : '+'}</span>
              </summary>
              <div className="px-5 pb-5 text-slate-300/90">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
