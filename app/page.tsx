import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeatureGrid from '@/components/FeatureGrid'
import FAQAccordion from '@/components/FAQAccordion'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <FAQAccordion />
      </main>
      <Footer />
    </>
  )
}
