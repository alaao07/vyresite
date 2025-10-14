import Link from 'next/link'

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '6rem 1.5rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="fade-in" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, marginBottom: '1rem' }}>
            Welcome to <span className="neon-text">Vyre</span>
          </h1>
          <p className="fade-delay" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Sign in to access your dashboard</p>
        </div>

        <div className="card" style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center' }}>
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
            transition: 'all 0.3s',
            fontFamily: 'inherit'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            <span>Continue with Discord</span>
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', width: '100%' }}>
            {[
              { icon: '⚡', title: 'Instant Access', desc: 'Jump right in with full features enabled from day one' },
              { icon: '🔒', title: 'Secure & Private', desc: 'Enterprise-grade protection for all your data' },
              { icon: '🌐', title: 'Community Ready', desc: 'Join thousands of users already on the platform' }
            ].map((f, i) => (
              <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--g-500)' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            By signing in you agree to our <a href="/privacy" style={{ color: 'var(--g-500)', textDecoration: 'none' }}>Terms</a> and <a href="/privacy" style={{ color: 'var(--g-500)', textDecoration: 'none' }}>Privacy Policy</a>
          </p>
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
