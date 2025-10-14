import styles from './FeatureGrid.module.css'

const features = [
  {
    title: 'Intelligent Context',
    description: 'Understands conversation history and maintains meaningful context across interactions',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="var(--g-500)" strokeWidth="2"/>
        <path d="M20 12 L20 20 L26 26" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    title: 'Task Automation',
    description: 'Handles daily tasks, scheduling, reminders, and workflow management effortlessly',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="var(--g-500)" strokeWidth="2"/>
        <path d="M14 20 L18 24 L26 14" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: 'Natural Language',
    description: 'Powered by Gemini 2.5 Flash for fluid, human-like conversations and responses',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M10 24 Q15 16 20 20 T30 16" stroke="var(--g-500)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="10" cy="24" r="2" fill="var(--g-500)"/>
        <circle cx="20" cy="20" r="2" fill="var(--g-500)"/>
        <circle cx="30" cy="16" r="2" fill="var(--g-500)"/>
      </svg>
    )
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className="fade-in">Powerful Capabilities</h2>
          <p className="fade-in-delay">Everything you need in an AI assistant</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, i) => (
            <article key={i} className={`${styles.card} gui-card scroll-reveal`}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
