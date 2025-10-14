'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SettingsPage() {
  const [theme, setTheme] = useState('dark')
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    const savedCompact = localStorage.getItem('compact') === 'true'
    setTheme(saved)
    setCompact(savedCompact)
    document.documentElement.setAttribute('data-theme', saved)
    if (savedCompact) document.body.classList.add('compact')
  }, [])

  const handleTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value
    setTheme(val)
    localStorage.setItem('theme', val)
    document.documentElement.setAttribute('data-theme', val)
  }

  const handleCompact = () => {
    const newVal = !compact
    setCompact(newVal)
    localStorage.setItem('compact', String(newVal))
    document.body.classList.toggle('compact')
  }

  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '6rem 1.5rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 className="fade-in" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '3rem' }}>Settings</h1>

        <Section title="Appearance">
          <Item title="Theme" desc="Choose between light dark and system mode">
            <select value={theme} onChange={handleTheme} style={{
              padding: '0.625rem 1.25rem',
              background: 'var(--card-bg)',
              color: 'var(--text-primary)',
              border: '1px solid var(--g-200)',
              borderRadius: '0.75rem',
              fontFamily: 'inherit',
              cursor: 'pointer'
            }}>
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
          </Item>

          <Item title="Compact Mode" desc="Reduce spacing and size of UI elements">
            <button
              onClick={handleCompact}
              style={{
                position: 'relative',
                width: '56px',
                height: '32px',
                background: compact ? 'var(--g-500)' : 'var(--card-bg)',
                border: `2px solid ${compact ? 'var(--g-500)' : 'var(--g-200)'}`,
                borderRadius: '32px',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <span style={{
                position: 'absolute',
                top: '3px',
                left: compact ? 'calc(100% - 25px)' : '3px',
                width: '22px',
                height: '22px',
                background: compact ? 'white' : 'var(--text-secondary)',
                borderRadius: '50%',
                transition: 'all 0.3s'
              }} />
            </button>
          </Item>
        </Section>

        <Section title="Privacy & Data">
          <Item title="Data Collection" desc="Manage what data is collected">
            <Link href="/privacy" style={{ color: 'var(--g-500)', textDecoration: 'none', fontWeight: 500 }}>Manage →</Link>
          </Item>
          <Item title="Clear All Data" desc="Delete all locally stored data">
            <button onClick={() => { localStorage.clear(); alert('Data cleared') }} style={{
              padding: '0.625rem 1.5rem',
              background: 'rgba(255, 80, 80, 0.15)',
              color: '#ff5050',
              border: '1px solid #ff5050',
              borderRadius: '0.75rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}>Clear</button>
          </Item>
        </Section>

        <Section title="About">
          <Item title="Version" desc="Current version of Vyre">
            <span style={{ color: 'var(--g-500)', fontWeight: 600, fontSize: '1.125rem' }}>v2.1</span>
          </Item>
        </Section>
      </main>
      <Footer />
    </>
  )
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <h2 style={{ fontSize: '1.75rem', color: 'var(--g-500)', marginBottom: '1.5rem' }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {children}
      </div>
    </section>
  )
}

function Item({ title, desc, children }: { title: string, desc: string, children: React.ReactNode }) {
  return (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', padding: '2rem' }}>
      <div>
        <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{desc}</p>
      </div>
      {children}
    </div>
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
        justifyContent: 'space-between'
      }}>
        <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>← Back to Home</Link>
        <span style={{ fontSize: '1.25rem', fontWeight: 700 }}><span className="neon-text">Vyre</span></span>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--g-200)',
      padding: '2rem 1.5rem',
      marginTop: '6rem',
      background: 'rgba(10, 15, 10, 0.5)',
      textAlign: 'center'
    }}>
      <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>© 2025 Vyre v2.1</span>
    </footer>
  )
}
