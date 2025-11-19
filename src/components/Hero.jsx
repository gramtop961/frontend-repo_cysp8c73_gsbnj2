import { useState } from 'react'
import Spline from '@splinetool/react-spline'

function Field({ label, type = 'text', name, value, onChange, options }) {
  if (type === 'select') {
    return (
      <label className="block">
        <span className="text-sm text-teal-200/80">{label}</span>
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="mt-1 w-full rounded-xl bg-slate-900/60 border border-teal-500/30 focus:border-teal-400/70 focus:ring-0 text-slate-100 placeholder:text-slate-400/70 px-3 py-2 backdrop-blur-sm shadow-[inset_0_0_0_1px_rgba(45,212,191,0.1)] transition-colors"
        >
          {options.map(opt => (
            <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
          ))}
        </select>
      </label>
    )
  }
  return (
    <label className="block">
      <span className="text-sm text-teal-200/80">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
        className="mt-1 w-full rounded-xl bg-slate-900/60 border border-teal-500/30 focus:border-teal-400/70 focus:ring-0 text-slate-100 placeholder:text-slate-400/70 px-3 py-2 backdrop-blur-sm shadow-[inset_0_0_0_1px_rgba(45,212,191,0.1)] transition-colors"
      />
    </label>
  )
}

export default function Hero() {
  const [form, setForm] = useState({ name: '', company: '', contact: '', type: 'Corporate Guards' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(13,148,136,0.15),transparent_60%)] pointer-events-none" />
      <div className="container mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: copy + form */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-slate-900/40 px-3 py-1 text-teal-200/80 backdrop-blur-md shadow-sm shadow-teal-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_2px_rgba(16,185,129,0.8)]" />
              Instant Response • Vetted Personnel
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-50">
              Security People Enquiry
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-teal-200 drop-shadow-[0_0_30px_rgba(45,212,191,0.45)]">
                Hire vetted security—fast
              </span>
            </h1>

            <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
              Corporate-ready guards, supervisors, and rapid response teams. Submit once—we match you within minutes.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/60 backdrop-blur-md shadow-2xl shadow-teal-500/10">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} />
              <Field label="Company" name="company" value={form.company} onChange={handleChange} />
              <Field label="Contact" name="contact" value={form.contact} onChange={handleChange} />
              <Field label="Requirement Type" type="select" name="type" value={form.type} onChange={handleChange} options={[
                'Corporate Guards','Event Security','Executive Protection','24/7 Monitoring','Emergency Deployment'
              ]} />
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-900 font-semibold py-3 shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all disabled:opacity-70"
                >
                  <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/10 transition-colors" />
                  {loading ? 'Matching…' : 'Get Matched'}
                </button>
                {submitted && (
                  <p className="mt-3 text-emerald-300/90 text-sm">
                    Thanks! A coordinator will reach out shortly.
                  </p>
                )}
              </div>
            </form>

            <div className="mt-4 text-slate-400 text-sm">
              ISO 27001 ready • Verified staff • NDAs available
            </div>
          </div>

          {/* Right: 3D Scene */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900/70 to-slate-950 shadow-2xl">
            <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.12),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
