import React from 'react'
import { motion } from 'framer-motion'
import {
  Menu,
  X,
  BarChart3,
  Workflow,
  Sparkles,
  Braces,
  Briefcase,
  Check,
  Phone,
  Mail,
  Building2,
  FileText,
} from 'lucide-react'

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Pricing', href: '/#pricing' },
]

const solutions = [
  {
    icon: Workflow,
    title: 'Enterprise Automation',
    text: 'Streamline complex business workflows with intelligent robotic process automation (RPA) and custom scripts.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    text: 'Leverage historical data to forecast demand, optimize pricing, and anticipate market shifts before they happen.',
  },
  {
    icon: Briefcase,
    title: 'Intelligent Process Automation',
    text: 'Combine AI with automation to handle unstructured data, document processing, and cognitive decision-making.',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Insights',
    text: 'Transform raw data into actionable business intelligence using advanced natural language processing and computer vision.',
  },
  {
    icon: Briefcase,
    title: 'Custom ML Models',
    text: 'Design, train, and deploy bespoke machine learning models tailored specifically to your unique business challenges.',
  },
  {
    icon: Braces,
    title: 'Business Intelligence',
    text: 'Build dynamic, real-time dashboards that provide deep visibility into operational efficiency and ROI.',
  },
]

const featureRows = [
  {
    title: 'Intelligent Automation',
    text: 'Reduce operational costs and eliminate manual workflows. Our custom AI solutions automate repetitive tasks, allowing your team to focus on high-value strategic initiatives.',
    align: 'right',
    image: '/images/intelligent-automation.png',
    imageClassName: 'object-[62%_44%]',
  },
  {
    title: 'Predictive Analytics',
    text: 'Harness the power of machine learning to forecast market trends, optimize supply chains, and make data-driven decisions with unprecedented accuracy and speed.',
    align: 'left',
    image: '/images/predictive-analytics.png',
    imageClassName: 'object-[center_48%]',
  },
  {
    title: 'Competitive Advantage',
    text: 'Accelerate your innovation cycles. By integrating state-of-the-art AI models into your core products and services, we help you stay ahead of the curve in a rapidly evolving digital landscape.',
    align: 'right',
    image: '/images/competitive-advantage.png',
    imageClassName: 'object-[58%_48%]',
  },
]

const plans = [
  {
    badge: null,
    title: 'Starter AI Consulting',
    subtitle: 'Perfect for businesses exploring AI feasibility and strategy.',
    price: '$2,500',
    meta: 'one-time',
    items: [
      'Comprehensive AI readiness assessment',
      'Data infrastructure audit',
      'Two-hour stakeholder & ROI workshop',
      'Strategic implementation roadmap',
    ],
    cta: "Let's Talk",
    featured: false,
  },
  {
    badge: 'MOST POPULAR',
    title: 'Professional ML Implementation',
    subtitle: 'For companies ready to build and deploy custom AI models.',
    price: '$8,000',
    meta: 'starting at',
    items: [
      'Everything from Starter Consulting',
      'Custom machine learning model development',
      'Data pipeline engineering',
      'API integration & deployment',
      'Weekly progress & strategy syncs',
    ],
    cta: "Let's Talk",
    featured: true,
  },
  {
    badge: null,
    title: 'Enterprise Automation Suite',
    subtitle: 'End-to-end business transformation with AI technologies.',
    price: 'Custom',
    meta: 'engagement',
    items: [
      'Full AI workflow automation',
      'Dedicated AI engineering team',
      'On-premise or private cloud deployment',
      'Continuous model tuning & monitoring',
      '24/7 SLA and priority support',
    ],
    cta: "Let's Talk",
    featured: false,
  },
]

