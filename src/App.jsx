import { useState } from 'react'
import { CheckCircle2, Target, Filter, Bot, ArrowRight, BadgeDollarSign, Phone, Mail, Building2, MessageCircle } from 'lucide-react'

function Section({ id, bg = 'pearl', children }) {
  return (
    <section id={id} className={`w-full ${bg === 'sand' ? 'bg-sand' : 'bg-pearl'} py-20 md:py-28`}> 
      <div className="max-w-7xl mx-auto px-6 md:px-10">{children}</div>
    </section>
  )
}

function Heading({ kicker, title, subtitle, align = 'center' }) {
  return (
    <div className={`mb-10 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : ''}`}>
      {kicker && <p className="uppercase tracking-widest text-xs md:text-sm text-obsidian/70 mb-2">{kicker}</p>}
      <h2 className="font-seasons text-4xl md:text-5xl leading-tight text-obsidian">{title}</h2>
      {subtitle && <p className="mt-3 text-obsidian/80 font-josefin text-lg">{subtitle}</p>}
    </div>
  )
}

function CTAButton({ children }) {
  return (
    <a href="#contact" className="inline-flex items-center gap-2 bg-crimson text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {children} <ArrowRight size={18} />
    </a>
  )
}

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', website: '', whatsapp: '' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // For now, just log. If backend endpoint exists later, we can POST to `${baseUrl}/leads`
      console.log('Contact form submitted', form)
      alert('Thanks! We will reach out shortly.')
      setForm({ name: '', email: '', website: '', whatsapp: '' })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-pearl text-obsidian font-josefin">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-pearl/70 bg-pearl/80 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded bg-crimson/10 border border-crimson/30 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-crimson animate-float" />
            </span>
            <span className="font-seasons text-xl">We Scale Smiles</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#problem" className="hover:text-crimson transition-colors">Problem</a>
            <a href="#solution" className="hover:text-crimson transition-colors">Solution</a>
            <a href="#process" className="hover:text-crimson transition-colors">Process</a>
            <a href="#pricing" className="hover:text-crimson transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-crimson transition-colors">Contact</a>
          </nav>
          <div className="hidden md:block">
            <CTAButton>Get More Patients</CTAButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero" bg="pearl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs md:text-sm text-obsidian/70 mb-4">Dental Growth Agency</p>
            <h1 className="font-seasons text-5xl md:text-6xl leading-[1.1]">
              Fill Your Implant and Braces Calendar with Patients who Show Up
            </h1>
            <p className="mt-5 text-obsidian/80 text-lg">
              We Scale Smiles brings high-value implant and orthodontic patients to small clinics using targeted Facebook ads, smart lead filtering, and automation. You focus on care—we handle demand.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CTAButton>Get More Patients</CTAButton>
              <a href="#process" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-obsidian/10 hover:border-obsidian/30 transition-all">See how it works</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-obsidian/60">
              <div className="flex items-center gap-2"><CheckCircle2 className="text-crimson" size={18}/> No long-term contracts</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="text-crimson" size={18}/> HIPAA-conscious flows</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-sand/60 border border-obsidian/10 shadow-inner overflow-hidden flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-6 w-full">
                <div className="bg-white/70 rounded-xl h-28 animate-fade-in" />
                <div className="bg-white/70 rounded-xl h-28 animate-fade-in" style={{animationDelay:'100ms'}}/>
                <div className="bg-white/70 rounded-xl h-28 animate-fade-in" style={{animationDelay:'200ms'}}/>
                <div className="bg-white/70 rounded-xl h-28 animate-fade-in" style={{animationDelay:'300ms'}}/>
                <div className="bg-white/70 rounded-xl h-28 animate-fade-in" style={{animationDelay:'400ms'}}/>
                <div className="bg-white/70 rounded-xl h-28 animate-fade-in" style={{animationDelay:'500ms'}}/>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section id="problem" bg="sand">
        <Heading kicker="Problems We Solve" title="Why clinics struggle to keep high-value slots full" subtitle="Common bottlenecks that stall growth and waste time" />
        <div className="grid md:grid-cols-3 gap-6">
          {["Empty implant chair time", "Not enough braces-qualified inquiries", "Hours lost on unqualified leads"].map((item, i) => (
            <div key={i} className="bg-white/70 rounded-xl p-6 border border-obsidian/10 hover:shadow-md transition-shadow">
              <h4 className="font-seasons text-2xl mb-2">{item}</h4>
              <p className="text-obsidian/80">We help clinics consistently attract and pre-qualify patients so your team spends time only on real opportunities.</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution */}
      <Section id="solution" bg="pearl">
        <Heading kicker="Our Offer" title="Targeted Ads + Automation = Predictable Patient Flow" subtitle="We launch, filter, and nurture so you only speak to warm leads" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-obsidian/10">
            <div className="flex items-center gap-3 mb-3"><Target className="text-crimson"/> <h4 className="font-seasons text-2xl">Hyper-targeted Ads</h4></div>
            <p className="text-obsidian/80">Facebook and Instagram campaigns focused on implants and orthodontics in your local radius.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-obsidian/10">
            <div className="flex items-center gap-3 mb-3"><Filter className="text-crimson"/> <h4 className="font-seasons text-2xl">Lead Filtering</h4></div>
            <p className="text-obsidian/80">Qualifying questions and budget screens remove tire-kickers before they reach your team.</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-obsidian/10">
            <div className="flex items-center gap-3 mb-3"><Bot className="text-crimson"/> <h4 className="font-seasons text-2xl">Automation</h4></div>
            <p className="text-obsidian/80">SMS and WhatsApp follow-ups nurture leads and book them directly into your calendar.</p>
          </div>
        </div>
      </Section>

      {/* Social Proof */}
      <Section id="proof" bg="sand">
        <Heading kicker="Social Proof" title="Trusted playbooks for small dental clinics" subtitle="Add your logos and quotes here as you grow" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          {['ClinicOne','SmileCo','ImplantHub','OrthoPro'].map((n,i)=> (
            <div key={i} className="h-20 rounded-lg bg-white/70 border border-obsidian/10 flex items-center justify-center text-obsidian/60 font-semibold">{n}</div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" bg="pearl">
        <Heading kicker="How It Works" title="Three steps to consistent qualified patients" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: Target, title: 'Ads & Campaign Setup', text: 'We build implant/ortho-specific campaigns that target ideal demographics.'},
            {icon: Filter, title: 'Lead Nurturing & Filtering', text: 'Automated DMs/SMS qualify by budget, urgency, and suitability.'},
            {icon: CheckCircle2, title: 'Qualified Leads Delivered', text: 'Only warm, ready-to-book leads make it to your front desk.'},
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-obsidian/10">
              <s.icon className="text-crimson mb-3" />
              <h4 className="font-seasons text-2xl mb-1">{s.title}</h4>
              <p className="text-obsidian/80">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" bg="sand">
        <Heading kicker="Simple Pricing" title="Growth partner plan" subtitle="Flat monthly fee with clear deliverables" />
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-white rounded-2xl p-8 border border-obsidian/10">
            <div className="flex items-baseline gap-3">
              <BadgeDollarSign className="text-crimson" />
              <span className="text-4xl font-seasons">$299</span>
              <span className="text-obsidian/60">/month</span>
            </div>
            <ul className="mt-6 space-y-3">
              {['Campaign strategy & builds','Lead forms + filtering','Automation via SMS/WhatsApp','Weekly performance updates'].map((f,i)=> (
                <li key={i} className="flex items-center gap-2"><CheckCircle2 className="text-crimson" size={18}/> {f}</li>
              ))}
            </ul>
            <div className="mt-8"><CTAButton>Start for $299</CTAButton></div>
          </div>
          <div className="text-obsidian/80">
            <p>Ad spend is separate and fully transparent. We collaborate on budgets and targeting, then optimize weekly to keep chair time full for implants and braces.</p>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section id="contact" bg="pearl">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Heading kicker="Get In Touch" title="Ready to scale your clinic?" subtitle="Tell us a bit about your practice and we’ll reach out within 24 hours." align="left" />
            <div className="space-y-3 text-obsidian/80">
              <p className="flex items-center gap-2"><Phone size={18} className="text-crimson"/> WhatsApp: +1 (000) 000-0000</p>
              <p className="flex items-center gap-2"><Mail size={18} className="text-crimson"/> hello@wescalesmiles.com</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-sand/60 border border-obsidian/10 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-sm mb-1">Name</label>
                <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required className="w-full rounded-md border border-obsidian/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-crimson/40" placeholder="Dr. Jane Doe" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm mb-1">Email</label>
                <input type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required className="w-full rounded-md border border-obsidian/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-crimson/40" placeholder="you@clinic.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">Clinic Website</label>
                <input value={form.website} onChange={e=>setForm({...form, website:e.target.value})} className="w-full rounded-md border border-obsidian/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-crimson/40" placeholder="https://yourclinic.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">WhatsApp Number</label>
                <input value={form.whatsapp} onChange={e=>setForm({...form, whatsapp:e.target.value})} className="w-full rounded-md border border-obsidian/20 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-crimson/40" placeholder="+1 234 567 8900" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full bg-crimson text-white py-3 rounded-md hover:brightness-110 transition">Get More Patients</button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-obsidian text-pearl py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-seasons text-2xl">We Scale Smiles</h4>
            <p className="text-pearl/80 mt-2">We help small dental clinics keep their implant and braces calendars full with targeted ads and automation.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-pearl/80 flex items-center gap-2"><Mail size={16}/> hello@wescalesmiles.com</p>
            <p className="text-pearl/80 flex items-center gap-2"><MessageCircle size={16}/> WhatsApp: +1 (000) 000-0000</p>
          </div>
          <div className="text-pearl/70 text-sm">
            <p>© {new Date().getFullYear()} We Scale Smiles. All rights reserved.</p>
            <p className="mt-2">This site is not affiliated with Facebook™. All trademarks are property of their respective owners.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
