import styles from './NeonAvatar.module.css'

export default function NeonAvatar() {
  return (
    <div className={`${styles.wrapper} neon-pulse`}>
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        className={styles.avatar}
        aria-label="Vyre bot avatar"
      >
        <circle cx="90" cy="90" r="85" fill="url(#avatarGrad)" />
        <circle cx="90" cy="90" r="75" fill="var(--bg-primary)" opacity="0.95" />
        <circle cx="65" cy="75" r="10" fill="var(--neon)" />
        <circle cx="115" cy="75" r="10" fill="var(--neon)" />
        <path
          d="M 60 105 Q 90 120 120 105"
          stroke="var(--neon)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 45 55 Q 50 45 60 50"
          stroke="var(--neon)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 135 55 Q 130 45 120 50"
          stroke="var(--neon)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <defs>
          <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--g-500)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--g-700)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
