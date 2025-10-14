import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '6rem 1.5rem 4rem', maxWidth: '900px', margin: '0 auto' }}>
        <article className="card" style={{ padding: '3rem' }}>
          <h1 className="fade-in" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--g-700)', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '3rem' }}>Last updated: January 2025</p>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--g-500)', marginBottom: '1rem' }}>Information Collection</h2>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>We collect minimal data necessary to provide Vyre services. This includes Discord user identifiers message content for AI processing and usage analytics to improve functionality.</p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--g-500)', marginBottom: '1rem' }}>Data Usage</h2>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>Your data powers Vyre AI responses and helps us maintain conversation context. We process messages through Gemini 2.5 Flash and store conversation history securely.</p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--g-500)', marginBottom: '1rem' }}>Data Protection</h2>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>All data is encrypted in transit and at rest. We implement industry-standard security measures and never sell your information to third parties.</p>
          </section>

          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--g-500)', marginBottom: '1rem' }}>Your Rights</h2>
            <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>You can request data deletion access your stored information or opt out of certain features at any time through the dashboard or by contacting support.</p>
          </section>

          <div style={{ display: 'flex', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--g-200)', marginTop: '3rem' }}>
            <Link href="/" style={{ color: 'var(--g-500)', textDecoration: 'none', fontWeight: 500 }}>Return Home</Link>
            <Link href="/terms" style={{ color: 'var(--g-500)', textDecoration: 'none', fontWeight: 500 }}>Terms of Service</Link>
          </div>
        </article>
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
