export default function TrustBar() {
  const logos = ['Acme Corp', 'Globex', 'Wayne', 'Stark', 'Umbrella']
  const badges = [
    { label: 'ISO 27001', color: 'text-emerald-300 border-emerald-400/40' },
    { label: 'Verified Staff', color: 'text-teal-300 border-teal-400/40' },
    { label: '24/7 Support', color: 'text-cyan-300 border-cyan-400/40' },
  ]
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-slate-300/80">
          {logos.map((l) => (
            <div key={l} className="opacity-80 hover:opacity-100 transition-opacity">
              <div className="text-lg font-semibold tracking-wide">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {badges.map((b) => (
            <span key={b.label} className={`px-3 py-1 rounded-full border ${b.color} bg-slate-900/40 backdrop-blur`}>{b.label}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
