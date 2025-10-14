import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} hover-ripple`

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
