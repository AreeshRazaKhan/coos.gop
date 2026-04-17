import CredentialStrip from '@/components/home/credential-strip'
import CtaSection from '@/components/home/cta-section'
import Events from '@/components/home/events'
import Hero from '@/components/home/hero'
import Manifesto from '@/components/home/manifesto'
import Marquee from '@/components/home/marquee'
import MeetRuss from '@/components/home/meet-russ'
import Pillars from '@/components/home/pillars'
import SiteFooter from '@/components/home/site-footer'

const Home = () => {
  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <CredentialStrip />
        <Marquee />
        <Manifesto />
        <Pillars />
        <MeetRuss />
        <Events />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default Home
