import { ShieldCheck, BadgeCheck, Clock, Sparkles } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Background verification', desc: 'Multi-layer ID and criminal checks with ongoing monitoring.' },
  { icon: BadgeCheck, title: 'Skill matching', desc: 'Match industry-specific certifications and experience instantly.' },
  { icon: Clock, title: 'Real-time updates', desc: 'Track matching, ETA, and on-site check-ins in real time.' },
  { icon: Sparkles, title: 'Emergency support', desc: 'Rapid escalation paths and 24/7 coordination center.' },
]

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50">Built for security-critical teams</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl p-6 border border-slate-700/60 bg-slate-900/50 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-teal-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl pointer-events-none" />
              <Icon className="w-6 h-6 text-teal-300" />
              <h3 className="mt-3 text-lg font-semibold text-slate-50">{title}</h3>
              <p className="mt-2 text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
