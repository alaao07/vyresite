import NeonAvatar from './NeonAvatar'
import Button from './Button'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <NeonAvatar />
        
        <div className={`${styles.badge} gui-card fade-in`}>
          <span className={styles.powered}>POWERED BY GEMINI 2.5 FLASH</span>
        </div>

        <h1 className={`${styles.title} fade-in-delay`}>
          Introducing <span className="neon-text">Vyre</span>
        </h1>

        <p className={`${styles.subtitle} fade-in-delay`}>
          Your AI assistant and friend for daily tasks and automation.
        </p>

        <div className={`${styles.ctas} fade-in-delay`}>
          <Button variant="primary" href={process.env.NEXT_PUBLIC_ADD_URL || '#'}>
            Add Bot
          </Button>
          <Button variant="secondary" href="#features">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  )
}
