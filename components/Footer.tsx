import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.avatar} aria-hidden="true">
            <circle cx="12" cy="12" r="11" fill="var(--g-500)" opacity="0.2"/>
            <path d="M8 10 L12 14 L16 10" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className={styles.name}>Vyre</span>
          <span className={styles.version}>v2.1</span>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer">Discord Policies</a>
        </nav>
      </div>
    </footer>
  )
}
