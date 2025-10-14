'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './MobileNav.module.css'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.mobile}>
      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isOpen && (
        <nav className={styles.menu} aria-label="Mobile navigation">
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link href="/settings" onClick={() => setIsOpen(false)}>Settings</Link>
          <Link href="/privacy" onClick={() => setIsOpen(false)}>Privacy</Link>
        </nav>
      )}
    </div>
  )
}
