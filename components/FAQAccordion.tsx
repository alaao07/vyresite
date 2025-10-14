'use client'

import { useState } from 'react'
import styles from './FAQAccordion.module.css'

const faqs = [
  {
    question: 'How does Vyre maintain conversation context?',
    answer: 'Vyre stores recent message history securely and uses it to understand the flow of your conversations. This allows for natural, contextual responses that build on previous interactions.'
  },
  {
    question: 'Is my data kept private and secure?',
    answer: 'Absolutely. All data is encrypted in transit and at rest. We process messages through Gemini AI with strict privacy controls and never share your information with third parties.'
  },
  {
    question: 'Can I customize Vyre for my server?',
    answer: 'Yes! Through the dashboard you can configure response styles, set custom commands, manage permissions, and tailor Vyre to fit your community needs.'
  }
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggle(index)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className="fade-in">Frequently Asked Questions</h2>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const itemId = `faq-item-${index}`
            const contentId = `faq-content-${index}`
            
            return (
              <div key={index} className={`${styles.item} gui-card`}>
                <button
                  className={styles.question}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  id={itemId}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={isOpen ? styles.iconOpen : ''}
                    aria-hidden="true"
                  >
                    <path
                      d="M5 8 L10 13 L15 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                
                {isOpen && (
                  <div
                    className={`${styles.answer} reveal-left`}
                    id={contentId}
                    role="region"
                    aria-labelledby={itemId}
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