function GlowOrb() {
  return (
    <div className="relative mx-auto h-[240px] w-[240px] sm:h-[320px] sm:w-[320px] lg:h-[420px] lg:w-[420px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(52,121,255,0.3),rgba(84,44,210,0.22)_38%,rgba(0,0,0,0)_72%)] blur-2xl" />
      <div className="absolute inset-[3%] rounded-full border border-fuchsia-500/20" />
      <div className="absolute inset-[14%] rounded-full border border-fuchsia-400/25" />
      <motion.div
        initial={{ opacity: 0.86, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1.01 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3.4, ease: 'easeInOut' }}
        className="absolute inset-[18%] overflow-hidden rounded-full border border-fuchsia-400/35 bg-[radial-gradient(circle_at_28%_24%,rgba(76,191,255,0.95),rgba(73,103,252,0.72)_40%,rgba(128,42,210,0.78)_74%)] shadow-[0_0_80px_rgba(101,64,255,0.35)]"
      >
        {[
          [22, 20],
          [31, 27],
          [55, 18],
          [77, 30],
          [19, 50],
          [37, 47],
          [54, 53],
          [71, 49],
          [28, 66],
          [44, 74],
          [67, 70],
        ].map(([left, top], i) => (
          <div
            key={i}
            className="absolute h-2.5 w-2.5 rounded-full bg-cyan-200/90 shadow-[0_0_12px_rgba(170,236,255,0.9)]"
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        ))}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full opacity-90">
          {[
            [24, 30, 48, 22],
            [48, 22, 70, 36],
            [70, 36, 62, 64],
            [62, 64, 38, 76],
            [38, 76, 30, 48],
            [30, 48, 24, 30],
            [30, 48, 48, 60],
            [48, 60, 48, 22],
          ].map((line, idx) => (
            <line key={idx} x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke="rgba(206, 88, 255, 0.82)" strokeWidth="0.6" />
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

function FeatureVisual({ src, alt, imageClassName = 'object-center' }) {
  return (
    <div className="group relative h-[220px] w-full overflow-hidden rounded-xl border border-white/10 bg-[#060f2a] shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:h-[260px] lg:h-[280px]">
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover ${imageClassName} transition duration-500 group-hover:scale-[1.03]`}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,23,54,0.15),rgba(10,23,54,0.3))]" />
    </div>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">{subtitle}</p>
    </div>
  )
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#03091b]/88 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between px-4 py-3.5 sm:px-5 lg:px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-slate-950 shadow-[0_0_30px_rgba(0,185,255,0.2)]">Z</div>
          <span className="text-lg font-semibold tracking-tight text-white">Zoralie Labs</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="https://www.zoraile.com"
            className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400 shadow-[0_8px_28px_rgba(0,185,255,0.28)]"
          >
            Client Portal
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#03091b] md:hidden">
          <div className="mx-auto flex w-full max-w-[1360px] flex-col gap-2 px-4 py-4 sm:px-5">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-lg px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">
                {item.label}
              </a>
            ))}
            <a href="https://www.zoraile.com" className="mt-1 rounded-lg bg-cyan-500 px-3 py-3 font-medium text-slate-950">
              Client Portal
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-4 py-14 sm:px-5 lg:px-6">
      <div className="mx-auto grid w-full max-w-[1360px] gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500 font-bold text-slate-950">Z</div>
            <span className="text-lg font-semibold">Zoralie Labs</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Empowering businesses through intelligent automation, predictive analytics, and custom machine learning solutions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-white/90">Services</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="/#services" className="block transition hover:text-white">AI Strategy Consulting</a>
            <a href="/#solutions" className="block transition hover:text-white">Machine Learning Models</a>
            <a href="/#pricing" className="block transition hover:text-white">Process Automation</a>
            <a href="/#services" className="block transition hover:text-white">Data Engineering</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-[0.18em] text-white/90">Company</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a href="/" className="block transition hover:text-white">About Us</a>
            <a href="/#services" className="block transition hover:text-white">Case Studies</a>
            <a href="/contact" className="block transition hover:text-white">Contact</a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[1360px] flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>&copy; 2026 Zoralie Labs. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <a href="/privacy" className="transition hover:text-white">Privacy Policy</a>
          <a href="/terms" className="transition hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <main id="top">
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[calc(76vh-72px)] w-full max-w-[1360px] items-center gap-8 px-4 py-8 sm:px-5 sm:py-9 lg:grid-cols-[1.05fr_0.95fr] lg:px-6 lg:py-10 xl:min-h-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="pb-1 text-[34px] font-semibold leading-[1.06] tracking-tight sm:text-[46px] md:text-[56px] xl:text-[64px]">
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text pb-[0.08em] text-transparent">Intelligent</span>
              <span className="block text-white">Automation for Enterprise</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-[15px] xl:text-base">
              Transform your business with cutting-edge AI and machine learning solutions. We build intelligent systems that drive <span className="text-cyan-400">efficiency</span>, optimize processes, and accelerate <span className="text-cyan-400">innovation</span>.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-7 py-3 text-sm font-medium text-slate-950 shadow-[0_12px_28px_rgba(0,185,255,0.25)] transition hover:bg-cyan-400"
              >
                Book Consultation
              </a>
              <a
                href="/#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.02] px-7 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            <GlowOrb />
          </motion.div>
        </div>
      </section>

      <section className="-mt-3 border-y border-white/10 sm:-mt-4">
        <div className="mx-auto grid w-full max-w-[1360px] grid-cols-1 divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-5 lg:px-6">
          {[
            ['99.9%', 'MODEL ACCURACY'],
            ['500+', 'PROCESSES AUTOMATED'],
            ['10x', 'AVERAGE ROI'],
          ].map(([value, label]) => (
            <div key={label} className="py-8 text-center sm:py-10 lg:py-12">
              <div className="text-3xl font-semibold tracking-tight text-cyan-400 sm:text-4xl">{value}</div>
              <div className="mt-2 text-[10px] tracking-[0.24em] text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-[1360px] px-4 py-16 sm:px-5 sm:py-24 lg:px-6 lg:py-28">
        <div className="space-y-14 sm:space-y-20 lg:space-y-28">
          {featureRows.map((row, index) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={`${row.align === 'right' ? 'lg:order-1' : 'lg:order-2'} max-w-xl`}>
                <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{row.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{row.text}</p>
              </div>
              <div className={`${row.align === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                <FeatureVisual src={row.image} alt={row.title} imageClassName={row.imageClassName} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="solutions" className="border-t border-white/10 px-4 py-16 sm:px-5 sm:py-24 lg:px-6 lg:py-28">
        <div className="mx-auto w-full max-w-[1360px]">
          <SectionHeading
            title="AI Solutions for Modern Business"
            subtitle="From initial strategy to full-scale deployment, we provide the technical expertise needed to transform your operations."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.03]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-white/10 px-4 py-16 sm:px-5 sm:py-24 lg:px-6 lg:py-28">
        <div className="mx-auto w-full max-w-[1360px]">
          <SectionHeading
            title="Transparent Consulting Engagements"
            subtitle="Partner with our experts to scale at your own pace. Choose an engagement model that fits your business goals."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className={`relative rounded-2xl border p-7 shadow-[0_18px_50px_rgba(0,0,0,0.24)] ${
                  plan.featured
                    ? 'border-blue-500/60 bg-[linear-gradient(180deg,rgba(28,67,224,0.2),rgba(255,255,255,0.03))]'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-semibold tracking-[0.22em] text-slate-950">
                    {plan.badge}
                  </div>
                )}
                <div className="min-h-[120px]">
                  <h3 className="text-lg font-semibold text-white">{plan.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{plan.subtitle}</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-semibold tracking-tight text-white">{plan.price}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">{plan.meta}</div>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    plan.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'border border-white/15 bg-transparent text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [status, setStatus] = React.useState({ type: '', text: '' })

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus({ type: '', text: '' })

    const name = formData.name.trim()
    const email = formData.email.trim()
    const message = formData.message.trim()
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/

    if (!name || !email || !message) {
      setStatus({ type: 'error', text: 'Please fill in Name, Email, and Message.' })
      return
    }

    if (!emailPattern.test(email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setStatus({ type: 'success', text: 'Request submitted successfully.' })
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <main className="px-4 py-14 sm:px-5 lg:px-6">
      <div className="mx-auto w-full max-w-[980px]">
        <SectionHeading
          title="Contact Us"
          subtitle="Talk to our team about automation and AI initiatives."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <p className="mt-3 text-sm text-slate-400">You can also reach us directly using the number below.</p>

            <div className="mt-6 space-y-4 text-sm">
              <a href="tel:9035457672" className="flex items-center gap-3 text-slate-200 transition hover:text-white">
                <Phone className="h-4 w-4 text-cyan-300" />
                <span>9035457672</span>
              </a>
              <a href="mailto:contact@zoraile.com" className="flex items-center gap-3 text-slate-200 transition hover:text-white">
                <Mail className="h-4 w-4 text-cyan-300" />
                <span>contact@zoraile.com</span>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="grid gap-4">
              <label className="text-sm text-slate-300">
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  required
                  className="mt-2 w-full rounded-lg border border-white/15 bg-[#03091b] px-3 py-2.5 text-sm outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:ring"
                  placeholder="Your name"
                />
              </label>

              <label className="text-sm text-slate-300">
                Email
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                  className="mt-2 w-full rounded-lg border border-white/15 bg-[#03091b] px-3 py-2.5 text-sm outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:ring"
                  placeholder="you@company.com"
                />
              </label>

              <label className="text-sm text-slate-300">
                Company
                <div className="relative mt-2">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input
                    name="company"
                    value={formData.company}
                    onChange={onChange}
                    className="w-full rounded-lg border border-white/15 bg-[#03091b] py-2.5 pl-10 pr-3 text-sm outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:ring"
                    placeholder="Company (optional)"
                  />
                </div>
              </label>

              <label className="text-sm text-slate-300">
                Message
                <div className="relative mt-2">
                  <FileText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-slate-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={onChange}
                    required
                    rows={5}
                    className="w-full rounded-lg border border-white/15 bg-[#03091b] py-2.5 pl-10 pr-3 text-sm outline-none ring-cyan-400/40 placeholder:text-slate-500 focus:ring"
                    placeholder="Tell us what you need"
                  />
                </div>
              </label>

              <button
                type="submit"
                className="mt-1 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Submit Request
              </button>

              {status.text && (
                <p className={`text-sm ${status.type === 'success' ? 'text-cyan-300' : 'text-rose-300'}`}>
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

function TermsPage() {
  return (
    <main className="px-4 py-14 sm:px-5 lg:px-6">
      <div className="mx-auto w-full max-w-[980px] rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <SectionHeading
          title="Terms of Service"
          subtitle="By using Zoralie Labs services, you agree to the terms outlined below."
        />

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
          <section>
            <h3 className="text-base font-semibold text-white">Use of Services</h3>
            <p className="mt-2">You agree to use our services for lawful business purposes and to provide accurate information when requesting consultation or implementation support.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Project Scope and Deliverables</h3>
            <p className="mt-2">All project deliverables, milestones, and service timelines are governed by written agreements and statements of work executed between both parties.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Intellectual Property</h3>
            <p className="mt-2">Ownership of custom solutions, models, and supporting artifacts is defined in the project contract. Pre-existing tools and frameworks remain the property of their original owners.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Limitation of Liability</h3>
            <p className="mt-2">Zoralie Labs is not liable for indirect or consequential losses arising from service usage, model behavior, or decisions made based on AI outputs.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <p className="mt-2">For questions about these terms, contact us at <a href="/contact" className="text-cyan-300">/contact</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

function PrivacyPage() {
  return (
    <main className="px-4 py-14 sm:px-5 lg:px-6">
      <div className="mx-auto w-full max-w-[980px] rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <SectionHeading
          title="Privacy Policy"
          subtitle="How we collect, use, and store information submitted through this website."
        />

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-300">
          <section>
            <h3 className="text-base font-semibold text-white">Information We Collect</h3>
            <p className="mt-2">When you submit the contact form, we collect your name, email, company (optional), and message.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">How We Use It</h3>
            <p className="mt-2">We use submitted information only to respond to inquiries, scope projects, and provide consulting follow-ups.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Storage</h3>
            <p className="mt-2">Contact form submissions are validated in the browser and are not persisted by this site.</p>
          </section>

          <section>
            <h3 className="text-base font-semibold text-white">Your Rights</h3>
            <p className="mt-2">You may request correction or deletion of your submitted information by contacting our team through the contact page.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

function resolvePage(pathname) {
  if (pathname.startsWith('/terms')) return 'terms'
  if (pathname.startsWith('/privacy')) return 'privacy'
  if (pathname.startsWith('/contact')) return 'contact'
  return 'home'
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const page = resolvePage(window.location.pathname)

  return (
    <div className="min-h-screen bg-[#02081d] text-white selection:bg-cyan-400/30 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(7,44,138,0.18),transparent_28%),radial-gradient(circle_at_70%_20%,rgba(140,0,255,0.08),transparent_22%),linear-gradient(180deg,#020817_0%,#02081d_25%,#03071c_100%)]" />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {page === 'home' && <HomePage />}
      {page === 'contact' && <ContactPage />}
      {page === 'terms' && <TermsPage />}
      {page === 'privacy' && <PrivacyPage />}

      <Footer />
    </div>
  )
}
