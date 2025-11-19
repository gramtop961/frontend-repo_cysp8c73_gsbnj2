export default function Footer() {
  return (
    <footer className="pt-16 pb-10 bg-gradient-to-t from-slate-950 to-transparent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-extrabold text-slate-50">Security People Enquiry</div>
            <p className="mt-2 text-slate-400">Secure, vetted personnel on demand.</p>
            <div className="mt-4 flex gap-3 text-slate-300">
              <a href="#" className="hover:text-teal-300">LinkedIn</a>
              <a href="#" className="hover:text-teal-300">Twitter/X</a>
              <a href="#" className="hover:text-teal-300">Facebook</a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li>support@securitypeople.io</li>
              <li>+1 (555) 010-2477</li>
              <li>24/7 Command Center</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold">Certifications</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li>ISO 27001 aligned</li>
              <li>Verified Staff</li>
              <li>GDPR compliant</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold">Quick enquiry</h4>
            <form className="mt-3 space-y-3">
              <input placeholder="Email" className="w-full rounded-xl bg-slate-900/60 border border-teal-500/30 focus:border-teal-400/70 focus:ring-0 text-slate-100 px-3 py-2" />
              <input placeholder="Requirement" className="w-full rounded-xl bg-slate-900/60 border border-teal-500/30 focus:border-teal-400/70 focus:ring-0 text-slate-100 px-3 py-2" />
              <button className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-slate-900 font-semibold py-2">Send</button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Security People Enquiry. All rights reserved.</div>
      </div>
    </footer>
  )
}
