import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './privacy.module.css'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <article className={styles.content}>
          <h1 className="fade-in">Privacy Policy</h1>
          <p className={styles.updated}>Last updated: January 2025</p>

          <section className="scroll-reveal">
            <h2>Information Collection</h2>
            <p>We collect minimal data necessary to provide Vyre's services. This includes Discord user identifiers, message content for AI processing, and usage analytics to improve functionality.</p>
          </section>

          <section className="scroll-reveal">
            <h2>Data Usage</h2>
            <p>Your data powers Vyre's AI responses and helps us maintain conversation context. We process messages through Gemini 2.5 Flash and store conversation history securely.</p>
          </section>

          <section className="scroll-reveal">
            <h2>Data Protection</h2>
            <p>All data is encrypted in transit and at rest. We implement industry-standard security measures and never sell your information to third parties.</p>
          </section>

          <section className="scroll-reveal">
            <h2>Your Rights</h2>
            <p>You can request data deletion, access your stored information, or opt out of certain features at any time through the dashboard or by contacting support.</p>
          </section>

          <section className="scroll-reveal">
            <h2>Third-Party Services</h2>
            <p>Vyre uses Google Gemini AI for natural language processing. Your messages are subject to Google's AI terms and privacy policies during processing.</p>
          </section>

          <div className={styles.links}>
            <a href="/">Return Home</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
