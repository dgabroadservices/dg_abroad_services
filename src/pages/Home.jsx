import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import VisionMission from '../components/home/VisionMission'
import ServicesSection from '../components/home/ServicesSection'
import ProcessFlow from '../components/home/ProcessFlow'
import GermanyOpportunities from '../components/home/GermanyOpportunities'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/home/CTASection'
import ContactPreview from '../components/home/ContactPreview'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMission />
        <ServicesSection />
        <ProcessFlow />
        <GermanyOpportunities />
        <Testimonials />
        <CTASection />
        <ContactPreview />
      </main>
      <Footer />
    </>
  )
}

export default Home
