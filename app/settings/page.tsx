import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SettingsPanel from '@/components/SettingsPanel'
import styles from './settings.module.css'

export default function SettingsPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1 className="fade-in">Settings</h1>
        <SettingsPanel />
      </main>
      <Footer />
    </>
  )
}
