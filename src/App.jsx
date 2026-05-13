import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const trustedUseCases = [
  {
    title: 'Garment shops',
    description:
      'Track stock by size, color, design, and purchase cycles with a clean workflow built for busy shop teams.',
  },
  {
    title: 'Medical stores',
    description:
      'Manage batch stock, sales, and replenishment with a simple system that supports accuracy and daily reliability.',
  },
  {
    title: 'Inventory management',
    description:
      'Keep every product organized with clear visibility across stock levels, billing, and business operations.',
  },
]

const services = [
  {
    title: 'Stock Management Systems',
    description:
      'Reliable software for live inventory control, product tracking, and daily business clarity.',
  },
  {
    title: 'POS Systems',
    description:
      'Fast point-of-sale experiences designed for smooth checkout and practical store operations.',
  },
  {
    title: 'Billing Solutions',
    description:
      'Simple billing tools that help reduce manual work and improve accuracy at the counter.',
  },
  {
    title: 'Custom Business Software',
    description:
      'Tailored systems that match your workflow, structure, and long-term business goals.',
  },
  {
    title: 'Future Website Development',
    description:
      'A future-ready path for businesses that want a strong digital presence with the same quality standards.',
  },
]

const whyChoose = [
  'Affordable solutions for small and growing businesses',
  'Reliable systems built for everyday operational needs',
  'Clean interfaces that are easy for staff to learn',
  'Local business understanding with practical implementation',
  'Support that helps your team stay confident and productive',
  'Scalable structure for future expansion and new services',
]

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="min-h-screen bg-white text-zinc-950 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-950 focus:shadow-lg focus:outline-none dark:focus:bg-zinc-900 dark:focus:text-white"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="group inline-flex items-center gap-3" aria-label="StockBridge home">
            <span className="flex h-10 w-10 items-center justify-center border border-zinc-900 bg-zinc-950 text-sm font-semibold tracking-[0.25em] text-white dark:border-zinc-100 dark:bg-zinc-50 dark:text-zinc-950">
              SB
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-[0.24em] uppercase text-zinc-950 dark:text-white">
                StockBridge
              </span>
              <span className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Business software systems
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950/20 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 dark:focus:ring-zinc-50/20"
            >
              Get Consultation
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-current transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`${mobileOpen ? 'block' : 'hidden'} border-t border-zinc-200 px-4 py-4 md:hidden dark:border-zinc-800`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              onClick={() => setMobileOpen(false)}
            >
              Get Consultation
            </a>
          </nav>
        </div>
      </header>

      <main id="main" className="overflow-hidden">
        <section id="home" className="scroll-mt-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-5">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Premium business software for growing stores
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
                Clean stock systems for shops that need control, trust, and simplicity.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-300">
                StockBridge builds practical software for garment shops, medical stores, retail businesses,
                and small businesses that want reliable operations without unnecessary complexity.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                >
                  Talk on WhatsApp
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:hover:border-zinc-500 dark:hover:bg-zinc-900"
                >
                  Explore Services
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 border-t border-zinc-200 pt-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                <div>
                  <span className="block text-2xl font-semibold text-zinc-950 dark:text-white">01</span>
                  Trusted systems
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-zinc-950 dark:text-white">02</span>
                  Affordable delivery
                </div>
                <div>
                  <span className="block text-2xl font-semibold text-zinc-950 dark:text-white">03</span>
                  Built for business growth
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-full border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-800">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">
                      Designed for operations
                    </p>
                    <p className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">
                      A minimal system with maximum clarity.
                    </p>
                  </div>
                  <div className="h-14 w-14 border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950" />
                </div>

                <div className="mt-6 space-y-4">
                  {['Inventory visibility', 'Fast billing workflows', 'Daily business control'].map((item) => (
                    <div key={item} className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-950">
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{item}</span>
                      <span className="text-xs uppercase tracking-[0.3em] text-zinc-400">Ready</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-zinc-200 pt-6 text-sm leading-6 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
                  Enterprise-grade presentation with a monochrome visual system, subtle borders, and a layout
                  optimized for trust.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50/70 py-16 dark:border-zinc-800 dark:bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Trusted business software"
              title="Built for the day-to-day realities of local business operations."
              description="Our systems are designed for real shop workflows, not generic software demos."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {trustedUseCases.map((item) => (
                <article key={item.title} className="border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Services"
              title="Focused solutions for stock, sales, and future business growth."
              description="Clear services with a premium business tone and a practical scope for small and mid-sized companies."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="group border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-500">
                  <h3 className="text-lg font-semibold text-zinc-950 group-hover:text-zinc-800 dark:text-white dark:group-hover:text-zinc-200">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50/60 py-20 dark:border-zinc-800 dark:bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <SectionHeading
                eyebrow="Why choose us"
                title="Built to feel premium, stay affordable, and work reliably."
                description="A clear product approach that makes business systems feel simple for owners and staff."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <div key={item} className="flex items-start gap-3 border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50" />
                    <p className="text-sm leading-7 text-zinc-700 dark:text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="About"
                  title="A software house focused on practical value and lasting trust."
                  description="StockBridge helps businesses adopt systems that feel straightforward, professional, and ready for real operations."
                />
                <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                  We design business systems with clean interfaces, disciplined structure, and careful attention to
                  everyday workflows. The result is software that supports teams without adding noise.
                </p>
              </div>
              <div className="border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/30">
                <div className="space-y-5">
                  {[
                    ['Professional presentation', 'Minimal layouts that signal confidence and reliability.'],
                    ['Business-first thinking', 'Software structured around inventory, billing, and operations.'],
                    ['Future-ready scope', 'Room for websites, automation, and custom software later.'],
                  ].map(([title, description]) => (
                    <div key={title} className="border-b border-zinc-200 pb-5 last:border-0 last:pb-0 dark:border-zinc-800">
                      <p className="text-sm font-semibold text-zinc-950 dark:text-white">{title}</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-y border-zinc-200 bg-zinc-950 py-20 text-white dark:border-zinc-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
                  Contact
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to discuss a system for your shop or business?
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  Start with a quick WhatsApp conversation or request a consultation. We keep the process clear,
                  practical, and focused on your business needs.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="https://wa.me/+923296343264"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  WhatsApp Us
                </a>
                <a
                  href="mailto:infostock@gmail.com"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Email Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">{title}</h2>
      <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base dark:text-zinc-300">{description}</p>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            StockBridge
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Premium business software for stock control, billing, and reliable operations.
          </p>
        </div>
        <div className="grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
          <FooterItem label="Phone" value="+92 329 634 3264" />
          <FooterItem label="Email" value="infostock@gmail.com" />
          <FooterItem label="WhatsApp" value="wa.me/+923296343264" />
          <FooterItem label="Domain" value="stockbridge.com" />
        </div>
      </div>
      <div className="border-t border-zinc-200 py-5 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} StockBridge. All rights reserved.
      </div>
    </footer>
  )
}

function FooterItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 px-4 py-3 dark:border-zinc-800">
      <span className="block text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400">{label}</span>
      <span className="mt-2 block text-sm text-zinc-700 dark:text-zinc-200">{value}</span>
    </div>
  )
}

export default App
