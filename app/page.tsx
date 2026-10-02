import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import {
  OverviewSection,
  MirrorSection,
  SlotsSection,
  RegisterSection,
  BonusSection,
  PaymentsSection,
  MobileSection,
  BlockSection,
  WhySection,
  ResponsibleSection,
} from '@/components/landing/sections'
import { Faq } from '@/components/landing/faq'
import { Reviews } from '@/components/landing/reviews'
import { Footer } from '@/components/landing/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OverviewSection />
        <MirrorSection />
        <SlotsSection />
        <RegisterSection />
        <BonusSection />
        <PaymentsSection />
        <MobileSection />
        <BlockSection />
        <WhySection />
        <ResponsibleSection />
        <Faq />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
