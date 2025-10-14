'use client'

import { useEffect, useState } from 'react'
import Toggle from './Toggle'
import styles from './SettingsPanel.module.css'

export default function SettingsPanel() {
  const [theme, setTheme] = useState('dark')
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    const savedCompact = localStorage.getItem('compact') === 'true'
    
    setTheme(savedTheme)
    setCompact(savedCompact)
    
    applyTheme(savedTheme)
    if (savedCompact) {
      document.body.classList.add('compact')
    }
  }, [])

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
    } else {
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  }

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  const handleCompactToggle = (enabled: boolean) => {
    setCompact(enabled)
    localStorage.setItem('compact', String(enabled))
    if (enabled) {
      document.body.classList.add('compact')
    } else {
      document.body.classList.remove('compact')
    }
  }

  const handleClearData = () => {
    if (confirm('Clear all locally stored data?')) {
      localStorage.clear()
      alert('Data cleared')
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Appearance</h2>
        
        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Theme</h3>
            <p>Choose between light, dark, and system mode</p>
          </div>
          <select value={theme} onChange={handleThemeChange} className={styles.select}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="system">System</option>
          </select>
        </div>

        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Compact Mode</h3>
            <p>Reduce spacing and size of UI elements</p>
          </div>
          <Toggle checked={compact} onChange={handleCompactToggle} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Privacy & Data</h2>
        
        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Data Collection</h3>
            <p>Manage what data is collected</p>
          </div>
          <a href="/privacy" className={styles.link}>Manage →</a>
        </div>

        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Clear All Data</h3>
            <p>Delete all locally stored data</p>
          </div>
          <button onClick={handleClearData} className={styles.clearBtn}>Clear</button>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Legal</h2>
        
        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Terms of Service</h3>
            <p>View our terms of service</p>
          </div>
          <a href="/terms" className={styles.link}>View →</a>
        </div>

        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Privacy Policy</h3>
            <p>View our privacy policy</p>
          </div>
          <a href="/privacy" className={styles.link}>View →</a>
        </div>
      </section>

      <section className={styles.section}>
        <h2>About</h2>
        
        <div className={`${styles.item} gui-card`}>
          <div className={styles.info}>
            <h3>Version</h3>
            <p>Current version of Vyre</p>
          </div>
          <span className={styles.version}>v2.1</span>
        </div>
      </section>
    </div>
  )
}
