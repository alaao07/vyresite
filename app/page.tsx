import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10, 15, 10, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--g-200)',
      padding: '1rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--neon)',
          textDecoration: 'none'
        }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1"/>
            <path d="M10 12 L16 20 L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span>Vyre</span>
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/dashboard" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Dashboard</Link>
          <Link href="/settings" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Settings</Link>
          <Link href="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>Privacy</Link>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <div className="neon-pulse" style={{ marginBottom: '1rem' }}>
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="85" fill="url(#grad)" />
            <circle cx="90" cy="90" r="75" fill="var(--bg-primary)" opacity="0.95" />
            <circle cx="65" cy="75" r="10" fill="var(--neon)" />
            <circle cx="115" cy="75" r="10" fill="var(--neon)" />
            <path d="M 60 105 Q 90 120 120 105" stroke="var(--neon)" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M 45 55 Q 50 45 60 50" stroke="var(--neon)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 135 55 Q 130 45 120 50" stroke="var(--neon)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--g-500)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--g-700)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="card fade-in" style={{ padding: '0.75rem 2rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text-secondary)' }}>
            POWERED BY GEMINI 2.5 FLASH
          </span>
        </div>

        <h1 className="fade-delay" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', fontWeight: 700, lineHeight: 1.2, margin: 0 }}>
          Introducing <span className="neon-text">Vyre</span>
        </h1>

        <p className="fade-delay" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6 }}>
          Your AI assistant and friend for daily tasks and automation.
        </p>

        <div className="fade-delay" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
          <a href={process.env.NEXT_PUBLIC_ADD_URL || '#'} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Add Bot
          </a>
          <a href="#features" className="btn btn-secondary">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      title: 'Intelligent Context',
      desc: 'Understands conversation history and maintains meaningful context across interactions',
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="var(--g-500)" strokeWidth="2"/><path d="M20 12 L20 20 L26 26" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round"/></svg>
    },
    {
      title: 'Task Automation',
      desc: 'Handles daily tasks scheduling reminders and workflow management effortlessly',
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="24" height="24" rx="4" stroke="var(--g-500)" strokeWidth="2"/><path d="M14 20 L18 24 L26 14" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    },
    {
      title: 'Natural Language',
      desc: 'Powered by Gemini 2.5 Flash for fluid human-like conversations and responses',
      icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M10 24 Q15 16 20 20 T30 16" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round" fill="none"/><circle cx="10" cy="24" r="2" fill="var(--g-500)"/><circle cx="20" cy="20" r="2" fill="var(--g-500)"/><circle cx="30" cy="16" r="2" fill="var(--g-500)"/></svg>
    }
  ]

  return (
    <section id="features" style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Powerful Capabilities</h2>
          <p className="fade-delay" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Everything you need in an AI assistant</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {features.map((f, i) => (
            <article key={i} className="card" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '1.5rem', display: 'inline-block' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--g-500)' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="fade-in" style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
        
        <FAQClient />
      </div>
    </section>
  )
}

function FAQClient() {
  'use client'
  const [open, setOpen] = React.useState<number | null>(null)
  const React = require('react')

  const faqs = [
    { q: 'How does Vyre maintain conversation context?', a: 'Vyre stores recent message history securely and uses it to understand the flow of your conversations.' },
    { q: 'Is my data kept private and secure?', a: 'All data is encrypted in transit and at rest. We process messages through Gemini AI with strict privacy controls.' },
    { q: 'Can I customize Vyre for my server?', a: 'Yes! Through the dashboard you can configure response styles and set custom commands.' }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, i) => (
        <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1.5rem 2rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              textAlign: 'left',
              fontFamily: 'inherit'
            }}
          >
            <span>{faq.q}</span>
            <span style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
          </button>
          {open === i && (
            <div style={{ padding: '0 2rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <p>{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--g-200)',
      padding: '2rem 1.5rem',
      marginTop: '6rem',
      background: 'rgba(10, 15, 10, 0.5)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="11" fill="var(--g-500)" opacity="0.2"/>
            <path d="M8 10 L12 14 L16 10" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontWeight: 700, fontSize: '1.125rem' }}>Vyre</span>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>v2.1</span>
        </div>

        <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy</Link>
          <Link href="/terms" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Terms</Link>
          <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.875rem' }}>Discord Policies</a>
        </nav>
      </div>
    </footer>
  )
}
