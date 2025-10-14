import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DashboardCards from '@/components/DashboardCards'
import styles from './dashboard.module.css'

export default function DashboardPage() {
  return (
    <>
      <Header showDiscordButton />
      <main className={styles.container}>
        <div className={styles.hero}>
          <h1 className="fade-in">Welcome to <span className="neon-text">Vyre</span></h1>
          <p className="fade-in-delay">Sign in to access your dashboard</p>
        </div>
        <DashboardCards />
      </main>
      <Footer />
    </>
  )
}
