'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function App() {
  const path = usePathname()
  
  if (path === '/dashboard') return <Dashboard />
  if (path === '/settings') return <Settings />
  if (path === '/privacy') return <Privacy />
  return <Home />
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem' }}>
          <div style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            
            <div className="pulse" style={{ marginBottom: '1rem' }}>
              <svg width="180" height="180" viewBox="0 0 180 180" style={{ border: '3px solid var(--neon)', borderRadius: '50%', filter: 'drop-shadow(0 0 20px rgba(159,255,143,0.5))' }}>
                <circle cx="90" cy="90" r="85" fill="url(#g)" />
                <circle cx="90" cy="90" r="75" fill="var(--dark)" opacity="0.95" />
                <circle cx="65" cy="75" r="10" fill="var(--neon)" />
                <circle cx="115" cy="75" r="10" fill="var(--neon)" />
                <path d="M60 105 Q90 120 120 105" stroke="var(--neon)" strokeWidth="5" strokeLinecap="round" fill="none" />
                <path d="M45 55 Q50 45 60 50" stroke="var(--neon)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M135 55 Q130 45 120 50" stroke="var(--neon)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="g">
                    <stop offset="0%" stopColor="var(--green)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2d8a55" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="card fade" style={{ padding: '0.75rem 2rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: 'var(--text2)' }}>POWERED BY GEMINI 2.5 FLASH</span>
            </div>

            <h1 className="fade" style={{ fontSize: 'clamp(3rem, 8vw, 4rem)', fontWeight: 700, lineHeight: 1.2 }}>
              Introducing <span className="neon">Vyre</span>
            </h1>

            <p className="fade" style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: 'var(--text2)', maxWidth: '600px' }}>
              Your AI assistant and friend for daily tasks and automation.
            </p>

            <div className="fade" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
              <a href="#" className="btn btn-primary">Add Bot</a>
              <a href="#features" className="btn btn-secondary">Learn more</a>
            </div>
          </div>
        </section>

        <section id="features" style={{ padding: '6rem 1.5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>Powerful Capabilities</h2>
            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text2)', marginBottom: '4rem' }}>Everything you need in an AI assistant</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Intelligent Context', desc: 'Understands conversation history and maintains meaningful context' },
                { title: 'Task Automation', desc: 'Handles daily tasks scheduling and workflow management' },
                { title: 'Natural Language', desc: 'Powered by Gemini for fluid conversations' }
              ].map((f, i) => (
                <div key={i} className="card" style={{ textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--green)' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text2)' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  const faqs = [
    { q: 'How does Vyre maintain conversation context?', a: 'Vyre stores recent message history securely.' },
    { q: 'Is my data kept private and secure?', a: 'All data is encrypted in transit and at rest.' },
    { q: 'Can I customize Vyre?', a: 'Yes through the dashboard you can configure everything.' }
  ]

  return (
    <section style={{ padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem' }}>FAQ</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card" style={{ padding: 0 }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1.5rem 2rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: 'var(--text)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'inherit'
              }}>
                {faq.q}
                <span style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>▼</span>
              </button>
              {open === i && <div style={{ padding: '0 2rem 1.5rem', color: 'var(--text2)' }}>{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Dashboard() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '6rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem' }}>
          Welcome to <span className="neon">Vyre</span>
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.25rem', color: 'var(--text2)', marginBottom: '4rem' }}>Sign in to access your dashboard</p>

        <div className="card" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1.25rem 3rem',
            background: '#5865F2',
            color: 'white',
            border: 'none',
            borderRadius: '1.5rem',
            fontSize: '1.125rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit'
          }}>
            <span>Continue with Discord</span>
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', width: '100%' }}>
            {[
              { icon: '⚡', title: 'Instant Access', desc: 'Full features from day one' },
              { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade protection' },
              { icon: '🌐', title: 'Community', desc: 'Join thousands of users' }
            ].map((f, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--green)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text2)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Settings() {
  const [theme, setTheme] = useState('dark')
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const t = localStorage.getItem('theme') || 'dark'
    const c = localStorage.getItem('compact') === 'true'
    setTheme(t)
    setCompact(c)
    if (t === 'light') document.body.classList.add('light')
    if (c) document.body.classList.add('compact')
  }, [])

  const changeTheme = (e) => {
    const val = e.target.value
    setTheme(val)
    localStorage.setItem('theme', val)
    document.body.classList.toggle('light', val === 'light')
  }

  const toggleCompact = () => {
    const newVal = !compact
    setCompact(newVal)
    localStorage.setItem('compact', String(newVal))
    document.body.classList.toggle('compact')
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '3rem' }}>Settings</h1>

        <h2 style={{ fontSize: '1.75rem', color: 'var(--green)', marginBottom: '1.5rem' }}>Appearance</h2>
        
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>Theme</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>Choose light or dark mode</p>
          </div>
          <select value={theme} onChange={changeTheme} style={{
            padding: '0.625rem 1.25rem',
            background: 'var(--card)',
            color: 'var(--text)',
            border: '1px solid rgba(102,192,138,0.2)',
            borderRadius: '0.75rem',
            fontFamily: 'inherit',
            cursor: 'pointer'
          }}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>Compact Mode</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>Reduce spacing</p>
          </div>
          <button onClick={toggleCompact} style={{
            position: 'relative',
            width: '56px',
            height: '32px',
            background: compact ? 'var(--green)' : 'var(--card)',
            border: `2px solid ${compact ? 'var(--green)' : 'rgba(102,192,138,0.2)'}`,
            borderRadius: '32px',
            cursor: 'pointer',
            padding: 0
          }}>
            <span style={{
              position: 'absolute',
              top: '3px',
              left: compact ? 'calc(100% - 25px)' : '3px',
              width: '22px',
              height: '22px',
              background: compact ? 'white' : 'var(--text2)',
              borderRadius: '50%',
              transition: 'all 0.3s'
            }} />
          </button>
        </div>

        <h2 style={{ fontSize: '1.75rem', color: 'var(--green)', marginBottom: '1.5rem' }}>About</h2>
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3>Version</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>Current version</p>
          </div>
          <span style={{ color: 'var(--green)', fontWeight: 600, fontSize: '1.125rem' }}>v2.1</span>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Privacy() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '6rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
        <div className="card" style={{ padding: '3rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text2)', fontSize: '0.875rem', marginBottom: '3rem' }}>Last updated: January 2025</p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--green)', marginBottom: '1rem' }}>Information Collection</h2>
          <p style={{ marginBottom: '2.5rem', color: 'var(--text2)' }}>We collect minimal data necessary to provide Vyre services.</p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--green)', marginBottom: '1rem' }}>Data Usage</h2>
          <p style={{ marginBottom: '2.5rem', color: 'var(--text2)' }}>Your data powers AI responses and maintains conversation context.</p>

          <h2 style={{ fontSize: '1.5rem', color: 'var(--green)', marginBottom: '1rem' }}>Data Protection</h2>
          <p style={{ color: 'var(--text2)' }}>All data is encrypted and we never sell your information.</p>
        </div>
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
      borderBottom: '1px solid rgba(102,192,138,0.2)',
      padding: '1rem 1.5rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', fontWeight: 700, color: 'var(--neon)', textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.1"/>
            <path d="M10 12 L16 20 L22 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          Vyre
        </Link>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link href="/dashboard" style={{ color: 'var(--text2)', textDecoration: 'none' }}>Dashboard</Link>
          <Link href="/settings" style={{ color: 'var(--text2)', textDecoration: 'none' }}>Settings</Link>
          <Link href="/privacy" style={{ color: 'var(--text2)', textDecoration: 'none' }}>Privacy</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(102,192,138,0.2)', padding: '2rem 1.5rem', textAlign: 'center' }}>
      <span style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>© 2025 Vyre v2.1</span>
    </footer>
  )
}
